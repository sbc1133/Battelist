require('dotenv').config();
module.exports = function sendMsg(name, email, tasks) {
    const nodemailer = require('nodemailer');
   // const twilio = require('twilio');
    const userInfo = require('./assignedUser');
    const { google } = require("googleapis");
    const OAuth2 = google.auth.OAuth2;

    const oauth2Client = new OAuth2(
        process.env.OAUTH_CLIENT_ID, // ClientID
        process.env.OAUTH_SECRET_KEY, // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );
    oauth2Client.setCredentials({
        refresh_token: '1/AT7VTKJlVFp3GtiLWpOQxscO3WpnnMOG6gnqZmDAyjc'
    });
    const accessToken = oauth2Client.getAccessToken();

    //var accountSid = 'ACfb1cb29f8a8b6effc61693f15ba47bb3'; // Your Account SID from www.twilio.com/console
    //var authToken = '05347177cf275af70aa92e48f62c3f35';   // Your Auth Token from www.twilio.com/console
    //console.log("I M... ", accountSid);

    //var client = new twilio(accountSid, authToken);


    console.log("hello......... ", userInfo.name);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            type: "OAuth2",
            user: 'shivalibhalla@gmail.com',
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_SECRET_KEY,
            refreshToken: '1/AT7VTKJlVFp3GtiLWpOQxscO3WpnnMOG6gnqZmDAyjc',
            accessToken: accessToken
        }
    });
    
    function getTask(mytask){
        var taskStr="" ;
        for (let i = 0; i < mytask.length; i++) {
            taskStr = taskStr + `${mytask[i]}\n`;
        }
        return taskStr
    }

    var emailObj = {
        from: 'shivalibhalla@gmail.com',
        to: email,
        subject: `Hello ${name},here is your task list from Battleist\n`,
        text: getTask(tasks)
    }

    transporter.sendMail(emailObj, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}





