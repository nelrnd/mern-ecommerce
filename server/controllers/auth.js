const User = require("../models/user")
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = [
  body("full_name")
    .notEmpty()
    .withMessage("Full name is required")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Full name must contain only letters"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email format is incorrect")
    .custom(async (value) => {
      // check if email already exists
      const exists = await User.exists({ email: value }).exec()
      if (exists) {
        throw new Error("Email is already used")
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() })
    }

    const user = new User({
      full_name: req.body.full_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12),
    })

    await user.save()

    next()
  },
]

exports.login = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email format is incorrect"),
  body("password").notEmpty().withMessage("Password is required"),
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() })
    }

    const user = await User.findOne({ email: req.body.email }).exec()
    if (!user) {
      return res
        .status(404)
        .json({ errors: { global: "Incorrect email or password" } })
    }
    const match = bcrypt.compareSync(req.body.password, user.password)
    if (!match) {
      return res
        .status(400)
        .json({ errors: { global: "Incorrect email or password" } })
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
  },
]

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
