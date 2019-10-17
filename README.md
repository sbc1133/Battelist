# Battelist (Project Two)

**Click below to access the app.**
##### https://github.com/sbc1133/Battelist.git 
##### https://sbc1133.github.io/Battelist/
##### https://aqueous-brushlands-92949.herokuapp.com/

**Project Intro:** 

An easy to use productivity application that allows the user to set up a family account.  The user can create todo lists for each family member and send their lists to them via email or sms message. This app is designed to keep the whole family up-to-date and staying productive. 

### Features

* Add new member
* Delete a member
* Add new task
* Delete a task
* Mark task as completed / uncompleted
* Individual tasks can move moved up or down within it's own card
* Email and/or text an individual member their personal task list

### Technologies used:
* HTML
* CSS
* JavaScript
* jQuery UI
* MDBootstrap

***Git Bash, enter in the following code:***  
* git clone https://github.com/sbc1133/Battelist.git*  
* cd battelist  
* mysql -u USERNAME -p"PASSWORD"  
* source schema.sql  
* source seeds.sql  
* quit  
* npm install  
* Open **the mysqlSettings.js** file and change the user and password values to reflect yours. Then save the file.

**Run Node**  
**node battelist.js?????????**
* Follow the command line menus  

**Node.js Package Dependencies**  
    • var express = require("express");  
    • var exphbs = require("express-handlebars");  
    • var db = require("./models");  
    • var path = require("path")  
      
**API’s Used**  
    • Nodemailer  
    • Twilio 
    
## Collaborators    
* [Michelle Santiago](https://github.com/msantiago2222)  
* [Shivali Bhalla](https://github.com/sbc1133)  
* [Joshua Jonas](https://github.com/NotThatJonas)  
* [Andrew Weiss](https://github.com/wandrew8)
   
___________________________________________________________________________________________________________________________________
 **Future Deveopment:**  
* Alexa integration: voice creates task list.   
* Randomizer: Allows user to use randomly choose a member of the household for the assigned tasks (works well for kids and adults too!).  * Ability to upload a profile picture for each member.  
* Adding a reminder for user and/or members.    
* Encouragement quotes that can be sent to members when a task is added.  
* Gamify the app - setup a point system which the user can give a reward of their choosing when the member reaches their goal.
___________________________________________________________________________________________________________________________________
