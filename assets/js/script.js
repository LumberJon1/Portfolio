//Define DOM target elements
//Carousel items
var carouselSlides = document.getElementsByClassName("carousel-item");
var carouselTitles = document.getElementsByClassName("carousel-title");
var carousel = document.getElementById("carousel");

//Carousel descriptions
var projectDescriptions = [
    {projectNumber: 1, projectName: "Project 1", description: "Description 1"},
    {projectNumber: 2, projectName: "Project 2", description: "Description 2"},
    {projectNumber: 3, projectName: "Project 3", description: "Description 3"},
    {projectNumber: 4, projectName: "Project 4", description: "Description 4"},
    {projectNumber: 5, projectName: "Project 5", description: "Description 5"}
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
    

    //Load the elements to the DOM for the description section

})

//Listener for view all projects