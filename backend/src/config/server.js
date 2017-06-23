const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function(){
    console.log('My Finance Backend is running on port 3000');
});