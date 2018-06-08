// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var path = require('path');
var cors = require('cors');
//var flash    = require('connect-flash');
require('./config/passport')(passport); // pass passport for configuration


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

app.use(cors());
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));


// required for passport
app.use(session({
  secret: 'appysecretpassphrase',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// Routes
// =============================================================
//  require("./routes/html-routes.js")(app);
//  require("./routes/parent-api-routes.js")(app);
//  require("./routes/parent-routes.js")(app);
//  require("./routes/kid-api-routes.js")(app);

require("./routes/html-routes.js")(app, passport);
require("./routes/signup-routes.js")(app, passport);
require("./routes/offeraride-routes.js")(app, passport);
require("./routes/bookaride-routes.js")(app, passport);
require("./routes/viewridesofferedbyyou-routes.js")(app, passport);
require("./routes/viewridestravelledbyyou-routes.js")(app, passport);

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
