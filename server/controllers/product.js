const Product = require("../models/product")
const asyncHandler = require("express-async-handler")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const upload = multer({ storage: storage })

exports.product_create = [
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      categories: req.body.categories,
      image: req.file ? req.file.path : null,
    })
    await product.save()
    res.json(product)
  }),
]

exports.product_list = asyncHandler(async (req, res) => {
  const list = await Product.find().populate("categories").exec()
  res.json(list)
})

exports.product_detail = asyncHandler(async (req, res) => {
  const { productSlug } = req.params
  const product = await Product.findOne({ slug: productSlug })
    .populate("categories")
    .exec()
  if (product === null) {
    return res.status(404).json({ error: "Product not found" })
  }
  res.json(product)
})

exports.product_update = [
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const { productSlug } = req.params
    const { name, desc, price, categories } = req.body
    const image = req.file ? req.file.path : undefined
    const updatedProduct = await Product.findOneAndUpdate(
      { slug: productSlug },
      { name, desc, price, categories, image },
      { new: true }
    )
    if (updatedProduct === null) {
      return res.status(404).json({ error: "Product not found" })
    }
    res.json(updatedProduct)
  }),
]

exports.product_delete = asyncHandler(async (req, res) => {
  const { productSlug } = req.params
  const deletedProduct = await Product.findOneAndDelete({ slug: productSlug })
  if (deletedProduct === null) {
    return res.status(404).json({ error: "Product not found" })
  }
  res.json(deletedProduct)
})
