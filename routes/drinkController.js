var ingredient = require("../midmint_ing.json")
var direction = require("../midmint_dir.json")

exports.drink = function(req, res){
	console.log(ingredient);
	console.log(direction);
	res.render('MidnightMint',ingredient,direction);
}

