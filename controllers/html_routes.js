// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var path = require("path");
var db = require("../models");

// ================================================================================
//  ROUTES
// ================================================================================

module.exports = function(app) {

    // Each of these routes handles the HTML page that the user gets sent to.
    
    app.get("/", function(req, res) {
      res.render("frontpage")
      console.log("This is the front page")
    })
    
    app.get("/workbench", function(req, res) {
      db.Assignee.findAll({include:[db.Task]}).then(function(dbAssignee){
        // res.render("list",{user:dbAssignee})

        var myObj = {taskiCardData: dbAssignee}
        console.log(myObj)
        
        res.render("index",  myObj)
      })
      // res.sendFile((path.join(__dirname + "../../public/index.html")))
      // res.render("index", )
    });
  
    //add moer routes once html files are named
    
  
}