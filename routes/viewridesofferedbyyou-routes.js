var db = require("../models");

module.exports = function (app) {

    app.get("/api/getrides", function (req, res) {
        console.log("userid=" + req.user.id)
        db.Offeredride.findAll({
            where: {
                //    pickup : req.params.leavingfrom,
                //    dropoff: req.params.leavingto
                UserId: req.user.id
            }
        }).then(function (dbOfferedride) {
            res.json(dbOfferedride);

        });
    });

    app.get("/getridesoffered/:userid", function (req, res) {

        console.log("fetching rides offered for user :" + req.params.userid)

        db.Offeredride.findAll({
            where: {
                UserId: req.params.userid
            }
        }).then(function (dbOfferedride) {
            res.json(dbOfferedride);
        });
    });


    app.post("/api/deleteoffered", function (req, res) {

        console.log("Transaction:" + req.body);
        req.body.UserId = req.user.id;

        db.Offeredride.destroy({ where: { UserId: req.body.UserId } 
        })


    });

    app.post("/deleteofferedride", function (req, res) {
        console.log("ABOUT TO DELETE:" + JSON.stringify(req.body));
        db.Offeredride.destroy({ where: req.body }).then(function (cancelledRide) {
            console.log("After delete:"+cancelledRide);
            res.json(cancelledRide);
        });
    });

};






