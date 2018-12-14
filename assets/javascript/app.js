var search = ["animals", "mood", "celebrity" ];

function renderBtn(){
    $("#button-view").empty();

    for(var i = 0; i < search.length; i++){
        var btn = $("<button>");
        btn.attr("data-name", search[i]);
        btn.text(search[i]);
        $("#button-view").append(btn);
    }
}

function displayGif(){

    //grabs the name of the gif and stores it in a variable
    var gif = "happy"//$(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gif+"&api_key=kXT4Ft2jfr0GHTless9b5cYCQaAyGtqi&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        for(var i = 0; i < response.data.length; i++){
            var gifDiv = $("<div>");
            var rating = $("<p>").text("rating: " + response.data[i].rating);

            var gifImage = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
            console.log(response.data[i].images.fixed_height_still.url);
            gifImage.attr("data-still", response.data[i].images.fixed_height_still.url).attr("data-animate", response.data[i].images.fixed_height.url).attr("state", "still");

            gifDiv.append(gifImage);
            gifDiv.append(rating);
            $("#gif-view").prepend(gifDiv);
        }
    });
}
displayGif();