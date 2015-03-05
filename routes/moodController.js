var models = require('../models');

exports.view = function(req, res){
	models.Drink
			.find()
			.sort('mood')
			.exec(renderTimes);
			function renderTimes(err,drinks){
				if(err) console.log(err);
				var drMoods = {field:"mood", thing:[]};
				var dupl = 0;
				var iiii=1;//index of passing object
				//Begin looping through all drinks and create list of moods
				for(i=0; i<drinks.length; i++){//loops through all drinks
					dupl=0;
					if(i===0){//skip first mood and set our first field
					//Begin looping over other drinks' moods 
					//set first mood field
					drMoods.thing[0] = {"name": drinks[0]["mood"], "image" : drinks[0]["image"]}
				
					} else{
					//Begin looping over past moods to make a non-repeating list
					for(ii=0; ii<drMoods.thing.length; ii++){
						if(drMoods.thing[ii]["name"]===drinks[i]["mood"])
								dupl = 1;
						}
						if(dupl===0)
							drMoods.thing[iiii++]={"name": drinks[i]["mood"], "image" : drinks[0]["image"]};
					}
				}
				console.log(drMoods);
				var x = Math.random();
			  if(x>0.5){
			  	res.render("boxes",drMoods);
			  }else{
				res.render('boxes_alternate',drMoods);
			}
		}
}

exports.select = function(req,res){
	//Find all drinks with this mood
		var thisMood = req.params.mood;
		models.Drink
			.find({"mood": thisMood})
			.sort()
			.exec(renderDrinksbyMood);
			function renderDrinksbyMood(err,drinks){
				if(err) console.log(err);
				res.render("select",{"mainLink": "mood", "tag" : thisMood, "drinks": drinks})
			}
}

exports.drink = function(req,res){
	var thisdrink = req.params.recipe;
	//---------------------Start new logic using mongooseDB
	//Want to pass the drink object
	models.Drink
		.find({"name":thisdrink})
		.sort()
		.exec(renderThisDrink);
		function renderThisDrink(err,drink){
			if(err) console.log(err);
			console.log(drink);
			res.render("drink",drink[0])
		}

}