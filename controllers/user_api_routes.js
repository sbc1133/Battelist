// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var db = require("../models");

// ================================================================================
//  ROUTES
// ================================================================================

module.exports = function(app) {

    // GET, POST, PUT and DELETE routes for the USER table/model

    app.get("/api/user", function(req, res) {
      // Add sequelize code to find all tasks, and return them to the user with res.json
      db.User.findAll().then(function(dbUser){
        res.json(dbUser)
      })
    
    });

    app.post("/api/user", function(req, res) {
      // Add sequelize code for creating a task using req.body,
      // then return the result using res.json
      db.User.create(
        req.body,
      ).then(function(dbUser){
        res.json(dbUser)
      })
    });
  
    // DELETE route for deleting user
    app.delete("/api/user/:id", function(req, res) {
      // Add sequelize code to delete a task where the id is equal to req.params.id, 
      // then return the result to the user using res.json
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(deletedData){
        res.json(deletedData)
      })
    });
  
    // PUT route for updating user
    app.put("/api/user", function(req, res) {
      db.User.update(
        req.body,
        {
        where: {
        id: req.body.id
        }
      }).then(function(dbUser){
        res.json(dbUser)
      })
      // Add code here to update a task using the values in req.body, where the id is equal to
      // req.body.id and return the result to the user using res.json
    });

    
    
  };
  