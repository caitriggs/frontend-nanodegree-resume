

// Objects 

var bio = { 
	"name" : "Cait",
	"role" : "GIS Tech",
	"contacts" : {
		"email": "caitriggs@gmail.com",
		"twitter": "@caitriggs",
		"location": "Seattle"
	},	
	"bioPic" : "images/cait-avatar.png",
	"welcomeMessage" : "Heyo, I'm Cait, a GIS Tech living in Seattle.",
	"skills" : ["GIS","map making", "hammocking"]
}

var education = {
	"schools": [
		{
			"name": "University of Florida",
			"city": "Gainesville, FL",
			"degree": "Bachelors of Science",
			"majors": "Geology",
			"dates": 2012,
			"url": "www.ufl.edu"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer": "exp Energy Services",
			"title": "GIS Technician",
			"dates": "Aug 2012 - Present",
			"description": "Run geospatial analyses for environmental impacts. Make maps and mapbooks."
		},
		{
			"employer": "BCS Inc.",
			"title": "Lab Technician",
			"dates": "Aug 2010 - Aug 2012",
			"description": "Perform microbiological assays for determining presence of pathogens in solids and sludge."
		}
	] 
}

var projects = {
	"projects": [
		{
			"title": "Personal Website Design",
			"dates": "2014",
			"description": "A website designed for a current graduate student to display her research and provide her students with access to documents.",
			"images": [
				"https://www2.bc.edu/nicole-biller/index.html"
			]
		}
	]
}

// Formatting and Appending

var formattedName = HTMLheaderName.replace("%data%","Caitlin Riggs");
var formattedRole = HTMLheaderRole.replace("%data%","GIS Technician");

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(bio.picURL);

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

// $('#main').append(internationalizeButton);


function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.project[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);		
			}
		}
	}
}

// Calling functions
displayWork();
displayProjects();

