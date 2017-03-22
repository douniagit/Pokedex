'use strict';

const db = require('../../database');

const users = {
	create : (req,res)=>{
		//je cree mon user
		var newUser= new db.users(req.body); //ca signifie var newUser= new UserSchema({name:'admin'})
		newUser.save()
		.then(data =>{
			res.status(200).send('operation reussi: \n' +data)
		})
		.catch(err =>{
			res.status(500).send('operation failed:\n' +err)
		})
	},
	find:function(req,res){
		console.log('Bonjour je suis le find de ressource.');
		db.users.find({name:req.params.id})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},
}

// .post(function(req,res){
// 		var user= new User();

// 		user.name=req.body.name;
// 		user.username=req.body.username;
// 		user.password=req.body.password;

// 		user.save(function(err){
// 			if(err){
// 				if(err.code==11000)
// 					return res.json({success:false,message:"User deja existant."});
// 				else
// 					return res.send(err);
// 			}
// 				res.json({message:"successfull"});
// 		});
// 	})
// 	.get(function(req,res){
// 		User.find(function(err,user){ //User, est en fait mongoDB
// 			if(err) res.send(err);
// 			res.json(user);
// 	});
// });

// apiRouter.route('/admin/:user_id')
// 	.get(function(req,res){
// 		User.findById(req.params.user_id,function(err,user){
// 			if(err) res.send(err);

// 			res.json(user)
// 		});
// 	})
// 	.put(function(req,res){
// 			User.findById(req.params.user_id, function(err,user){
// 			if(err) res.send(err);

// 			if(req.body.name) user.name=req.body.name;
// 			if(req.body.username) user.username=req.body.username;
// 			if(req.body.password) user.password=req.body.password;

// 			user.save(function(err){
// 				if(err) res.send(err);

// 				res.json({message:"User est mis à jour"});
// 			});
// 	});
// 	})
// 	.delete(function(req,res){
// 		User.remove({
// 		_id:req.params.user_id
// 		}, function(err,user){
// 		if(err) return res.send(err);
// 		res.json({message:"supprimé"});
// 		});
// 	});


module.exports=users;
