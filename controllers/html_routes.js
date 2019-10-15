// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var path = require("path");

// ================================================================================
//  ROUTES
// ================================================================================

module.exports = function(app) {

    // Each of these routes handles the HTML page that the user gets sent to.
    app.get("/", function(req, res) {
      // res.sendFile((path.join(__dirname + "../../public/index.html")))
      res.render("index", )
    });
  
    //add moer routes once html files are named
    
  
}