//DEPENDENCIES

//------------------------------------------------------------------------------------


var express = require("express");
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser');
var connection = require('./connection.js')


//ROUTES

//root get route
app.get('/', function(req,res) {

    connection.query('SELECT name,phone from QuickPhones', function(err, data) {

    	console.log(data);

    	res.json(data[0].phone);

    	// THROW IN TWILIO CODE HERE

    	// Twilio Credentials
				var accountSid = 'ACa2ca81b6e6396a5003e31138a7fc0b81';
				var authToken = 'e7fb868852bdd1f5d2f2221848e00e21';

				//require the Twilio module and create a REST client
				var client = require('twilio')(accountSid, authToken);


				//if (1+1 ==2 ) {
				//var pnumber = $("#number").val().trim()


				client.messages.create({
				    to: "+16318290170", // + pnumber
				    from: "+15126051183",
				    body: "This is a test!",
				    
				}, function(err, message) {
				   if (err) throw err;
				    console.log(err);
				     //console.log(message.sid);
				});

				//} else {
				//  console.log("shit");
				//}





    });
});

//-------------------------------------------------------------------------------------



app.get("/", function(req,res) {


});

var port = 3000;
app.listen(port);
