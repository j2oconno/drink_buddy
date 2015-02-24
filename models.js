var Mongoose = require('mongoose');


var DrinkSchema = new Mongoose.Schema({
  // fields are defined here
  "name": String,
  "mood": String,
  "occasions": [String],
  "main spirit": [String],
  "time of day": String,
  "image": String,
  "directions": [String],
  "ingredients": [String]
});

exports.Drink = Mongoose.model('Drink', DrinkSchema);

var BoxesSchema = new Mongoose.Schema({
  // fields are defined here
  "link" : String,
  "name": String
});

exports.Boxes = Mongoose.model('Boxes', BoxesSchema);