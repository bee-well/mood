var express = require('express')
var app = express()

const serverPort = 3000;


// "Rest" get request
app.get('/services/timestamp', function (req, res) {

	console.log(req.query);
	res.send("Response sent");
})

app.listen(serverPort, () => {
	console.log("Server listening on port: " + serverPort);
})

