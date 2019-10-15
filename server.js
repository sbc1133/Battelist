// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var path = require("path")
// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==============================================================================
// SERVES STATIC CONTENT
// ==============================================================================


app.use(express.static('public'));

// ==============================================================================
// HANDLEBARS CONFIGURATION
// ==============================================================================

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ================================================================================
//  ROUTES
// ================================================================================

require("./controllers/assignee_api_routes.js")(app);
require("./controllers/html_routes.js")(app);
require("./controllers/task_api_routes.js")(app);
require("./controllers/user_api_routes.js")(app);

// =============================================================================
//  SYNC SEQUELIZE MODELS AND START EXPRESS APP
// =============================================================================

db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
