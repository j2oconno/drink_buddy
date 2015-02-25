var models = require('../models');

exports.view = function(req, res){
	models.Drink
			.find()
			.sort()
			.exec(renderTimes);
			function renderTimes(err,drinks){
				if(err) console.log(err);
				// console.log(drinks);
				var dTimes = {field:"time of day", thing:[]};
				var dupl = 0;
				var iiii=1;//index of passing object
				//Begin looping through all drinks and create list of time of days
				for(i=0; i<drinks.length; i++){//loops through all drinks
					dupl=0;
					if(i===0){//skip first time of day and set our first field
					//Begin looping over other drinks' time of days 
					//set first time of day field
					dTimes.thing[0] = {"name": drinks[0]["time of day"]}
				
					} else{
					//Begin looping over past time of days to make a non-repeating list
					for(ii=0; ii<dTimes.thing.length; ii++){
						if(dTimes.thing[ii]["name"]===drinks[i]["time of day"])
								dupl = 1;
						}
						if(dupl===0)
							dTimes.thing[iiii++]={"name": drinks[i]["time of day"]};
					}
				}
				res.render('boxes',dTimes);
			}
}

exports.select = function(req,res){
	//Find all drinks with this time of day
		var thisTime = req.params.time;
		models.Drink
			.find({"time of day": thisTime})
			.sort()
			.exec(renderDrinksbyTime);
			function renderDrinksbyTime(err,drinks){
				if(err) console.log(err);
				res.render("select",{"mainLink": "time of day", "tag" : thisTime, "drinks": drinks})
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
			console.log(drink.ingredients);
			var D = drink[0];
			console.log(D.ingredients[0]);
			res.render("drink",drink[0])
		}

}