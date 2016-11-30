var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Possible Routes for HTML and API
require("./laundr/app/routes/api-routes.js")(app)
require("./laundr/app/routes/html-routes.js")(app)

var PORT = process.env.PORT || 3003;
app.listen(PORT);