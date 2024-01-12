const express = require("express")
const Router = express.Router()
const userController = require("../controllers/user")
const { isAuth, isSameUserOrAdmin } = require("../controllers/auth")

Router.put("/:userId", isAuth, isSameUserOrAdmin, userController.user_update)

Router.delete("/:userId", isAuth, isSameUserOrAdmin, userController.user_delete)

module.exports = Router
