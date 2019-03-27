// Dependencies
var express = require("express");

// Port
var PORT = process.env.PORT || 3000;

// Express
var app = express();


// Sets up the express app to handle data parsing
app.use(express.static("public"));

// Parse request 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
	

app.set("view engine", "handlebars");

//Import routes 
var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
console.log("App now listening at http://localhost:" + PORT);
});