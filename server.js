
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

var add = require ('./routes/add')

var recipesController = require("./routes/recipesController");
var drinkController = require("./routes/drinkController");
var occasionController = require("./routes/occasionController");
var index = require("./routes/index")
// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'drinkbuddy';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// app.get("/mood/:mood", recipesController.recipes);
app.get("/add/:name", add.addFavorite);
app.get("/favorite", add.showFavorite);
// app.get("/", drinkController.index);
app.get("/",index.view);
app.get("/mood", drinkController.mood);
app.get("/mood/:mood", drinkController.view);
app.get("/mood/:mood/:recipe", drinkController.drink);
app.get("/occasion", occasionController.view);
app.get("/occasion/:occa", occasionController.select);
app.get("/occasion/:occa/:recipe", occasionController.drink);

// Haven't made these yet
app.get("/mainspirit", mainspiritController.view);
app.get("/mainspirit/:spirit", mainspiritController.select);
app.get("/mainspirit/:spirit/:recipe", mainspiritController.drink);
app.get("/timeofyear", timeController.view);
app.get("/timeofyear/:time", timeController.select);
app.get("/timeofyear/:time/:recipe", timeController.drink);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});