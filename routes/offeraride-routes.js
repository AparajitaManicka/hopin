var db = require("../models");

module.exports = function (app) {

    app.post("/offeraride", function (req, res) {
        db.Offeredride.create(req.body).then(function (dbOfferedride) {
            res.json(dbOfferedride);
        });

    });

  
};
