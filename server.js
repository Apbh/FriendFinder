//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express configuration
var app = express();
var PORT = process.env.PORT || 8080;

//to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function () {
  console.log("App listening on PORT:http://localhost:" + PORT);
});

