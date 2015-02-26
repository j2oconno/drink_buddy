var drinks = require("../drinks.json");
var models = require('../models');

exports.view = function(req,res){
	var thisdata = req.form;
	// var thistag = thisdata.input

	models.Drink
		.find()
		.sort('-name')
		.exec(renderAllDrinks);
		function renderAllDrinks(err,drinks){
			console.log(thisdata);
			res.render("select",{"tag": "search", "drinks": drinks});
		}
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