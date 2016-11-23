// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Client" model that matches up with DB
var Client = sequelize.define("client", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING,	
	},
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
	},
	phoneNumber: {
		type: Sequelize.INTEGER,
	},
	url: {
		type: Sequelize.STRING,
	},

});

// Syncs with DB
Client.sync();

// Makes the Client Model available for other files (will also create a table)
module.exports = Client;
