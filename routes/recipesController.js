var recipes = require("../recipes.json")

exports.recipes = function(req, res){
	console.log(recipes);
	var mood = req.params.mood;
	res.render('recipe',recipes[mood]);
}

