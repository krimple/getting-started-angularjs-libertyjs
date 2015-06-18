var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'www')));

http.createServer(app).listen(3000, function() {
  console.log('we are alive on port 3000!');
});
