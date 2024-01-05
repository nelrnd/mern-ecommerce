const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: { type: String, required: true, length: { min: 3, max: 200 } },
  desc: { type: String, length: { min: 3 } },
  price: { type: Number, required: true, min: 0 },
})

module.exports = mongoose.model("Product", productSchema)
