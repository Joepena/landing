var express = require('express');
var app = express();
var path = require("path");

app.use("/dist", express.static(__dirname + "/dist"));

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port);
