$(document).ready(function() {

var currentquestion = 0;

//start game here.

$(".startquiz").click(function(){
	console.log("buttonclicked");
	$(".background-image").show();
	$("#introduction").hide();
	startgame();
});

//these are the var for the correct answers to the questions.


var quizqa = [
 {
 	"questiontext": "How many countries make up Latin America?",
 	"answertext": ["28","23","29","30"],
 	"correctanswer": 1,
 	"questiontext2": "What is the largest country in South America?",
 	"answertext2": ["Argentina","Colombia","Venezuela","Brazil"],
 	"correctanswer2":3

 }

]

//here is the function that evaluates the user submisson.

function startgame (){

	var currentquestiondata = quizqa[currentquestion];
	console.log(currentquestiondata.questiontext);
	var currenttemplate = $("#questiontemplate").clone();
	currenttemplate.removeClass();
	currenttemplate.find("h2.QA").text(currentquestiondata.questiontext);
	var answerTextContainers = currenttemplate.find("span.answer");
	for (var i = 0; i < currentquestiondata.answertext.length; i++){
		$(answerTextContainers[i]).text(currentquestiondata.answertext[i]);
	}
	
	$(".submit").click(function(){
	var feedbackanswer = currenttemplate.find("h2.feedback");
	if(currentquestiondata.answertext == currentquestiondata.correctanswer){
		feedbackanswer.text("Your answer in correct!");
	}
	else{
		feedbackanswer.text("Your answer in incorrect!");
	}
	})

	$("#Q").append(currenttemplate);	
}


});








