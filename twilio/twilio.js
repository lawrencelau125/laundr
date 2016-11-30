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
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    
}, function(err, message) {
   if (err) throw err;
    console.log(err);
     //console.log(message.sid);
});

//} else {
//  console.log("fuck");
//}