var express = require('express')
const mongoose = require("mongoose");
var app = express()

const serverPort = process.env.PORT || 3000

app.get('/moods', function (req, res) {

	console.log(req.query);
	res.send("Response sent");
})
const start = async () => {
    let i
    while (i < 3) {
        try {
            const connection = await amqp.connect(process.env.MQ_CONNECTION_URL)
            const channel = await connection.createChannel()
            await channel.assertQueue("moods")
            await channel.consume("moods", onMoodReported)
            break
        } catch (err) {
            if (i == MQ_CONNECTION_TRIES-1) {
                process.exit(1)
            }
            await new Promise((res, _) => setTimeout(res, 5000))
        }
    }
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