var drinks = require("../drinks.json");
var models = require('../models');

exports.showField = function(req,res){
	res.render("addadrink");
}

exports.addDrink = function(req,res){
	var form_data = req.body;
	console.log(form_data);
	console.log(form_data.occasions);

	var newDrink = new models.Drink({
		  "name": form_data.name,
		  "mood": form_data.mood,
		  "occasions": form_data.occasions,
		  "main spirit": form_data.mainspirit,
		  "time of day": form_data.timeofday,
		  "image": form_data.image_url,
		  "directions": form_data.directions,
		  "ingredients": form_data.ingredients
	});

	newDrink.save(afterSaving);
	function afterSaving(err){
		if(err)console.log(err);
		console.log(newDrink);
		res.redirect('addadrink');
	}
}