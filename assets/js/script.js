//Define DOM target elements
//Carousel items
var carouselSlides = document.getElementsByClassName("carousel-item");
var carouselTitles = document.getElementsByClassName("carousel-title");
var carousel = document.getElementById("carousel");

// Javascript to hide hero image text on scroll
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 300) {
        $('.hero-title').addClass("hide-title")
    }
    else {
        $('.hero-title').removeClass("hide-title");
    }
});

//Carousel descriptions
var projectDescriptions = [

    {projectNumber: 0, projectName: "Project 1", description: "Japanese Flashcards is a React SPA (Single Page Application) that allows users to quiz themselves from among different categories of Japanese words and phrases, such as nouns, verbs, and numbers.  A library page also displays the entire word bank of words that can be quizzed."},
    {projectNumber: 1, projectName: "Project 2", description: "JPY Converter pulls exchange rate data from USD and JPY, and allows users to enter prices in either currency to compare the equivalent price in the matching pair.  Intended as a simple travel aid, JPY converter is not meant to be 100% accurate up to the second or less, and rather approximates the prices so travelers can get a rough estimate of the costs of goods and services."},
    {projectNumber: 2, projectName: "Project 3", description: "Photo Flow is a single-page application (SPA) that allows photographers to view and manage upcoming shoots, assign events different tasks that need to be completed by specific deadlines, and edit and complete tasks in their client pipeline."},
    {projectNumber: 3, projectName: "Project 4", description: "My Pantry allows you to create a virtual food pantry to see what you've got on the shelves at home, remove items so you'll never have to guess what you're out of, and shop confidently with the knowledge you can check back without standing in front of the cupboard."},
    {projectNumber: 4, projectName: "Project 5", description: "  The Stock Game is a text-based, command line driven game that allows users to try to amass the largest portfolio they can.  Players can select from a variety of fictional stocks to buy and choose when to sell, each turn having a random movement adjust the prices of each stock."},
    {projectNumber: 5, projectName: "Project 6", description: "The Move to Cash Tool tests the likelihood that over a given period of historical stock or Mutual Fund/ETF data, any rolling period of pulling the investments out to cash would yield a higher or lower return than the base case of leaving the money invested."},
    {projectNumber: 6, projectName: "Project 7", description: "The City Weather Dashboard app lets you type in a city and see its current and five-day forecast, as well as select from a list of previously-searched cities."},
    {projectNumber: 7, projectName: "Project 8", description: "Check Yourself is a mental health app designed to give you suggestions for fun local activities based on your mood, and can store your past daily entries for review."}
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