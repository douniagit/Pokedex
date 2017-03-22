'use strict';


const express = require('express');
const api = require('./api');

const routes = express();
//routes app.get app.all
routes.use('/api', api);

express.static(__dirname + '/build');

module.exports = routes;
