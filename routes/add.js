var drinks = require("../drinks.json");

exports.addFavorite = function(req, res) {   

	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;

	var faveDrink = {
		"name": name,
		"image": image, 
	}

	drinks["drinks"].push(faveDrink)


	res.render("add")
 }