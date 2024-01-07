const mongoose = require("mongoose")
const Schema = mongoose.Schema
const slugify = require("slugify")

const productSchema = new Schema({
  name: { type: String, required: true, length: { min: 3, max: 200 } },
  slug: { type: String },
  desc: { type: String, length: { min: 3 } },
  price: { type: Number, required: true, min: 0 },
  image: { type: String }, // image URL
  sizes: { type: [String] },
  categories: {
    type: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    default: [],
  },
})

const options = {
  lower: true,
  trim: true,
  remove: /[*+~.()'"!:@]/g,
}

productSchema.pre("save", async function (next) {
  let slug = slugify(this.name, options)
  let exists = await Product.exists({ slug: slug })
  let index = 1
  while (exists) {
    slug = slugify(this.name, options) + "-" + index
    exists = await Product.exists({ slug: slug })
    index++
  }
  this.slug = slug
  next()
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
