// Get all of our friend data
var recdata = require('../data.json');

exports.view = function(req, res){
	console.log(recdata);
	res.render('recipe',recdata);
};
