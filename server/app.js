require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connect to database
const mongoDb = process.env.MONGODB_URI
const main = async () => mongoose.connect(mongoDb)
main().catch((err) => console.error(err))

const productRouter = require("./routes/product")
const categoryRouter = require("./routes/category")
app.use("/product", productRouter)
app.use("/category", categoryRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
