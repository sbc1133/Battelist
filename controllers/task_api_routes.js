// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var db = require("../models");
require('dotenv').config();
var share = require('./sample');
//var share = require("./sms_mail_client")
// ================================================================================
//  ROUTES
// ================================================================================

module.exports = function (app) {

  // GET, POST, PUT and DELETE routes for the TASK table/model
  // GET route for getting all of the tasks
  app.get("/api/tasks", function (req, res) {
    // Add sequelize code to find all tasks, and return them to the user with res.json
    db.Task.findAll().then(function (dbTask) {
      res.json(dbTask)
    })

  });

  app.get("/api/tasks/:id", function (req, res) {
    // Add sequelize code to find all tasks where the assignee is equal to req.params.assignee,
    // return the result to the user with res.json
   db.Assignee.findOne({
     where: {
       id:req.params.id
     },
    include:[db.Task]
    }).then(function (dbTask) {
      res.json(dbTask)
    })
  });

  app.get("/api/tasks/:name", function (req, res) {
    // Add sequelize code to find all tasks where the assignee is equal to req.params.assignee,
    // return the result to the user with res.json
   db.Assignee.findOne({
     where: {
       name:req.params.name
     },
    include:[db.Task]
    }).then(function (dbTask) {
      res.json(dbTask)
    })
  });
  
  app.post("/api/tasks", function (req, res) {
    // Add sequelize code for creating a task using req.body,
    // then return the result using res.json
    db.Task.create(
      req.body,
    ).then(function (dbTask) {
      res.json(dbTask)
    })
  });
  
  // DELETE route for deleting tasks
  app.delete("/api/tasks/:id", function (req, res) {
    // Add sequelize code to delete a task where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (deletedData) {
      res.json(deletedData)
    })
  });

  // PUT route for updating tasks
  app.put("/api/tasks", function (req, res) {
    db.Task.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbTask) {
        res.json(dbTask)
      })
    // Add code here to update a task using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
  app.put("/api/tasks/:name", function (req, res) {
    db.Task.update(
      req.body,
      {
        where: {
          assigneeName:req.params.name
        }
      }).then(function (dbTask) {
        res.json(dbTask)
      })
    // Add code here to update a task using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
  //get task where assaignee is jon doe
  //get household .email from household where where household jon doe
  //get task and email or phone of jon doe
  //


};
