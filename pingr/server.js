/**
 * Created by Ali on 2016-07-05.
 */
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var session      = require('express-session');
var http = require('http');
var schedule = require('node-schedule');
const queryString = require('query-string');



var port = process.env.PORT || 3000;


var db = require("./db/db.js");
var strategy = require('./passport_session/local_strategy.js');


//Running db
//db.runQuery('SELECT * from Persons');




// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


//backend code;

app.use('/api/on',function(req,res){
    // An object of options to indicate where to post to
    var post_options = {
        host: '192.168.1.51',
        port: '80',
        path: '1',
        method: 'POST'

    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write('{"Turn_On" : "button1"}');
    post_req.end();
});

app.use('/api/off',function(req,res){
    // An object of options to indicate where to post to
    var post_options = {
        host: '192.168.1.51',
        port: '80',
        path: '1',
        method: 'PUT'

    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write('{"Turn_On" : "button1"}');
    post_req.end();
});


function PostCode(codestring) {
    // Build the post string from an object


    // An object of options to indicate where to post to
    var post_options = {
        host: '192.168.1.51',
        path: '1',
        method: 'GET',

    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    //post_req.write('{"Turn On" : "button1"}');
    post_req.end();

}




app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;

