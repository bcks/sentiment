"use strict";

var twitter         = require('ntwitter'),
    sentiment       = require('sentiment'),
    mysql           = require('mysql'),
    express         = require('express'),
    credentials     = require('./credentials.js'),
    path            = require('path');


var app = express();

app.configure(function() {
    app.set( 'x-powered-by', false);
    app.set( 'views', __dirname + '/views' );
    app.set( 'view engine', 'ejs' );
    app.use( express.static( path.join( __dirname, 'public' ) ) );
});  
  

process.on('uncaughtException', function(err) {
  console.log(err);
});


var minutes_interval = 15;

function searchTweets(q, res) {
  var seconds_interval = minutes_interval * 5;//60;
  
  var dbQuery = 
    "SELECT UNIX_TIMESTAMP(created_at) DIV " + seconds_interval + " * " + seconds_interval + 
	" AS epoch,sentiment_score,count(sentiment_score) " +
	" AS count FROM tweet WHERE tweet_text LIKE " +
	" '%" + q + "%'" + 
	"GROUP BY UNIX_TIMESTAMP(created_at) DIV " + seconds_interval + ", sentiment_score";
    
  //console.log(dbQuery);
  
  var query = client.query( 
  	dbQuery,
    function getTimeData(err, results) {
      if(err) {throw err;}
      var output= 'data = ' + JSON.stringify(results) + ';'
      res.send(output);
    }
  ); 
}

function displayPage(q, res) {
     res.render( "q", {
        query       : q
    });
}

function displayPageW(w, res) {
     res.render( "w", {
        query       : w
    });
}


var client = mysql.createConnection({
  user: credentials.mysql_username,
  password: credentials.mysql_password,
  database: credentials.mysql_database,
  charset: 'utf8mb4'
});

app.get('/', function( req, res) {
    res.render( "index", {});
});

app.get('/q/:q', function( req, res) {
    var q=req.params.q || '';
    if(q.length>0) displayPage(q, res);
});

app.get('/w/:w', function( req, res) {
    var w=req.params.w || '';
    if(w.length>0) displayPageW(w, res);
});

app.get('/d/:q', function( req, res) {
    var q=req.params.q || '';
    if(q.length>0) searchTweets(q, res);
});
 
app.listen(3000);
