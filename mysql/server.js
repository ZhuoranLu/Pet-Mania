// Get the packages we need
var express = require('express'),
    router = express.Router(),
    mysql = require('mysql'),
    // mongoose = require('mongoose'),
    // secrets = require('./config/secrets'),
    // bodyParser = require('body-parser');





// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app
