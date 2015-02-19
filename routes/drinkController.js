var data = require("../midmint.json")

exports.view = function(req, res){
	var thismood = req.params.mood;
	var moods = data["moods"];
	for (i=0;i<moods.length; i++){
		if (moods[i]["mood_name"] === thismood){
		console.log("Got HERE! OMG!!")
		var ind = i;
	};
	}
	console.log(moods[ind]);
	console.log(moods[ind]["recipes"]);
	res.render('recipe',moods[ind]);
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
	res.render('drink',moods[ind1]["recipes"][ind2]);
}