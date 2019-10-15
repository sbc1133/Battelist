// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var db = require("../models");

// ================================================================================
//  ROUTES
// ================================================================================

module.exports = function(app) {

    // GET, POST, PUT and DELETE routes for the TASK table/model
     // GET route for getting all of the tasks
  app.get("/api/tasks", function(req, res) {
    // Add sequelize code to find all tasks, and return them to the user with res.json
    db.Task.findAll().then(function(dbTask){
      res.json(dbTask)
    })
  
  });

  app.get("/api/tasks/:assignee", function(req, res) {
    // Add sequelize code to find all tasks where the assignee is equal to req.params.assignee,
    // return the result to the user with res.json
    db.Task.findAll({
      where: {
        assignee: req.params.assignee
      }
    }).then(function(dbTask){
      res.json(dbTask)
    })
  });

  app.post("/api/tasks", function(req, res) {
    // Add sequelize code for creating a task using req.body,
    // then return the result using res.json
    db.Task.create(
      req.body,
    ).then(function(dbTask){
      res.json(dbTask)
    })
  });

  // DELETE route for deleting tasks
  app.delete("/api/tasks/:id", function(req, res) {
    // Add sequelize code to delete a task where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(deletedData){
      res.json(deletedData)
    })
  });

  // PUT route for updating tasks
  app.put("/api/tasks", function(req, res) {
    db.Task.update(
      req.body,
      {
      where: {
      id: req.body.id
      }
    }).then(function(dbTask){
      res.json(dbTask)
    })
    // Add code here to update a task using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
    //get task where assaignee is jon doe
    //get household .email from household where where household jon doe
    //get task and email or phone of jon doe
    //
   /* 
   app.get("/api/shivali/:userid",function(req,res){
     db.User.findOne({
       where :{
         id:req.params.id
       },{
         include:[db.Task]
       }
     }).then()
     res.json(req.params.id+"hello shivali here you will see your object with follwing things:\n name , email, phonenumber, tasks")
   })
   */
  };
  