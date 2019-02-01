// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();


// Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride("_method"));
// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Static Directory
app.use(express.static('./public'));
 
require("./controllers/burger_controller.js")(app);

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log(`Express app listening on ${app.get('port')}`);
});