'use strict';
const mongoose = require('mongoose');
const ressources=require('./models/ressources');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/poke-db'); //local

mongoose.connection.on('error',err=>{
	console.log('ERROR close MongoDB process',err)});

mongoose.connection.on('connected',function(){
	console.log('MongoDB connection succes on poke-db')
});

mongoose.connection.on('disconnected',function(){
	console.log('MongoDB connection disconnected')
});

process.on('SIGINT', function() {
	mongoose.connection.close(function(){
		console.log('Server process terminated. closing poke-db')
		process.exit(0);
	});
});

const db = {
	ressources:mongoose.model('Ressources', ressources)
}

module.exports=db;
