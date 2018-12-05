var express = require('express');

var mustache = require('mustache-express');

var app = express();

var port = 3000;

var angryBirdsController = require('./controller/angry_bird_controller');

//To use html features from mustache package  
app.engine('html', mustache());

//Start off the engin of html
app.set('view engine', 'html');

//getting the path which is dynamic for views 'realated to html'
app.set('views', __dirname + '/views');

//homepage greeting
app.get('/', function(request, response){

    response.send('Welcome to the angry birds homepage!');

    response.render('./home');
})

//making sure the server is working!
app.listen(port, function(request,response){

    console.log("App is listening on port " + port);
})

//letting the file to use controller
app.use('/angry_birds', angryBirdsController);

