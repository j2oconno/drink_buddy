// var drinks = require("../drinks.json");
var models = require('../models');

//exports.view Works!
exports.view = function(req, res){
	models.Drink
			.find()
			.sort()
			.exec(renderOccasions);
			function renderOccasions(err,drinks){
				if(err) console.log(err);
				console.log(drinks);
				var occAsions = {field:"occasion", thing:[]};
				var dupl = 0;
				var iiii=1;//index of passing object
				//Begin looping through all drinks and create list of occasionss
				//set first occasions field
				occAsions.thing[0] = {"name": drinks[0]["occasions"][0]}
				for(i=0; i<drinks.length; i++){//loops through all drinks
					var len = drinks[i]["occasions"].length //length of this drinks "occasions" field
					if(i===0){//skip first occasions of first drink
					//Begin looping over the first drinks occasionss 
					//skipping the first one and make a non-repeating list
					for(ii=1; ii<len; ii++){//loop through the occasionss of the 
						//first drink starting from the second one
						dupl=0;
						for(iii=0; iii<occAsions.thing.length; iii++){//loop throught the collected list
							if(occAsions.thing[iii]["name"]===drinks[i]["occasions"][ii]){
								dupl = 1;
						}}
						if(dupl===0)
							occAsions.thing[iiii++]={"name": drinks[i]["occasions"][ii]};
					}	
					} else{
					//Begin looping over this drinks occasionss and make a non-repeating list
					for(ii=0; ii<len; ii++){//loop through all occasionss of this drink
						dupl=0;
						for(iii=0; iii<occAsions.thing.length; iii++){//Loop through the collected list
							if(occAsions.thing[iii]["name"]===drinks[i]["occasions"][ii])
								dupl = 1;
						}
						if(dupl===0)
							occAsions.thing[iiii++]={"name": drinks[i]["occasions"][ii]};
					}
				}
			}
			  	res.render("boxes",occAsions);
		}
}


exports.select = function(req,res){
	//Find all drinks with this occasions
		var thisocca = req.params.occa;
		// console.log(thisocca);
		models.Drink
			.find({"occasions": thisocca})
			.sort()
			.exec(renderDrinksbyOccasion);
			function renderDrinksbyOccasion(err,drinks){
				res.render("select",{"mainLink":"occasion", "tag" : thisocca, "drinks": drinks})
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
			if(err)console.log(err);
			res.render("drink",drink[0])
		}

}