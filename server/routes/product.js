const express = require("express")
const Router = express.Router()
const productController = require("../controllers/product")

Router.get("/", productController.product_list)

Router.post("/", productController.product_create)

Router.get("/:productId", productController.product_detail)

Router.put("/:productId", productController.product_update)

Router.delete("/:productId", productController.product_delete)

module.exports = Router
