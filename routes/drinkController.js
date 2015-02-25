var drinks = require("../drinks.json");
var category = require("../by_category.json");


exports.mood = function(req, res){
	var drinkMood = {mood: []};
	var dupl = 0;
	var iii = 1; //index of passing object
	//Loop creates object of strings of moods
	for(i=0; i < drinks["drinks"].length; i++){//Loop through all drinks
		dupl = 0;
		if (i===0)//set first mood
		drinkMood.mood[0]={"name" : drinks["drinks"][i]["mood"]};
		else {//Loop through past moods to ensure no overlap with current drink's mood
			// console.log("Got into else and length is: " + drinkMood.mood.length);
			for(ii=0; ii < drinkMood.mood.length; ii++){
				if(drinkMood.mood[ii]["name"] === drinks["drinks"][i]["mood"]){
					dupl = 1;
				}
			}
			if(dupl===0){//Set with mood
				drinkMood.mood[iii++] = {"name" : drinks["drinks"][i]["mood"]};
			}
		}
	}
		console.log(drinkMood);

	res.render('mood',drinkMood);
}

exports.view = function(req, res){
	var thismood = req.params.mood;
	console.log(thismood);
	//pass recipe template mood, drink names, and images
	//First pull out all the drinks matching thismood
	var moodDrinks = {tag: thismood, drinks:[]};
	var ii = 0;
	//This loop creates object of all drinks of thismood
	for(i=0;  i < drinks["drinks"].length; i++){
		if (drinks["drinks"][i]["mood"] === thismood){
			moodDrinks.drink[ii++] = drinks["drinks"][i];
		}
	}
	console.log(moodDrinks);
	res.render('select',moodDrinks);
}

exports.drink = function(req, res){
	var thismood = req.params.mood;
	var thisdrink = req.params.recipe;
	console.log(thisdrink);
	//---------------------Start new logic using the drinks.json
	//Want to pass the drink object
	var mainDrink = {};
	//This loop creates object of this drink of thismood
	for(i=0;  i < drinks["drinks"].length; i++){
		if (drinks["drinks"][i]["name"] === thisdrink){
			mainDrink = drinks["drinks"][i];
		}
	}
	res.render('drink',mainDrink);
}

exports.index = function(req, res){
	console.log(category);
	res.render('index', category);
}