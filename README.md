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




![cattura](https://cloud.githubusercontent.com/assets/20413873/16818793/d9e7b04a-4949-11e6-8e18-c5257267aeca.PNG)
Click + button for show input forms


Compile input forms and click "Add Person"

![cattura2](https://cloud.githubusercontent.com/assets/20413873/16818823/fc4e756a-4949-11e6-8d6b-761b07b02ee0.PNG)


You have insert new data into your Firebase Database

![cattura3](https://cloud.githubusercontent.com/assets/20413873/16818850/1d05bdb8-494a-11e6-825e-ab5a9af71641.PNG)


Click "Edit" button for edit your data and click "Upgrade" button for upgrade your data into database

![cattura4](https://cloud.githubusercontent.com/assets/20413873/16818871/3476ca14-494a-11e6-807b-5c5ac2b0f945.PNG)


Click name of person for show his details

![cattura5](https://cloud.githubusercontent.com/assets/20413873/16818922/7093553a-494a-11e6-8a0b-e82351bf7d26.PNG)
