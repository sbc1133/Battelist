
const userInfo = require('./assignedUser');
var accountSid = 'ACfb1cb29f8a8b6effc61693f15ba47bb3'; // Your Account SID from www.twilio.com/console
var authToken = '05347177cf275af70aa92e48f62c3f35';   // Your Auth Token from www.twilio.com/console

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


   



