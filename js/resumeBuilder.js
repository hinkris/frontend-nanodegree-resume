var skillz = ["builder","painter","engineer", "pilot"];
var bio = {"namee": "kris", 
           "role": "Rocketship builder",
           "contactinfo": "23524325",
           "pictureurl": "images/fry.jpg",
           "welcomemsg": "hello how you!!",
           "skills": skillz};
           
var formattedName = bio.namee;
var formattedRole = bio.role;
var formattedContact = bio.contactinfo;
var formattedPictureurl = bio.pictureurl;
var formattedWelcome = bio.welcomemsg;
var formattedSkills = bio.skills;

var name = HTMLheaderName.replace("%data%",formattedName);
var role = HTMLheaderRole.replace("%data%",formattedRole);
var contact = HTMLmobile.replace("%data%",formattedContact);
var picture = HTMLbioPic.replace("%data%",formattedPictureurl);
var welcomemsg = HTMLWelcomeMsg.replace("%data%",formattedWelcome);
var skills = HTMLskills.replace("%data%",formattedSkills);

$ ("#header").prepend(picture);
$ ("#header").prepend(welcomemsg);
$ ("#header").prepend(role);
$ ("#header").prepend(name);
$ ("#header").append(contact);
$ ("#header").append(skills);


