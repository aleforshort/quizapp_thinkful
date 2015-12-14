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
 	"correctanswer": 1
 }

]

//here is the function that evaluates the user submisson.

function startgame (){
	// $("#question1").show(); 

	var currentquestiondata = quizqa[currentquestion];
	console.log(currentquestiondata.questiontext);
	var currenttemplate = $("#questiontemplate").clone();
	currenttemplate.removeClass();
	currenttemplate.find("h2").text(currentquestiondata.questiontext);
	var answerTextContainers = currenttemplate.find("span.answer");
	for (var i = 0; i < currentquestiondata.answertext.length; i++){
		$(answerTextContainers[i]).text(currentquestiondata.answertext[i]);
	}


	$("#Q").append(currenttemplate);	
}

	$("submit").click(function(){
		if(".input" == question_1){

		$(".feeback").text("Your answer is correct!");		
		}

		else{
			$(".feeback").text("Your answer is incorrect!");
		}
});


});






