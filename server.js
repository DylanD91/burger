// Dependencies
const express = require("express");
const bodyParser = require("body-parser");


const app = express();


// Sets up the express app to handle data parsing
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const router = require('./controllers/burgers_controller.js');
app.use('/', router);


const PORT = process.env.PORT || 3000;

app.listen(app.get('port'), () => {
    console.log(`Express app listening on ${app.get('port')}`);
});