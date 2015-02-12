var http = require('http'),
    fs = require('fs');
var express = require('express');
var path = require('path');
var handlebars = require('express3-handlebars')
var recipe = require('./static/js/recipe')

app.get('/recipe',recipe.view)

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});