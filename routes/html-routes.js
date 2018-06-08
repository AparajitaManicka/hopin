var path = require("path");
var db = require("../models");
module.exports = function (app, passport) {
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/view.html"));
  // });

  app.get("/newparent", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/newparent.html"))
  });

  app.get("/newkid", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/newkid.html"))
  });

  app.get("/returningparent", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/returningparent.html"))
  });

  app.post("/returningparent", function (req, res) {
    db.Parent.findOne({
      where: {
        username: req.body.username
      }
    }).then(function (dbUser) {
      if (dbUser) {
        console.log(dbUser);
        if (dbUser.dataValues.parentpassword === req.body.password) {
          res.redirect("/parent?ParentId=" + dbUser.dataValues.id);
        }
        else {
          res.redirect("/returningparent");

        }
      }
    });

  });

  app.post("/returningkid", function (req, res) {
    db.Kid.findOne({
      where: {
        username: req.body.username
      }
    }).then(function (dbUser) {
      //res.send("passed");
      console.log(dbUser);
      if (dbUser) {
        console.log(dbUser);
        if (dbUser.dataValues.kidpassword === req.body.password) {
          res.redirect("/kidspage?username=" + req.body.username);
        }
        else {
          res.redirect("/returningkid");
        }
      }
    });
  });

  app.get("/returningkid", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/returningkid.html"))
  });

  app.get("/kidspage", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/kidspage.html"))
  });

  app.get("/parentspage", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/parent.html"))
  });

  app.get("/parent", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/parent.html"))
  });

  app.get("/newaccount", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/newaccount.html"));
  });


  app.post("/newaccount", function (req, res) {
    db.Accountapplication.create(req.body).then(function (dbAccountapplication) {
      res.json(dbAccountapplication);
    });
  });






  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/choice", isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/choice.html"));
  });
  app.get("/bookaride", isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bookaride.html"));
  });
  app.get("/offeraride", isLoggedIn, function (req, res) {
    console.log("req:" + req.user.id + ",response:" + res)
    res.sendFile(path.join(__dirname, "../public/offeraride.html"));
  });
  app.get("/viewridesofferedbyyou", isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/viewridesofferedbyyou.html"));
  });
  app.get("/viewridestravelledbyyou", isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/viewridestravelledbyyou.html"));
  });
  app.post('/authlogin',
    (req, res, next) => {
      console.log("ABOut TO AUTHenticate")
      passport.authenticate('local-login'),
        function (req, res) {
          username = req.body.headers.username;
          password = req.body.headers.password;
          console.log("user:"+username)

          console.log("hello");
          if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
          } else {
            req.session.cookie.expires = false;
          }

          res.json({ id: req.user.id, username: req.user.username });
        }

    });

  function isLoggedIn(req, res, next) {
    console.log("CHECKING IF its an AUTHENTICATED USER....")
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }

  app.get('/logout', function (req, res) {
    console.log("LOGGING OUT...." + req.username)
    req.logout();
    res.redirect('/');
  });
};

