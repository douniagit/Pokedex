'use strict';

const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const suggestions= require('./controllers/suggestions');
const bodyParser=require('body-parser');

const { Router } = require('express');

const apiRoutes = new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

//------------------users--------------------

apiRoutes.post('/users', function (req,res) { //ou .get?
	//methode de controller
	return users.create(req,res);
});

apiRoutes.get('/users', function (req,res){
	//methode de controller
	return users.find(req,res);
});

apiRoutes.put('/users', function (req,res){

	return users.update(req,res);
});

apiRoutes.delete('/users', function (req,res){

	return users.delete(req,res);
});

//------------------Ressources--------------------

apiRoutes.post('/ressources', function (req,res){ //ou .get?
	//methode de controller
	console.log('test post : ', ressources);
	return ressources.create(req,res);
});

apiRoutes.get('/ressources', function (req,res){
	//methode de controller
	console.log('Bonjour je suis la route get ressources');
	return ressources.find(req,res);
	console.log('Je suis la méthode find.');
});

apiRoutes.put('/ressources', function (req,res){
	//methode de controller
	return ressources.update(req,res);
});

// apiRoutes.post('/ressources', function (req,res){
// 	//methode de controller
// 	ressources.add(req,res);
// });

apiRoutes.delete('/ressources', function (req,res){
	//methode de controller
	return ressources.delete(req,res);
});
//----------------Suggestions--------------

apiRoutes.post('/suggestions', function (req,res){ //ou .get?
	//methode de controller
	return suggestions.create(req,res);
});

apiRoutes.delete('/suggestions', function (req,res){
	//methode de controller

	return suggestions.delete(req,res);
});

// module.exports={
// 	users:users,
// 	ressources:ressources,
//  suggestions:suggestions
// };

module.exports = apiRoutes;
