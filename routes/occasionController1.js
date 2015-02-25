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
	var thisocca = req.params.occa;
	//pass recipe template mood, drink names, and images
	//First pull out all the drinks matching thisocca
	var occaDrinks = {tag: thisocca, drinks:[]};
	var i = 0;
	//This loop creates object of all drinks of occasion thisocca
	console.log(drinks["drinks"].length);
	for(ii=0;  ii < drinks["drinks"].length; ii++){//Loop over all drinks
		var len = drinks["drinks"][ii]["occasions"].length//length of this drinks "occasions"
		console.log(ii);
		console.log(drinks["drinks"][ii]["occasions"]);
		for(iii=0; iii<len; iii++){//Loop over this drinks occasions
			console.log(drinks["drinks"][ii]["occasions"][iii]);
			if (drinks["drinks"][ii]["occasions"][iii] === thisocca){
				console.log("Got into If statement");
				occaDrinks.drink[i] = drinks["drinks"][ii];
				i++;
			}
		}
	}
	console.log(occaDrinks);
	res.render('select',occaDrinks);
}

exports.drink = function(req,res){
	var thisdrink = req.params.recipe;
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