// A string array containing potential answers from the magic eight ball
var replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook no so good", "Very doubtfull"];

// Function which refreshes the page in order to reshow the question asked and display an answer
var generateAns = function() {
    // create funtion to generate random answer
    var $answer = $("#Qanswer");
    var answer = $answer.val();
    // make ball show answer
    $(".eightBall").text(answer);
    // hide description to change it
    $(".description").hide();
    // hide other visual parts of header unnecessary to answer
    $(".line").hide();
    $(".inputBar").hide();
    $(".askMe").hide();

    // Generate a random number from 0-19
    var randomNum = Math.floor(Math.random() * 20);
    // retrieve answer at index of random number
    var ballAns = replies[randomNum];
    // Crate appropriate message if no question was typed
    if (answer === "") {
      ballAns = "Reload the page to enter a question."
    }

    // Change description to answer message and show in header
    $(".description").text(ballAns);
    $(".description").show();
};

// Refresh page and show answer to question asked for magic eight ball
$(".askBtn").on("click", function() {
    generateAns();
});
