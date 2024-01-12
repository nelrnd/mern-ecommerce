const express = require("express")
const Router = express.Router()
const authController = require("../controllers/auth")

Router.post("/register", authController.register, authController.login)

Router.post("/login", authController.register)

module.exports = Router
