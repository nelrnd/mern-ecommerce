const Product = require("../models/product")
const asyncHandler = require("express-async-handler")
const multer = require("multer")
const { body, validationResult } = require("express-validator")

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
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Name must be between 3 and 200 characters"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .isInt({ min: 0 })
    .withMessage("Price cannot be a negative number"),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() })
    }

    const product = new Product({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? req.file.path : null,
    })
    await product.save()
    res.json(product)
  }),
]

exports.product_list = asyncHandler(async (req, res) => {
  const list = await Product.find().populate("category").exec()
  res.json(list)
})

exports.product_detail = asyncHandler(async (req, res) => {
  const { productSlug } = req.params
  const product = await Product.findOne({ slug: productSlug })
    .populate("category")
    .exec()
  if (product === null) {
    return res.status(404).json({ error: "Product not found" })
  }
  res.json(product)
})

exports.product_update = [
  upload.single("image"),
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Name must be between 3 and 200 characters"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .isInt({ min: 0 })
    .withMessage("Price cannot be a negative number"),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() })
    }

    const { productSlug } = req.params
    const { name, desc, price, category } = req.body
    const image = req.file ? req.file.path : undefined
    const updatedProduct = await Product.findOneAndUpdate(
      { slug: productSlug },
      { name, desc, price, category, image },
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
