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

app.get('/userseeds',function(req,res){
  db.User.findAll().then(function(data){
    if(!data.length){
      db.User.create({
        password:"password",
       username:'Michelle Santiago',
       phoneNumber:2064769484,
       email: "msantiago2222@yahoo.com"
    });
    db.User.create({
        password:"password",
        username:'Shivali Bhalla',
        phoneNumber:4255536595,
        email: "shivalibhalla@gmail.com"
    });
    db.User.create({
        password:"password",
        username:'Andrew Weiss',
        phoneNumber:2067753688,
        email: "wandrew8@gmail.com"
    });
    db.User.create({
        password:"password",
        username:'Joshua Jonas',
        phoneNumber:2025504986,
        email: "mr.joshuajonas@gmail.com"
    })
    res.send('users seeded!')
    }
    else {
      res.send('no need to seed')
    }
  })

})

app.get('/assigneeSeeds',function(req,res){
  db.Assignee.findAll().then(function(data){
    if(!data.length){
db.Assignee.create({
   assigneeName:'Joshua Jonas',
   username:'Joshua Jonas',
   phoneNumber: 2025504986,
   email: "mr.joshuajonas@gmail.com",
   points: 3
});
db.Assignee.create({
    assigneeName:'Michelle Santiago',
    username:'Michelle Santiago',
    phoneNumber: 2064769484,
    email: "shivalibhalla@gmail.com",
    points: 1
});
db.Assignee.create({
    assigneeName:'Andrew Weiss',
    username:'Andrew Weiss',
    phoneNumber: 2067753688,
    email: "wandrew8@gmail.com",
    points: 7
});
db.Assignee.create({
    assigneeName:'Shivali Bhalla',
    username:'Shivali Bhalla',
    phoneNumber:4255536595 ,
    email: "shivalibhalla@gmail.com",
    points: 4
});
res.send('assignees seeded')
    }else{
      res.send('no need for seeds')
    }
})
});

app.get('/taskSeeds',function(req,res){
  db.Task.findAll().then(function(data){
    if(!data.length){
db.Task.create({

   taskName:'Finish homework before dinner',
   UserId: 1,
   assigneeName: "Joshua Jonas",
   selfAssigned: false,
   AssigneeId: 1,
   score: 2,
});

db.Task.create({
    taskName:'Pick the kids up',
    UserId: 2,
    assigneeName: "Michelle Santiago",
    selfAssigned: false,
    AssigneeId: 4,
    score: 2,
 });

 db.Task.create({
   taskName:'Transcribe notes',
   UserId: 1,
   assigneeName: "Shivali Bhalla",
   selfAssigned: false,
   AssigneeId: 4,
   score: 5,
 });

 db.Task.create({
   taskName:'Clean the car',
   UserId: 3,
   assigneeName: "Andrew Weiss",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
    taskName:'Eat breakfast',
    UserId: 4,
    assigneeName: "Joshua Jonas",
    selfAssigned: false,
    AssigneeId: 1,
    score: 2,
 });

 db.Task.create({
   taskName:'Eat Lunch',
   UserId: 3,
   assigneeName: "Joshua Jonas",
   selfAssigned: false,
   AssigneeId: 1,
   score: 2,
});


db.Task.create({
   taskName:'Refill orca cards',
   UserId: 2,
   assigneeName: "Joshua Jonas",
   selfAssigned: false,
   AssigneeId: 1,
   score: 2,
});

db.Task.create({
   taskName:'Wash the windows',
   UserId: 1,
   assigneeName: "Andrew Weiss",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
   taskName:'Cook Dinner',
   UserId: 2,
   assigneeName: "Andrew Weiss",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
   taskName:'Take kids to the park',
   UserId: 4,
   assigneeName: "Andrew Weiss",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
   taskName:'Change the ball bearing in the dryer',
   UserId: 2,
   assigneeName: "Shivali Bhalla",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
   taskName:'Study Python',
   UserId: 3,
   assigneeName: "Shivali Bhalla",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
   taskName:'Re-arrange the office',
   UserId: 4,
   assigneeName: "Shivali Bhalla",
   selfAssigned: false,
   AssigneeId: 3,
   score: 5,
 });

 db.Task.create({
   taskName:'Buy Halloween Costumes',
   UserId: 1,
   assigneeName: "Michelle Santiago",
   selfAssigned: false,
   AssigneeId: 4,
   score: 2,
});

db.Task.create({
   taskName:'Pay bills',
   UserId: 3,
   assigneeName: "Michelle Santiago",
   selfAssigned: false,
   AssigneeId: 4,
   score: 2,
});

db.Task.create({
   taskName:'Yoga',
   UserId: 4,
   assigneeName: "Michelle Santiago",
   selfAssigned: false,
   AssigneeId: 4,
   score: 2,
});

res.send('assignees seeded')
    }else{
      res.send('no need for seeds')
    }
})
});

require("./controllers/assignee_api_routes.js")(app);
require("./controllers/html_routes.js")(app);
require("./controllers/task_api_routes.js")(app);
require("./controllers/user_api_routes.js")(app);

// =============================================================================
//  SYNC SEQUELIZE MODELS AND START EXPRESS APP
// =============================================================================

db.sequelize.sync({ force:false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
})
