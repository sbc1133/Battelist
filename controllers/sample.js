const user = require('./assignedUser');
const sendMsg = require('./sms_mail_client') 
sendMsg(user.name,user.phoneNumber,user.tasklist)
