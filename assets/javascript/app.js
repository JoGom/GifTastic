var search = ["animals", "mood", "celebrity" ];
console.log(search);
renderBtn();
function renderBtn(){
    $("#button-view").empty();

    for(var i = 0; i < search.length; i++){
        var btn = $("<button>");
        btn.attr("data-name", search[i]);
        btn.text(search[i]);
        $("#button-view").append(btn);
    }
}