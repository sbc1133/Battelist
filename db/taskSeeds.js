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
    UserId: 7,
    assigneeName: "mr.joshuajonas@gmail.com",
    selfAssigned: false,
    AssigneeId: 5,
    score: 5,
 });

 db.Task.create({
   taskName:'return 45 call',
   UserId: 9,
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 5,
   score: 5,
 });

 db.Task.create({
   taskName:'test middle',
   UserId: 6,
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 4,
   score: 5,
 });

 db.Task.create({
    taskName:'rtest bottom',
    UserId: 8,
    assigneeName: "mr.joshuajonas@gmail.com",
    selfAssigned: false,
    AssigneeId: 1,
    score: 5,
 });





