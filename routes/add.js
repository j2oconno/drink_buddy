var favorite = require("../favorite.json");
var drinks = require("../drinks1.json");
exports.addFavorite = function(req, res) {   

	// Your code goes here
	var name = req.params.name;

	favorite["favorites"].push(name)


	res.redirect("/favorite");
 }

exports.showFavorite = function(req, res){
	var recipe_name_array = favorite["favorites"];
	var full_recipe_array = drinks;

	var my_favorite_recipe_array = {"drinks" : []};

	for (var i = recipe_name_array.length - 1; i >= 0; i--) {

		for (var j = full_recipe_array.length - 1; j >= 0; j--) {
			if (full_recipe_array[j].name == recipe_name_array[i]) {
				my_favorite_recipe_array["drinks"].push(full_recipe_array[j]);
			};
		};
	};

	console.log(my_favorite_recipe_array);
	res.render("add", my_favorite_recipe_array);
}