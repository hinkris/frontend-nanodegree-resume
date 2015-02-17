 var skillz = ["Builder","Painter","Engineer", "Pilot"];
var bio = {"namee": "kris", 
           "role": "Rocketship builder",
           "contactinfo": "987 727 999",
           "pictureurl": "images/fry.jpg",
           "welcomemsg": "Hello How Are You!!",
           "skills": skillz};
           
var formattedName = bio.namee;
var formattedRole = bio.role;
var formattedContact = bio.contactinfo;
var formattedPictureurl = bio.pictureurl;
var formattedWelcome = bio.welcomemsg;
var formattedskillsStart = bio.skills;


var name = HTMLheaderName.replace("%data%",formattedName);
var role = HTMLheaderRole.replace("%data%",formattedRole);
var contact = HTMLmobile.replace("%data%",formattedContact);
var picture = HTMLbioPic.replace("%data%",formattedPictureurl);
var welcomemsg = HTMLWelcomeMsg.replace("%data%",formattedWelcome);
var kundi = HTMLskillsStart;




var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';


$ ("#header").prepend(picture);
$ ("#header").prepend(welcomemsg);
$ ("#header").prepend(role);
$ ("#header").prepend(name);
$ ("#header").append(contact);
$ ("#header").append(kundi);
var skill = HTMLskills.replace("%data%", bio.skills[0]);
$ ("#skillsH3").append(skill);  
var skill = HTMLskills.replace("%data%", bio.skills[1]);
$ ("#skillsH3").append(skill);  
var skill = HTMLskills.replace("%data%", bio.skills[2]);
$ ("#skillsH3").append(skill);  
var skill = HTMLskills.replace("%data%", bio.skills[3]);
$ ("#skillsH3").append(skill);  



var work = 
{ "kund":[{
		"currentt":"Supervisor",
        "employer": "Nasa", "years": "1987", 
        "city": "Chennai", 
        "description": "This job I make the Rocketship go to moon and shit. Y'know, go right up to moon no wishy washy nonsense."
          },
        {
        "currentt":"Head Supervisor",
        "employer": "Nasa", "years": "1992", 
        "city": "Chennai", 
        "description": "This job I make the scientists do the shit work while I take shits."
        },
       {
       	"currentt": "Head of Supervisors",
        "employer":"Nasa", "years": "  1997", 
        "city": "Chennai", 
        "description": "This job I make the division shit their pants."
       }]
  };

for (hello in work.kund) {

var newemployer = HTMLworkStart;
var employertitle = HTMLworkEmployer.replace("%data%", work.kund[hello].employer) + HTMLworkTitle.replace("%data%", work.kund[hello].employer); 
var years = HTMLworkDates.replace("%data%", work.kund[hello].years); 
var city = HTMLworkLocation.replace("%data%", work.kund[hello].city); 
var description = HTMLworkDescription.replace("%data%", work.kund[hello].description);
$ ("#workExperience").append(newemployer);
$ ("#workExperience").append(employertitle);
$ ("#workExperience").append(years);
$ ("#workExperience").append(city);
$ ("#workExperience").append(description);

};

var educat = {};
educat.lastSchool = "Gill Adarsh";
educat.years = 2007;
educat.city = "Chennai";
educat.major = "Airplane Builder";
var lastSchool = HTMLschoolName.replace("%data%", educat.lastSchool);
var year = title = HTMLschoolDates.replace("%data%", educat.years);
var city = HTMLschoolLocation.replace("%data%", educat.city);
var major = HTMLschoolMajor.replace("%data%", educat.major);
$ ("#education").append(lastSchool);
$ ("#education").append(year);
$ ("#education").append(city);
$ ("#education").append(major);

var work = {};





/*
var bio = {
"name": "John Doe",
"role": "Web Developer",
"contacts": {
"mobile": "733-333-3333",
"email": "jd432@yahoo.com",
"github": "jd32",
"twitter": "n/a",
"location": "Orange County"
},
"welcomeMessage": "Welcome to my webpage!",
"skills": [
"C", "C++", "Java", "Eclipse"
],
"bioPic": "images/fry.jpg"
};




var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';




if(bio.skills.length > 0){
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
};	

*/