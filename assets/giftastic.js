$(document).ready(function () {
    
// var to hold gif array
var movieArray = ["Star Wars", "Walk Hard", "The Godfather", "Ghost in the Shell", "Super Troopers"];

// declare movieName var?
debugger;
// API key
// var queryURL = 'https://api.giphy.com/v1/gifs/search?q= ' + movieName + ' &api_key=a5aJ7NgfPh9UcndR9VEthHQnDnNQwbrj&limit=10';

function renderButtons() {
    $('#buttons').empty();
    // loop to iterate through array and adds button
    for (i=0; i < movieArray.length; i++) {
        //button that adds movie array is
        $('#buttons').append("<button type='button' data-movie=" + movieArray[i] + ">" + movieArray[i] + "</button>");
    }   
}

renderButtons();

// button for adding movie
$("#addMovie").on("click", function () {
    // take input, collect value, trim
    var movie = $("#movieInput").val().trim();
    // push into OG array
    movieArray.push(movie);
    renderButtons();

});

// when you click the button then add gif to gifDisplay
$('button').on('click', function(){
    // declare movie and queryURL var
    var movie = $(this).attr('data-movie');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=a5aJ7NgfPh9UcndR9VEthHQnDnNQwbrj&limit=10';
    // AJAX API request
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