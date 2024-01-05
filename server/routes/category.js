const express = require("express")
const Router = express.Router()
const categoryController = require("../controllers/category")

Router.get("/", categoryController.category_list)

Router.post("/", categoryController.category_create)

Router.get("/:categorySlug", categoryController.category_detail)

Router.put("/:categorySlug", categoryController.category_update)

Router.delete("/:categorySlug", categoryController.category_delete)

module.exports = Router
