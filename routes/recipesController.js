var recipes = require("../recipes.json")

exports.recipes = function(req, res){
	console.log(recipes);
	res.send("fwefwefew");
}