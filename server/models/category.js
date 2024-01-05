const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true, length: { min: 3, max: 200 } },
  desc: { type: String, length: { min: 3 } },
})

module.exports = mongoose.model("Category", categorySchema)
