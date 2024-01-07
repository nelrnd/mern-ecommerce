const User = require("../models/user")
const asyncHandler = require("express-async-handler")

exports.user_create = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const user = new User({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  })
  await user.save()
  res.json(user)
})

exports.user_update = asyncHandler(async (req, res) => {
  const { userId } = req.params
  const { firstName, lastName, email, password } = req.body
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { first_name: firstName, last_name: lastName, email, password },
    { new: true }
  )
  if (updatedUser === null) {
    return res.status(404).json({ error: "User not found" })
  }
  res.json(updatedUser)
})

exports.user_delete = asyncHandler(async (req, res) => {
  const { userId } = req.params
  const deletedUser = await User.findByIdAndDelete(userId)
  if (deletedUser === null) {
    return res.status(404).json({ error: "User not found" })
  }
  res.json(deletedUser)
})
