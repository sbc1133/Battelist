const db = require('../models')
db.Task.create({
   taskName:'Do homework',
   UserId: 1,
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 5,
   score: 5,
});

db.Task.create({
    taskName:'return call',
    UserId: 2,
    assigneeName: "mr.joshuajonas@gmail.com",
    selfAssigned: false,
    AssigneeId: 5,
    score: 5,
 });

 db.Task.create({

   taskName:'return call',
   UserId: 1,
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 5,
   score: 5,
 });

 db.Task.create({
   taskName:'return call',
   UserId: 3,
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 4,
   score: 5,
 });

 db.Task.create({
    taskName:'return call',
    UserId: 1,
    assigneeName: "mr.joshuajonas@gmail.com",
    selfAssigned: false,
    AssigneeId: 1,
    score: 5,
 });