const express = require("express")
const Router = express.Router()
const userController = require("../controllers/user")

Router.post("/", userController.user_create)

Router.put("/:userId", userController.user_update)

Router.delete("/:userId", userController.user_delete)

module.exports = Router
