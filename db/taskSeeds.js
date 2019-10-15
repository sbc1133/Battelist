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
<<<<<<< HEAD
   taskName:'return call',
   UserId: 1,
=======
   taskName:'return 45 call',
   UserId: 9,
>>>>>>> 85caa2aabb9efcbbb245d4c8805504e84904c0e5
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 5,
   score: 5,
 });

 db.Task.create({
<<<<<<< HEAD
   taskName:'return call',
   UserId: 3,
=======
   taskName:'test middle',
   UserId: 6,
>>>>>>> 85caa2aabb9efcbbb245d4c8805504e84904c0e5
   assigneeName: "mr.joshuajonas@gmail.com",
   selfAssigned: false,
   AssigneeId: 4,
   score: 5,
 });

 db.Task.create({
<<<<<<< HEAD
    taskName:'return call',
    UserId: 1,
=======
    taskName:'rtest bottom',
    UserId: 8,
>>>>>>> 85caa2aabb9efcbbb245d4c8805504e84904c0e5
    assigneeName: "mr.joshuajonas@gmail.com",
    selfAssigned: false,
    AssigneeId: 1,
    score: 5,
 });