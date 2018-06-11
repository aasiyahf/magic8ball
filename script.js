var replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook no so good", "Very doubtfull"];

var generateAns = function() {
    // create funtion to generate random answer
    var $answer = $("#Qanswer");
    var answer = $answer.val();
    $(".eightBall").text(answer);
    $(".description").hide();
    $(".line").hide();
    $(".inputBar").hide();
    $(".askMe").hide();

    var randomNum = Math.floor(Math.random() * 20);
    var ballAns = replies[randomNum];
    if (answer === "") {
      ballAns = "Reload the page to enter a question."
    }
    $(".description").text(ballAns);
    $(".description").show();
};

$(".askBtn").on("click", function() {
    generateAns();
});
