require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/uploads", express.static("uploads"))

// connect to database
const mongoDb = process.env.MONGODB_URI
const main = async () => mongoose.connect(mongoDb)
main().catch((err) => console.error(err))

const productRouter = require("./routes/product")
const categoryRouter = require("./routes/category")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
app.use("/product", productRouter)
app.use("/category", categoryRouter)
app.use("/auth", authRouter)
app.use("/user", userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
