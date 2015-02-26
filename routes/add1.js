var favorite = require("../favorite.json");
var drinks = require("../drinks.json");
var models = require('../models');

exports.addFavorite = function(req, res) {   

	// Your code goes here
	var name = req.params.name;

	favorite["favorites"].push(name)


	res.redirect("/favorite");
 }

exports.showFavorite = function(req, res){
	var recipe_name_array = favorite["favorites"];
	var full_recipe_array = drinks["drinks"];

	var my_favorite_receipe_array = {"drinks" : []};

	for (var i = recipe_name_array.length - 1; i >= 0; i--) {

		for (var j = full_recipe_array.length - 1; j >= 0; j--) {
			if (full_recipe_array[j].name == recipe_name_array[i]) {
				my_favorite_receipe_array["drinks"].push(full_recipe_array[j]);
			};
		};
	};

	res.render("add", my_favorite_receipe_array);
}

exports.showField = function(req,res){
	res.render("addadrink");
}

exports.addDrink = function(req,res){
	var form_data = req.body;
	console.log(form_data);

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