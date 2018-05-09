var express = require("express");
var router = express.Router();
var Burger = require("../models/burger.js")






router.get("/", (req, res) => {
    Burger.selectAll(function (data) {
    
        res.render("index", {burger_data: data});
    });
});

router.post("/burgers/create", function (req, res) {
    console.log(req.body)
    Burger.insertOne([
        "burger_name", "devoured"
    ],
     [
            req.body.burgerName, req.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.redirect("/");
        });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

module.exports = router;

