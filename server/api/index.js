'use strict';

const ressources= require('./controllers/ressources');
const bodyParser=require('body-parser');

const { Router } = require('express');

const apiRoutes = new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());


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


// module.exports={
// 	ressources:ressources,
// };

module.exports = apiRoutes;
