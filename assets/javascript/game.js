var currentScore = 0;
var targetScore = Math.floor((Math.random() * 101) + 19);
var rng1 = Math.floor((Math.random() * 11) + 1);
var rng2 = Math.floor((Math.random() * 11) + 1);
var rng3 = Math.floor((Math.random() * 11) + 1);
var rng4 = Math.floor((Math.random() * 11) + 1);
var wins = 0;
var losses = 0;
$("#target-score").html(targetScore); 
$("#current-score").html(currentScore); 
$("#win-count").html("Wins: " + wins); 
$("#loss-count").html("Losses: " + losses); 
$("#jewel-1").val(rng1);
$("#jewel-2").val(rng2);
$("#jewel-3").val(rng3);
$("#jewel-4").val(rng4);
$("#jewel-1").on("click", function (){
        var num = $(this).attr("value");
        num = parseInt(num);
        currentScore += num;
        $("#current-score").html(currentScore); 
        checkScore();

});
$("#jewel-2").on("click", function (){
        var num = $(this).attr("value");
        num = parseInt(num);
        currentScore += num;
        $("#current-score").html(currentScore); 
        checkScore();
});
$("#jewel-3").on("click", function (){
        var num = $(this).attr("value");
        num = parseInt(num);
        currentScore += num;
        $("#current-score").html(currentScore); 
        checkScore();
});
$("#jewel-4").on("click", function (){
        var num = $(this).attr("value");
        num = parseInt(num);
        currentScore += num;
        $("#current-score").html(currentScore); 
        checkScore();
});
function newGame() {
    currentScore = 0;
    targetScore = Math.floor((Math.random() * 101) + 19);
    rng1 = Math.floor((Math.random() * 11) + 1);
    rng2 = Math.floor((Math.random() * 11) + 1);
    rng3 = Math.floor((Math.random() * 11) + 1);
    rng4 = Math.floor((Math.random() * 11) + 1);
    $("#jewel-1").val(rng1);
    $("#jewel-2").val(rng2);
    $("#jewel-3").val(rng3);
    $("#jewel-4").val(rng4);
    $("#target-score").html(targetScore); 
    $("#current-score").html(currentScore); 
}
function checkScore() {
    if(currentScore == targetScore) {
        wins++;
        $("#win-count").html("Wins: " + wins); 
        alert("You Win");
        newGame();

    }
    else if (currentScore > targetScore) {
        losses++;
        $("#loss-count").html("Losses: " + losses); 
        alert("You lose");
        newGame();

    }
}


