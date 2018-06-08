var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function (app) {

    app.get("/api/bookaride/:leavingfrom/:leavingto/:date", function (req, res) {
        console.log("leavingto=" + req.params.leavingto)
        console.log("leavingfrom=" + req.params.leavingfrom)
        console.log("date=" + req.params.date)
        db.Offeredride.findAll({
            where: {
                pickup: req.params.leavingfrom,
                dropoff: req.params.leavingto,
                seats: { [Op.gt]: 0 }
            }
        }).then(function (dbOfferedride) {
            res.json(dbOfferedride);

        });
    });

    app.post("/api/reserveaseat", function (req, res) {

        console.log("While updating table during seat reserve:" + req.body)
        db.Offeredride.update({ seats: req.body.seats },
            { where: { UserId: req.body.UserId } }
        );
    });

    app.post("/api/userconfirm", function (req, res) {

        console.log("Transaction:" + req.body);
        req.body.UserId = req.user.id;
        console.log("Transaction:" + req.body);
        
        db.Bookedride.create(req.body).then(function (dbBookedride) {
            res.json(dbBookedride);
        });
    });
}