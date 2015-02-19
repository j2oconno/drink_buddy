var recipes = require("../recipes.json")

exports.recipes = function(req, res){
	var mood = req.params.mood;
	console.log(mood);
	res.render('recipe',recipes[mood]);
}

