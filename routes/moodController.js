var mood = require("../mood.json")

exports.mood = function(req, res){
	// console.log(mood);
	res.render('mood',mood);
	// console.log(mood);
}