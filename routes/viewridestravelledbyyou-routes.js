var db = require("../models");

module.exports = function (app) {
   
    app.get("/api/travelledrides", function (req, res) {
        console.log("userid="+req.user.id)
        db.Bookedride.findAll({
           where:{
            //    pickup : req.params.leavingfrom,
            //    dropoff: req.params.leavingto
               UserId: req.user.id
           }
        }).then(function (dbBookedride) {
            res.json(dbBookedride);
            
        });
    }); 
    
    app.post("/api/deletetravelled", function (req, res) {

        console.log("Transaction:" + req.body);
        req.body.UserId = req.user.id;
        
        db.Bookedride.destroy( { where: { UserId: req.body.UserId } });
        
    });
   


    app.get("/getridestravelled/:userid", function (req, res) {

        console.log("fetching rides travelled for user :"+req.params.userid)

        db.Bookedride.findAll({
            where: {
                UserId: req.params.userid
            }
        }).then(function (dbBookedride) {
            res.json(dbBookedride);
        });
    });


    app.post("/deletetravelledride", function (req, res) {
        console.log("ABOUT TO DELETE:" + JSON.stringify(req.body));
        db.Bookedride.destroy({where : req.body})
    });

};
