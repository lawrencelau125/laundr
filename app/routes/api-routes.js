// Dependencies
// =============================================================
var Client 	= require("../model/client.js"); // Pulls out the Client Model
var Washer  = require("../model/washer.js"); // Pulls out the Washer Model
var CientOrder  = require("../model/clientOrder.js");
// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Client (or all clients) then provides JSON
	app.get('/api/:clients?', function(req, res){

		// If the user provides a specific client in the URL...
		if(req.params.clients){

			// Then display the JSON for ONLY that client.
			// (Note how we're using the ORM here to run our searches)
			Client.findAll({
				where: {
					routeName: req.params.clients
				}
			}).then(function(result){
				res.json(result);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the clients. 
			// (Note how we're using Sequelize here to run our searches)
				Client.findAll({})
					.then(function(result){
						res.json(result);
				})
			};

	});

	// If a user sends data to add a new client...
	app.post('/api/new', function(req, res){

		// Take the request...
		var client = req.body;

		// Create a routeName 
		var routeName = client.name.replace(/\s+/g, '').toLowerCase();

		// Then add the client to the database using sequelize
		Client.create({
			name: client.name,
			email: client.email,
			address: client.address,
			phoneNumber: client.phoneNumber,
			url: client.url
		});
		
	})
}