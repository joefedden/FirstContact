var express = require("express");
var app = express();
var port = 8080;

app.get("/", function(req, res) {
	res.send("Welcome to First Contact");
});

app.listen(port, function() {
	console.log("Running on port " + port);
});
