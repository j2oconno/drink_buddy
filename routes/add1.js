var drinks = require("../drinks.json");
var models = require('../models');

exports.showField = function(req,res){
	res.render("addadrink");
}

exports.addDrink = function(req,res){
	var form_data = req.body;
	// console.log(form_data);
	console.log(form_data.occasions);
	var ocCasions = {};
	var mainSpt = {};
	var iii=1;
	var dupl = 0;

	ocCasions = form_data.occasions.match(/\S+/gi);
	//Loop through occasions and spirits to make an array with their strings
	// for(i=0; i<form_data.occasions.length; i++){
	// 	//Set first occasion and then begin looking for duplicates
	// 	dupl = 0;
	// 	if(i===0){ocCasions[0]=form_data.occasions[0];}
	// 	else{
	// 		for(ii=0; ii<ocCasions.length; i++){
	// 			//Loop through all collected occasions 
	// 			//and set dupl if a duplicate is found
	// 			if(form_data.occasions[i]===ocCasions[ii])
	// 				dupl = 1;
	// 		}
	// 		if(dupl===0){
	// 			ocCasions[iii++]=form_data.occasions[i];
	// 		}
	// 	}
	// }

	console.log(ocCasions);
	var newDrink = new models.Drink({
		  "name": form_data.name,
		  "mood": form_data.mood,
		  "occasions": ocCasions,
		  "main spirit": form_data.mainspirit,
		  "time of day": form_data.timeofday,
		  "image": form_data.image_url,
		  "directions": form_data.directions,
		  "ingredients": form_data.ingredients
	});

	newDrink.save(afterSaving);
	function afterSaving(err){
		if(err)console.log(err);
		// console.log(newDrink);
		res.redirect('addadrink');
	}
}