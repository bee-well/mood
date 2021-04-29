const amqp = require("amqplib")

const config = {
    mock: null
}

const publish = async (queue, msg) => {
    if (config.mock) {
        return config.mock(queue, msg)
    }
    const connection = await amqp.connect(process.env.MQ_CONNECTION_URL)
    const channel = await connection.createChannel()
    await channel.assertQueue(queue)
    channel.sendToQueue(queue, Buffer.from(msg))
}

module.exports.publish = publish
module.exports.mock = config