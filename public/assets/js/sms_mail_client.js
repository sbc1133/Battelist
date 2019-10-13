
require('dotenv').config();
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const userInfo = require('./assignedUser');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID, // ClientID
    process.env.OAUTH_SECRET_KEY, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();

var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
console.log(accountSid);

var client = new twilio(accountSid, authToken);


console.log(userInfo.UserDetails);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: "OAuth2",
        user: 'code2soul@gmail.com',
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_SECRET_KEY,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken
    }
});

function sendMsg(name, phone, email, tasks) {
    return new Promise((resolve, reject) => {
        var msgStr = `Hello ${name},here is your task list from Battleist\n`;
        var taskStr = "";
        for (let i = 0; i < tasks.length; i++) {
            taskStr = taskStr + `${tasks[i]}\n`;
        }
        var msgObj = {
            body: msgStr + taskStr,
            to: phone,
            from: '+12063395277'
        }
        var emailObj = {
            from: 'code2soul@gmail.com',
            to: email,
            subject: msgStr,
            text: taskStr
        }
        resolve([msgObj, emailObj]);
    })
}


sendMsg(userInfo.UserDetails.name, userInfo.UserDetails.phoneNumber, userInfo.UserDetails.email, userInfo.UserDetails.tasklist).then(function (result) {

    client.messages.create(result[0]).then((message) => console.log(message.sid));

    transporter.sendMail(result[1], function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})
