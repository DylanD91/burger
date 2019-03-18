// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Port
const PORT = process.env.PORT || 3000;

// Express
const app = express();


// Sets up the express app to handle data parsing
app.use(express.static("public"));

// Parse request 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Import routes 
const routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`Express app listening on ${app.get('port')}`);
});