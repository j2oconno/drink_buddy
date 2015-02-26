var models = require('../models');


exports.view = function(req, res){

	models.Drink
		.find()
		.sort()
		.exec(printDrinks);
		function printDrinks(err,drinks){
			// console.log(drinks);
		}
	models.Boxes
		.find()
		.sort()
		.exec(renderBoxes);

	function renderBoxes(err, boxes) {
		// console.log(boxes);
		res.render('index', {'by_what': boxes});
	}

};