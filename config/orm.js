var connection = require("../config/connection.js");

var orm ={
    all: function (cb) {
       
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


};

module.exports = orm;