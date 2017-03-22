//notre serveur http
const express = require('express');
const app = express();
const api = require("./api");


app.use( function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use('/api', api);

app.listen(3001,(err)=>{
	console.log('pokedex active');
})
