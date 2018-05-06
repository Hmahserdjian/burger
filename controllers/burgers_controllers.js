var express = require("express");
var router = express.Router();
var Burgers = require("../models/burger.js")

router.get("/", (req, res) => {
    Burgers.all(function (data) {
        let foundburger ={
            burgers: data
        }
        res.render("index", foundburger);
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