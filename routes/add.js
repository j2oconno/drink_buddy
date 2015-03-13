var favorite = require("../favorite.json");
var drinks = require("../drinks1.json");
var models = require('../models');

exports.addFavorite = function(req, res) {   

	// Your code goes here
	var name = req.params.name;

	favorite["favorites"].push(name);
	console.log("here is the name given"+name);

	res.redirect("/favorite");
 }

exports.showFavorite = function(req, res){
	var recipe_name_array = favorite["favorites"];
	var full_recipe_array = drinks;

	console.log(recipe_name_array);
	var my_favorite_recipe_array = {"drinks" : []};

	for (var i = recipe_name_array.length - 1; i >= 0; i--) {

		for (var j = full_recipe_array.length - 1; j >= 0; j--) {
			if (full_recipe_array[j].name == recipe_name_array[i]) {
				my_favorite_recipe_array["drinks"].push(full_recipe_array[j]);
			};
		};
	};
	// console.log("got here");

	// for (var i = 0; i < recipe_name_array.length; i++){
	// models.Drink
	// 	.find({name: recipe_name_array[i]})
	// 	.sort()
	// 	.exec(showFavorites);
	// 	function showFavorites(err,drinks){
	// 		console.log(drinks);
	// 		my_favorite_recipe_array["drinks"].push(drinks);
	// 		if (i=== recipe_name_array.length - 1)
	// 			res.render("add",my_favorite_recipe_array);
	// 	}
	// }
	console.log(my_favorite_recipe_array);	
	// console.log("now after the query")
	res.render("add",my_favorite_recipe_array);
	// res.render("add", my_favorite_recipe_array);
}