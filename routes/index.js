var models = require('../models');


exports.view = function(req, res){

	models.Boxes
		.find()
		.sort()
		.exec(renderBoxes);

	function renderBoxes(err, boxes) {
		console.log(boxes);
		res.render('index', {'by_what': boxes});
	}

};