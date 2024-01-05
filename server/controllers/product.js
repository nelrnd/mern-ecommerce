const Product = require("../models/product")
const asyncHandler = require("express-async-handler")

exports.product_create = asyncHandler(async (req, res) => {
  const { name, desc, price, categories } = req.body
  const product = new Product({ name, desc, price, categories })
  await product.save()
  res.json(product)
})

exports.product_list = asyncHandler(async (req, res) => {
  const list = await Product.find().populate("categories").exec()
  res.json(list)
})

exports.product_detail = asyncHandler(async (req, res) => {
  const { productId } = req.params
  const product = await Product.findById(productId)
    .populate("categories")
    .exec()
  if (product === null) {
    return res.status(404).json({ error: "Product not found" })
  }
  res.json(product)
})

exports.product_update = asyncHandler(async (req, res) => {
  const { productId } = req.params
  const { name, desc, price, categories } = req.body
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { name, desc, price, categories },
    { new: true }
  )
  if (updatedProduct === null) {
    return res.status(404).json({ error: "Product not found" })
  }
  res.json(updatedProduct)
})

exports.product_delete = asyncHandler(async (req, res) => {
  const { productId } = req.params
  const deletedProduct = await Product.findByIdAndDelete(productId)
  if (deletedProduct === null) {
    return res.status(404).json({ error: "Product not found" })
  }
  res.json(deletedProduct)
})
