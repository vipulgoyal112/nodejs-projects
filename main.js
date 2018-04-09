var express = require('express');

var main = express();

var User = require('./api/user');
var abc = require('./main1.js');

abc();
User.def();
main.use('/', User.router);

module.exports = main;