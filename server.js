// Required express and body-parser for the app.
var express = require("express");
var bodyParser = require("body-parser");

//  created a app to call express where needed.
var app = express();

//  calling on the specified port 
var PORT = process.env.PORT || 8080;

// merges body-parser to app (express)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movie_planner_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});



app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
