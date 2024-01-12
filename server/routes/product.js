const express = require("express")
const Router = express.Router()
const productController = require("../controllers/product")
const { isAuth, isAdmin } = require("../controllers/auth")

Router.get("/", productController.product_list)

Router.post("/", isAuth, isAdmin, productController.product_create)

Router.get("/:productSlug", productController.product_detail)

Router.put("/:productSlug", isAuth, isAdmin, productController.product_update)

Router.delete(
  "/:productSlug",
  isAuth,
  isAdmin,
  productController.product_delete
)

module.exports = Router
