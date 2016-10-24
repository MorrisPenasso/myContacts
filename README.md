# myContacts
A simple myContacts application with Angular and Firebase

This is a simple myContacts app with AngularJS, AngularFire and Firebase NoSQL Database.

For this project, i used angular-seed for built a standard AngularJS application and running it into web server.

For more details for how create it, see angular-seed repository and follow steps to configure your project: https://github.com/angular/angular-seed or see my templateStore Repository.

### FOLLOW THIS STEPS:

 - For first thing, download my code, past it into app folder and cancel "view1" and "view2" folders.
 - Install Bootstrap with "bower install bootstrap" command.
 - In this project, i create a new Firebase's project at follow link: https://firebase.google.com/
 - After that you have create a new project, you obtain an ID of your Firebase's project.
 - Open the "contactsCtrl.js" file and into init() function, i create a "ref" variable that contain a Firebase object and the      location database of Firebase. You must replace "var ref = new Firebase("https://yourfirebaseid.firebaseio.com/");" with ID of   your new Firebase Project.
 - Finally, for obtain read and write permission into Firebase Database, go into "Database" section and into "RULES" section, set "true" value on read and write properties.
 
 Start "npm start" command and call "localhost:8000" from your browser.

**See the video tutorial from "videoTrailer" directory.**
