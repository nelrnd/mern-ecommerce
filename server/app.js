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

app.get("/", (req, res) => res.send("Hello World!"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
