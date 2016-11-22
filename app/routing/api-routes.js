var tableData = require('../data/table-data.js');



module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/tables', function (req, res) {
		res.json(tableData);
	});

	app.post('/api/tables', function (req, res) {
		
			 tableData.push(req.body);
			 res.json(tableData);

	 });

};