var express = require("express");
var router = express.Router();
var Burger = require("../models/burger.js")






router.get("/", (req, res) => {
    Burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



router.post("/", function (req, res) {
    Burgers.create([
        "burger_name", "Devoured"
    ], [
            req.body.name, req.body.Devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});
// var orm = {
//     all: function (tableInput, cb) {
//         connection.query("SELECT * FROM burgers", function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },

// };

module.exports = router;

// , foundburger