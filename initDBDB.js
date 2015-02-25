//This was copied from the initDB in lab7

var mongoose = require('mongoose');
var models   = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'drinkbuddy';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

// Do the initialization here

// Step 1: load the JSON data
var drinks_json = require('./drinks1.json');

// Step 2: Remove all existing documents
models.Drink
  .find()
  .remove()
  .exec(onceCleardrinks); // callback to continue at

// Step 3: load the data from the JSON file
function onceCleardrinks(err) {
  if(err) console.log(err);

  // loop over the boxes, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = drinks_json.length;
  for(var i=0; i<drinks_json.length; i++) {
    var drjson = drinks_json[i];
    var drink1 = new models.Drink(drjson);

    drink1.save(function(err, drink1) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close()
      }
    });
  }
}