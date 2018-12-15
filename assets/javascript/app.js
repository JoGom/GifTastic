
var search = [];



function renderBtn(){
    $("#button-view").empty();

    for(var i = 0; i < search.length; i++){
        var btn = $("<button>");
        btn.attr("data-name", search[i]);
        btn.addClass("gifBtn");
        btn.text(search[i]);
        $("#button-view").append(btn);
    }
}

//adds 10 button when they click the button
$("#add-gif").on("click", function(event){
    event.preventDefault();

    var newGif = $("#gif-input").val().trim();

    search.push(newGif);
    renderBtn();
});

function displayGif(){

    //grabs the name of the gif and stores it in a variable
    $("#cover").hide();
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gif+"&api_key=kXT4Ft2jfr0GHTless9b5cYCQaAyGtqi&limit=10";
    console.log(queryURL);

    $("#gif-view").empty();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        for(var i = 0; i < response.data.length; i++){
            var gifDiv = $("<div>");
            var rating = $("<p>").text("rating: " + response.data[i].rating);

            var gifImage = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
         //   console.log(response.data[i].images.fixed_height_still.url);
            gifImage.addClass("gifImg");
            gifImage.attr("data-still", response.data[i].images.fixed_height_still.url).attr("data-animate", response.data[i].images.fixed_height.url).attr("data-state", "still");

            gifDiv.addClass("gifContainer");
            gifDiv.append(gifImage);
            gifDiv.append(rating);
            $("#gif-view").prepend(gifDiv);
        }
    });
}

$(document).on("click", ".gifImg", function(){

    var state = $(this).attr("data-state");
    console.log("hello");
    if (state === "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

$(document).on("click", ".gifBtn", displayGif);
renderBtn();
