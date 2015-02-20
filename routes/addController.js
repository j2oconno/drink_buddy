var drinks = require("../drinks.json")

exports.add = function(req, res){
	// console.log(mood);
	res.render('add',drinks);
	// console.log(mood);
}
