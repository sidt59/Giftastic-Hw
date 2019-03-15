$(document).ready(function () {
    
// var to hold gif array
var movieArray = ["Star Wars", "Walk Hard", "The Godfather", "Ghost in the Shell", "Super Troopers", "Donnie Darko", "Moonrise Kingdom"];

// declare movieName var?

// API key
// var queryURL = 'https://api.giphy.com/v1/gifs/search?q= ' + movieName + ' &api_key=a5aJ7NgfPh9UcndR9VEthHQnDnNQwbrj&limit=10';

function renderButtons() {
    $('#buttons').empty();
    // loop to iterate through array and adds button
    for (i=0; i < movieArray.length; i++) {
        // adds a + wherever a space is
        var moviesPlus = movieArray[i].trim().replace(/ /g, "+"); 
        //button that adds movie array is
        $('#buttons').append("<button type='button' id='movieButtons' data-movie=" + moviesPlus + " class='gif btn btn-primary'>" + movieArray[i] + "</button>");
    }   
}

renderButtons();

// button for adding movie
$("#addMovie").on("click", function (event) {
    // Prevent form from submitting
    event.preventDefault();
    // take input, collect value, trim
    var movieInput = $("#movieInput").val().trim();
    // push into OG array
    movieArray.push(movieInput);
    renderButtons();
});

// when you click the button then add gif to gifDisplay
$('#buttons').on('click',"button", function(){
    // declare movie and queryURL var
    var movie = $(this).attr('data-movie');
    // insert movie name into queryURL
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=a5aJ7NgfPh9UcndR9VEthHQnDnNQwbrj&limit=10';
    // AJAX API request --- try making the ajax call a global var
    $.ajax({
        url: queryURL,
        type: 'GET'
    }).then(function (response) {
        var results = response.data;
        $("#gifDisplay").empty();
        // pretty much stolen from dynamic-elements-solution --- activity 14
        for (var i = 0; i < results.length; i++) {
            var movieDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var movieImg = $("<img>");
            movieImg.attr("src", results[i].images.fixed_height.url);
            movieDiv.append(p);
            movieDiv.append(movieImg);
            $("#gifDisplay").append(movieDiv);
        }
    })
});

// pausing solution from activities ---- 15-pausing-gifs
$('.gif').on('click', function() {
    //add data-still, data-animate and data-state = 'still' to gif buttons 
})

// document ready closing tag. dont fuck with
});

/* $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#buttons-view").text(JSON.stringify(response));
  });
}

// Function for displaying movie data
function renderButtons() {

  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamically generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("movie");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
} */

// movieImg.attr("data-still", results[i].images.original_still.url);
// movieImg.attr("data-animate", results[i].images.original.url);
// movieImg.attr("data-state", "still");
// movieImg.attr("class", "gif");

// AJAX API request
// $.ajax({
//     url: queryURL,
//     type: 'GET',
//     }).then(function(response) {
//         $("#buttons-view").text(JSON.stringify(response));
//     });

// event.preventDefault();

// wes's still/animate code
/* gif.attr("data-state", "still");
gif.attr("data-animated", results[i].images.fixed_height.url);
gif.attr("data-still", results[i].images.fixed_height_still.url);
gif.attr("src", results[i].images.fixed_height_still.url); */

/* var searchTerm = prompt('Add your search term here');
searchTerm = searchTerm.trim().replace(/ /g, "+"); // adds a + wherever a space is
request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC'); */

// var movieSpaces = movie.trim().replace(/ /g, "+");