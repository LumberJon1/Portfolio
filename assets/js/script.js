//Define DOM target elements
//Carousel items
var carouselSlides = document.getElementsByClassName("carousel-item");
var carouselTitles = document.getElementsByClassName("carousel-title");
var carousel = document.getElementById("carousel");

//Carousel descriptions
var projectDescriptions = [
    {projectNumber: 0, projectName: "Project 1", description: "Work Day Scheduler is an app that allows you to add tasks to each block of the work day, and will highlight each block of time based on the current hour."},
    {projectNumber: 1, projectName: "Project 2", description: "The City Weather Dashboard app lets you type in a city and see its current and five-day forecast, as well as select from a list of previously-searched cities."},
    {projectNumber: 2, projectName: "Project 3", description: "Check Yourself is a mental health app designed to give you suggestions for fun local activities based on your mood, and can store your past daily entries for review."},
    {projectNumber: 3, projectName: "Project 4", description: "Password Generator takes your criteria such as capitalization and special characters, and generates a random password for you to use."},
    {projectNumber: 4, projectName: "Project 5", description: "Pokemon Type Randomizer takes a random pokemon and reassignes it a new typing, letting you reimagine and draw it."}
]

//Carousel view buttons

//Update project title

//Load project description

//View this project function
//- Grab the project link
for (var i = 0; i < carouselSlides.length; i++) {
    console.log("carousel slide "+i);
    console.log("Carousel slide content: ", carouselSlides[i]);
    console.log("carousel item title: "+carouselTitles[i].innerText);
}

//Listener for view this project
$("#carousel").on("slide.bs.carousel", function(event) {
    //Define the slide target and the name of that slide's project
    var targetSlide = event.to;
    var projectTitle = ($(event.relatedTarget).children("a").text());
    var projectLink = $(event.relatedTarget).children("a").attr("href");

    //Find the description of that project based on its title
    var projectDescription = projectDescriptions[targetSlide].description;
    console.log(projectDescription);

    //Load the elements to the DOM for the description section
    $("#project-title").text(projectTitle);
    $("#project-description").text(projectDescription);
    $("#view-project-btn").children("a").attr("href", projectLink);

})

//Listener for view all projects