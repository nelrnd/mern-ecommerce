const express = require("express")
const Router = express.Router()
const categoryController = require("../controllers/category")
const { isAuth, isAdmin } = require("../controllers/auth")

Router.get("/", categoryController.category_list)

Router.post("/", isAuth, isAdmin, categoryController.category_create)

Router.get("/:categorySlug", categoryController.category_detail)

Router.put(
  "/:categorySlug",
  isAuth,
  isAdmin,
  categoryController.category_update
)

Router.delete(
  "/:categorySlug",
  isAuth,
  isAdmin,
  categoryController.category_delete
)

module.exports = Router
