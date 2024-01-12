const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res, next) => {
  // check if email already exists
  const exists = await User.exists({ email: req.body.email }).exec()
  if (exists) {
    return res.status(400).json({ error: "Email is already used" })
  }
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 12),
  })
  await user.save()
  next()
}

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).exec()
  if (!user) {
    return res.status(404).json({ error: "No user found" })
  }
  const match = bcrypt.compareSync(req.body.password, user.password)
  if (!match) {
    return res.status(400).json({ error: "Invalid password" })
  }
  const SECRET = process.env.SECRET
  const userData = {
    id: user._id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
  }
  const token = jwt.sign(userData, SECRET)
  res.json({ message: "Login successful", user: { ...userData, token } })
}

exports.isAuth = async (req, res, next) => {
  const token = req.headers["x-access-token"]
  if (!token) {
    return res.status(403).json({ message: "No token provided" })
  }
  const SECRET = process.env.SECRET
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" })
    }
    req.user = decoded
    next()
  })
}

exports.isAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id).exec()
  if (user.role === "admin") {
    return next()
  }
  res.status(403).json({ error: "Not authorized, admin only" })
}

exports.isSameUserOrAdmin = async (req, res, next) => {
  const { userId } = req.params
  const user = await User.findById(req.user.id).exec()
  if (user.role === "admin" || userId === user.id) {
    return next()
  }
  res.status(403).json({ error: "Not authorized" })
}
