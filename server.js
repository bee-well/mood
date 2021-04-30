var express = require('express')
const {json} = require('body-parser')
const mongoose = require("mongoose");
const cors = require("cors")
var app = express()
app.use(json())
app.use(cors())
const reportMoodController = require("./controllers/mood-controllers")
app.use(reportMoodController)

const serverPort = process.env.PORT || 3000

const start = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_CONNECTION_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }
        )
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
    app.listen(serverPort, () => {
        console.log("server is listening on port" + serverPort)
    })
}
start()