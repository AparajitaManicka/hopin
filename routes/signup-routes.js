var db = require("../models");
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app) {
    app.get("/getuserid/:username", function (req, res) {
        console.log("USER name:"+req.params.username)
        db.User.findOne({
            where: {
                username: req.params.username
            }
        }).then(function (dbUser) {
            console.log("found user:"+JSON.stringify(dbUser))

            res.json(dbUser);
        });
    });

    app.post("/signupuser", function (req, res) {
        console.log("pwd before hash:" + JSON.stringify(req.body.password))
        req.body.password = bcrypt.hashSync(req.body.password, null, null)
        console.log("pwd after hash:" + JSON.stringify(req.body.password))

        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};
