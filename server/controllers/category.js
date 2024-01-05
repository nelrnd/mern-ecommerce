const Category = require("../models/category")
const Product = require("../models/product")
const asyncHandler = require("express-async-handler")

exports.category_create = asyncHandler(async (req, res) => {
  const { name, desc } = req.body
  const category = new Category({ name, desc })
  await category.save()
  res.json(category)
})

exports.category_list = asyncHandler(async (req, res) => {
  const list = await Category.find().exec()
  res.json(list)
})

exports.category_detail = asyncHandler(async (req, res) => {
  const { categoryId } = req.params
  const [category, categoryProducts] = await Promise.all([
    Category.findById(categoryId).exec(),
    Product.find({ categories: categoryId }).exec(),
  ])
  if (category === null) {
    return res.status(404).json({ error: "Category not found" })
  }
  res.json({ category, category_products: categoryProducts })
})

exports.category_update = asyncHandler(async (req, res) => {
  const { categoryId } = req.params
  const { name, desc } = req.body
  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    { name, desc },
    { new: true }
  )
  if (updatedCategory === null) {
    return res.status(404).json({ error: "Category not found" })
  }
  res.json(updatedCategory)
})

exports.category_delete = asyncHandler(async (req, res) => {
  const { categoryId } = req.params
  const deletedCategory = await Category.findByIdAndDelete(categoryId)
  if (deletedCategory === null) {
    return res.status(404).json({ error: "Category not found" })
  }
  res.json(deletedCategory)
})
