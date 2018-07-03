// A string array containing potential answers from the magic eight ball
var replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

// Function which refreshes the page in order to reshow the question asked and display an answer
var generateAns = function() {
  // Load answer to check from input bar
  var $answer = $("#questionBar");
  var answer = $answer.val();

  // Generate a random number from 0-19
  var randomNum = Math.floor(Math.random() * 20) + 1;
  // retrieve answer at index of random number
  var ballAns = replies[randomNum]

  // Create appropriate message if no question was typed
  if (answer === "") {
    $("#prompt").text("You forgot to type a question!");
  } else {
    $("#prompt").text("Your question has been answered!");
    $("#eight").css("background","#000D1A");
    $("#eight").css("border","1px solid white");
    $("#answer").text(ballAns);
    $("#questionBar").val("");
    $("#triAns").show();
  }

  $("#askBtn").text("Ask Again");
};

// Refresh page and show answer to question asked for magic eight ball
$(function(){
  $("#askBtn").on("click", function() {
    generateAns();
  });
});
