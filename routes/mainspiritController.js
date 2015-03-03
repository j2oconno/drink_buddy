// var drinks = require("../drinks.json");
var models = require('../models');

//exports.view Works!
exports.view = function(req, res){
	models.Drink
			.find()
			.sort()
			.exec(renderSpirits);
			function renderSpirits(err,drinks){
				if(err) console.log(err);
				// console.log(drinks);
				var mnSpirts = {field:"main spirit", thing:[]};
				var dupl = 0;
				var iiii=1;//index of passing object
				//Begin looping through all drinks and create list of main spirits
				//set first main spirit field
				mnSpirts.thing[0] = {"name": drinks[0]["main spirit"][0]}
				for(i=0; i<drinks.length; i++){//loops through all drinks
					var len = drinks[i]["main spirit"].length //length of this drinks "main spirit" field
					if(i===0){//skip first main spirit of first drink
					//Begin looping over the first drinks main spirits 
					//skipping the first one and make a non-repeating list
					for(ii=1; ii<len; ii++){//loop through the main spirits of the 
						//first drink starting from the second one
						dupl=0;
						for(iii=0; iii<mnSpirts.thing.length; iii++){//loop throught the collected list
							if(mnSpirts.thing[iii]["name"]===drinks[i]["main spirit"][ii]){
								dupl = 1;
						}}
						if(dupl===0)
							mnSpirts.thing[iiii++]={"name": drinks[i]["main spirit"][ii]};
					}	
					} else{
					//Begin looping over this drinks main spirits and make a non-repeating list
					for(ii=0; ii<len; ii++){//loop through all main spirits of this drink
						dupl=0;
						for(iii=0; iii<mnSpirts.thing.length; iii++){//Loop through the collected list
							if(mnSpirts.thing[iii]["name"]===drinks[i]["main spirit"][ii])
								dupl = 1;
						}
						if(dupl===0)
							mnSpirts.thing[iiii++]={"name": drinks[i]["main spirit"][ii]};
					}
				}
			}
			var x = Math.random();
			  if(x>0.5){
			  	res.render("boxes",mnSpirts);
			  }else{
				res.render('boxes_alternate',mnSpirts);
			}
		}
}

exports.select = function(req,res){
	//Find all drinks with this main spirit
		var thisspirit = req.params.spirit;
		console.log(thisspirit);
		models.Drink
			.find({"main spirit": thisspirit})
			.sort()
			.exec(renderDrinksbySpirit);
			function renderDrinksbySpirit(err,drinks){
				console.log(drinks);
				res.render("select",{"mainLink":"main spirit", "tag" : thisspirit, "drinks": drinks})
			}
}

exports.drink = function(req,res){
	var thisdrink = req.params.recipe;
	//---------------------Start new logic using mongooseDB
	//Want to pass the drink object
	var mainDrink = {};
	models.Drink
		.find({"name":thisdrink})
		.sort()
		.exec(renderThisDrink);
		function renderThisDrink(err,drink){
			console.log(drink);
			res.render("drink",drink[0])
		}
}