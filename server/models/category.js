const mongoose = require("mongoose")
const Schema = mongoose.Schema
const slugify = require("slugify")

const categorySchema = new Schema({
  name: { type: String, required: true, length: { min: 3, max: 200 } },
  slug: { type: String },
  desc: { type: String, length: { min: 3 } },
})

const options = {
  lower: true,
  trim: true,
  remove: /[*+~.()'"!:@]/g,
}

categorySchema.pre("save", async function (next) {
  let slug = slugify(this.name, options)
  let exists = await Category.exists({ slug: slug })
  let index = 1
  while (exists) {
    slug = slugify(this.name, options) + "-" + index
    exists = await Category.exists({ slug: slug })
    index++
  }
  this.slug = slug
  next()
})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category
