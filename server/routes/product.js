const express = require("express")
const Router = express.Router()
const productController = require("../controllers/product")

Router.get("/", productController.product_list)

Router.post("/", productController.product_create)

Router.get("/:productSlug", productController.product_detail)

Router.put("/:productSlug", productController.product_update)

Router.delete("/:productSlug", productController.product_delete)

module.exports = Router
