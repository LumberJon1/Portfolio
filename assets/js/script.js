//Define DOM target elements
//Carousel items
var carouselSlides = document.getElementsByClassName("carousel-item");
var carouselTitles = document.getElementsByClassName("carousel-title");
var carousel = document.getElementById("carousel");

// Javascript to hide hero image on scroll
// $(window).bind('scroll', function() {
//     if ($(window).scrollTop() > 300) {
//         $('#hero-img-div').css({"transform": "translate(0%, -200%)"})
//     }
//     else {
//         $('#hero-img-div').css({"transform": "translate(0%, 0%)"});
//     }
// });

//Carousel descriptions
var projectDescriptions = [
    {projectNumber: 0, projectName: "Project 1", description: "My Pantry allows you to create a virtual food pantry to see what you've got on the shelves at home, remove items so you'll never have to guess what you're out of, and shop confidently with the knowledge you can check back without standing in front of the cupboard."},
    {projectNumber: 1, projectName: "Project 2", description: "The City Weather Dashboard app lets you type in a city and see its current and five-day forecast, as well as select from a list of previously-searched cities."},
    {projectNumber: 2, projectName: "Project 3", description: "Check Yourself is a mental health app designed to give you suggestions for fun local activities based on your mood, and can store your past daily entries for review."}
]


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

});