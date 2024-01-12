const User = require("../models/user")
const bcrypt = require("bcryptjs")

exports.user_update = async (req, res) => {
  const { userId } = req.params
  const { first_name, last_name, email } = req.body
  const password = req.body.password
    ? bcrypt.hashSync(req.body.password, 12)
    : null
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      first_name,
      last_name,
      email,
      password,
    },
    { new: true }
  )
  if (updatedUser === null) {
    return res.status(404).json({ error: "User not found" })
  }
  res.json(updatedUser)
}

exports.user_delete = async (req, res) => {
  const { userId } = req.params
  const deletedUser = await User.findByIdAndDelete(userId)
  if (deletedUser === null) {
    return res.status(404).json({ error: "User not found" })
  }
  res.json(deletedUser)
}
