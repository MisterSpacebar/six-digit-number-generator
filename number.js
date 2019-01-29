function randomGen () {
    var max = 260000;
    var result = Math.floor(Math.random() * max) + 1;
    console.log(result);

    return result
}

$("#remake").on("click", function(event){
    $("#make-number").empty();
    event.preventDefault();
    var number = $("<p>").text(randomGen());
    console.log(number);

    $("#make-number").append(number);
});