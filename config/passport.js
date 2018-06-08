// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
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
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
            function (req, username, password, done) { // callback with email and password from our form
                console.log("username:" + username + ",password:" + password)
                /* 
                connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, null); // req.flash is the way to set flashdata using connect-flash
                    }
    
                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(password, rows[0].password))
                        return done(null, false, null); // create the loginMessage and save it to session as flashdata
    
                    // all is well, return successful user
                    return done(null, rows[0]);
                }); */
                db.User.findOne({
                    where: {
                        username: username
                    }
                }).then(function (dbUser) {
                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(password, dbUser.password)) {
                        return done(null, false, null);
                    } else {
                        console.log("dbUser.username:" + dbUser.username);
                        return done(null, dbUser);
                    }
                });
            })
    );
};
