var data = require("../midmint.json");
var drinks = require("../drinks.json");

exports.test = function(req, res){
	// var drinkmood = {mood: [{name: "testmood"}]};
	var drinkMood = {mood: []};
	var dupl = 0;
	var iii = 1;
	// console.log("Before Loop!")
	//Loop creates object of strings of moods
	for(i=0; i < drinks["drinks"].length; i++){//Loop through all drinks
		dupl = 0;
		if (i===0)//set first mood
		drinkMood.mood[0]={"name" : drinks["drinks"][i]["mood"]};
		else {//Loop through past moods to ensure no overlap with current drink's mood
			// console.log("Got into else and length is: " + drinkMood.mood.length);
			for(iii=0; iii < drinkMood.mood.length; iii++){
				if(drinkMood.mood[iii]["name"] === drinks["drinks"][i]["mood"]){
					dupl = 1;
				}
			}
			if(dupl===0){//Set with mood
				drinkMood.mood[iii++] = {"name" : drinks["drinks"][i]["mood"]};
			}
		}
		// console.log("dupl is: " + dupl);
	}
	// console.log("Got HERE!")
	// console.log(iii);
	// console.log(drinkMood);
	// console.log(drinkMood.mood.length);
	res.render('mood1',drinkMood)

}

exports.view = function(req, res){
	var thismood = req.params.mood;
	// var moods = data["moods"];
	// for (i=0;i<moods.length; i++){
	// 	if (moods[i]["mood_name"] === thismood){
	// 	var ind = i;
	// };
	// }
	// res.render('recipe',moods[ind]);
	//---------------------Start new logic using the drinks.json
	//pass recipe template mood, drink names and images
	//First pull out all the drinks matching thismood
	var moodDrinks = {mood: thismood,drink:[]};
	var ii = 0;
	//This loop creates object of all drinks of thismood
	for(i=0;  i < drinks["drinks"].length; i++){
		if (drinks["drinks"][i]["mood"] === thismood){
			moodDrinks.drink[ii] = drinks["drinks"][i];
			ii++;
		}
	}
	console.log(moodDrinks);
	res.render('recipe1',moodDrinks);
}

exports.drink = function(req, res){
	var moods = data["moods"];
	var thismood = req.params.mood;
	var thisdrink = req.params.recipe;
	//This loop finds the object with 'mood_name' = 'thismood'
	//i.e. finds the object of our mood
	for (i=0;i<moods.length; i++){
		if (moods[i]["mood_name"] === thismood){
		var ind1 = i;
	};
	}
	//This loop finds the object with the "name" = 'thisdrink'
	//i.e. finds the object of our drink
	for (ii=0;ii<moods[ind1]["recipes"].length; ii++){
		if (moods[ind1]["recipes"][ii]["name"] === thisdrink){
		console.log("Got HERE AGAIN! OMG!!")
		var ind2 = ii;
	};
	}
	console.log(moods[ind1]["recipes"][0]["name"]);
	// res.render('drink',moods[ind1]["recipes"][ind2]);

	//---------------------Start new logic using the drinks.json
	//Want to pass the drink object
	var mainDrink = {};
	//This loop creates object of this drink of thismood
	for(i=0;  i < drinks["drinks"].length; i++){
		if (drinks["drinks"][i]["name"] === thisdrink){
			mainDrink = drinks["drinks"][i];
		}
	}
	res.render('drink1',mainDrink);
}