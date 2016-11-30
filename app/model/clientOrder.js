// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Client" model that matches up with DB
var ClientOrder = sequelize.define("clientOrder", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING,	
	},
	availibility: {
		type: Sequelize.STRING,
	},
	lbs: {
		type: Sequelize.DECIMAL(10, 2),
	},
	status: {
		type: Sequelize.BOOLEAN,
	},
	status: false
	// disable the modification of tablenames; By default, sequelize will automatically
  	// transform all passed model names (first parameter of define) into plural.
  	// if you don't want that, set the following
  	freezeTableName: true,
  
  	// define the table's name
  	tableName: 'client_order_history'
});

// Syncs with DB
ClientOrder.sync();

// Makes the Client Model available for other files (will also create a table)
module.exports = ClientOrder;
