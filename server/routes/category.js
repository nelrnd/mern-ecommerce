const express = require("express")
const Router = express.Router()
const categoryController = require("../controllers/category")

Router.get("/", categoryController.category_list)

Router.post("/", categoryController.category_create)

Router.get("/:categoryId", categoryController.category_detail)

Router.put("/:categoryId", categoryController.category_update)

Router.delete("/:categoryId", categoryController.category_delete)

module.exports = Router
