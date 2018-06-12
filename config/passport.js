// config/passport.js

// load all the things we need

const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = require("../models");

// load up the user model
//var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
/* var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
 */
//connection.query('USE ' + dbconfig.database);
// expose this function to our app using module.exports
module.exports = function (passport) {

    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secretOrKey;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        db.User.findOne({
            where: {
                id: 1
            }
        }).then(function (dbUser, err) {
            console.log("dbUser:"+dbUser)
            
        });
    }))

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        console.log('serialize user :' + user.username + ",id:" + user.id)
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        console.log('deserialize user')
        /* connection.query("SELECT * FROM users WHERE id = ? ", [id], function (err, rows) {
            done(err, rows[0]);
        }); */

        db.User.findOne({
            where: {
                id: id
            }
        }).then(function (dbUser, err) {
            done(err, dbUser);
        });
    });

};
