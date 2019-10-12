// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var db = require("../models");

// ================================================================================
//  ROUTES
// ================================================================================

module.exports = function(app) {

    // GET, POST, PUT and DELETE routes for the HOUSEHOLD table/model
    //get all assignees
    app.get("/api/assignee", function(req, res) {
      // Add sequelize code to find all tasks, and return them to the user with res.json
      db.Assignee.findAll().then(function(dbAssignee){
        res.json(dbAssignee)
      })
    
    });
  
    app.get("/api/assignee/:tasks", function(req, res) {
      // Add sequelize code to find all tasks where the assignee is equal to req.params.assignee,
      // return the result to the user with res.json
      db.Assignee.findAll({
        where: {
          assignee: req.params.assignee
        }
      }).then(function(dbAssignee){
        res.json(dbAssignee)
      })
    });
  
  
    app.post("/api/assignee", function(req, res) {
      // Add sequelize code for creating a task using req.body,
      // then return the result using res.json
      db.Assignee.create(
        req.body,
      ).then(function(dbAssignee){
        res.json(dbAssignee)
      })
    });
  
    // DELETE route for deleting assignee
    app.delete("/api/assignee/:id", function(req, res) {
      // Add sequelize code to delete a task where the id is equal to req.params.id, 
      // then return the result to the user using res.json
      db.Assignee.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(deletedData){
        res.json(deletedData)
      })
    });
  
    // PUT route for updating assignee
    app.put("/api/assignee", function(req, res) {
      db.Assignee.update(
        req.body,
        {
        where: {
        id: req.body.id
        }
      }).then(function(dbAssignee){
        res.json(dbAssignee)
      })
      // Add code here to update a task using the values in req.body, where the id is equal to
      // req.body.id and return the result to the user using res.json
    });
    
  };
  