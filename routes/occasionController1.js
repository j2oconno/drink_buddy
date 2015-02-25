var drinks = require("../drinks.json");

exports.view = function(req, res){
	
	var occAsion = {occ: []};
	var dupl1 = 0;
	var iiii = 1; //index of passing object
	//This loop creates object of all occasions
	for(i=0; i < drinks["drinks"].length; i++){//Loop through all drinks
		//Length of the occasion array of this drink
		var len = drinks["drinks"][i]["occasions"].length;
		if (i===0)//set first occasion
		occAsion.occ[0]={"name" : drinks["drinks"][i]["occasions"][0]};
		else {//Loop through all occasions of this drink to ensure no overlap with past occasions
			for(ii=0; ii < len; ii++){//loop through all occasions of this drink
				dupl=0;
				for (j = 0; j < occAsion.occ.length; j++){
					if(occAsion.occ[j]["name"] === drinks["drinks"][i]["occasions"][ii]){
					dupl = 1;
					}
				}
				if(dupl===0){//Set with occasion
				occAsion.occ[iiii++] = {"name" : drinks["drinks"][i]["occasions"][ii]};
			}
			}
		}
	}
	console.log(occAsion);
	res.render('occasion',occAsion);
}

exports.select = function(req,res){
//Find all drinks with this occasion
		var thisocc = req.params.occa;
		console.log(thisocc);
		models.Drink
			.find({"occasions": thisocc})
			.sort()
			.exec(renderDrinksbyOccasion);
			function renderDrinksbyOccasion(err,drinks){
				console.log(drinks);
				res.render("select",{"mainLink":"occasions", "tag" : thisocc, "drinks": drinks})
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
			console.log(drink);
			res.render("drink",drink[0])
		}
}