/**
 * Created by Ali on 2017-01-15.
 */
var mysql      = require('mysql');

var db = {
    signUp: signUp,
    signIn: signIn
};
module.exports = db;

function signUp(queryString){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'user',
        password : 'regularuser87',
        database : 'ali'
    });

    connection.connect();

    connection.query(queryString, function(err,rows){
        console.log(rows);
        console.log("above row object");
        if (err)
            return done(err);
        if (rows.length) {
            return done(null, false, console.log('signupMessage', 'That email is already taken.'));
        } else {

            // if there is no user with that email
            // create the user
            var newUserMysql = new Object();

            newUserMysql.email    = email;
            newUserMysql.password = password; // use the generateHash function in our user model

            var insertQuery = "INSERT INTO users ( email, password ) values ('" + email +"','"+ password +"')";
            console.log(insertQuery);
            connection.query(insertQuery,function(err,rows){
                newUserMysql.id = rows.insertId;

                return done(null, newUserMysql);
            });
        }
    });

    connection.end();
};

function signIn(queryString, password, done){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'user',
        password : 'regularuser87',
        database : 'ali'
    });

    connection.connect();

    connection.query(queryString,function(err,rows){
        if (err)
            return done(err);
        if (!rows.length) {
            return done(null, false, console.log('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
        }

        // if the user is found but the password is wrong
        if (!( rows[0].password == password))
            return done(null, false, console.log('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

        // all is well, return successful user
        return done(null, rows[0]);

    });

    connection.end();
}