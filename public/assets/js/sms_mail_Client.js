
require('dotenv').config();
const userInfo = require('./assignedUser');
var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
console.log(accountSid);
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var mailer = require('nodemailer');

console.log(userInfo.UserDetails);

function createMsgObject(name,phone,email,tasks){
    return new Promise((resolve,reject)=>{
        var msgStr=`Hello ${name},here is your task list from Battleist\n`;
        var taskStr="";
        for (let i = 0 ; i<tasks.length;i++){
             taskStr=taskStr+`${tasks[i]}\n`;
        }
        var msgObj={
            body:msgStr+taskStr,
            to:phone,
            from:'+12063395277'
        }
        resolve(msgObj);
    })
}


createMsgObject(userInfo.UserDetails.name,userInfo.UserDetails.phoneNumber,userInfo.UserDetails.email,userInfo.UserDetails.tasklist).then(function(result){
    client.messages.create(result).then((message) => console.log(message.sid));
})


   



