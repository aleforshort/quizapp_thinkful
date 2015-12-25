$(document).ready(function() {

var currentquestion = 0;

//start game here.

$(".startquiz").click(function(){
	console.log("buttonclicked");
	$(".background-image").show();
	$("#introduction").hide();
	displayQuestion();
});

//these are the var for the correct answers to the questions.


var quizqa = [
 {
 	"questiontext": "How many countries make up Latin America?",
 	"answertext": ["28","23","29","30"],
 	"correctanswer": 1},
 	{
 	"questiontext": "What is the largest country in South America?",
 	"answertext": ["Argentina","Colombia","Venezuela","Brazil"],
 	"correctanswer":3
 }

]

//here is the function that evaluates the user submisson.

function displayQuestion (){
	$("#Q").html("");	
	var currentquestiondata = quizqa[currentquestion];
	console.log(currentquestiondata.questiontext);
	var currenttemplate = $("#questiontemplate").clone();
	currenttemplate.removeClass();
	currenttemplate.find("h2.QA").text(currentquestiondata.questiontext);
	var answerTextContainers = currenttemplate.find("span.answer");
	for (var i = 0; i < currentquestiondata.answertext.length; i++){
		$(answerTextContainers[i]).text(currentquestiondata.answertext[i]);
	}	

	$("#Q").append(currenttemplate);	
}

//event delegation bind the click even to the Q div. 

	$("#Q").on("click",".submit",function(){
	var feedbackanswer = $("#Q").find("h2.feedback");
	var useranswer = $("input.option:checked").val();
	console.log(useranswer);
	var currentquestiondata = quizqa[currentquestion];
	if(useranswer == currentquestiondata.correctanswer){
		feedbackanswer.text("Your answer in correct!");
		feedbackanswer.append("<button class='continue'>Continue</button>");
	}
	else{
		feedbackanswer.text("Your answer in incorrect!");
		feedbackanswer.append("<button class='continue'>Continue</button>");
	}
	})

	$("#Q").on("click",".continue",function(){
	var arraylength = quizqa.length-1;	
	if (currentquestion < arraylength){
		currentquestion++;
		displayQuestion();	
	}
	else{
		alert("You have reached the end of the quiz!");
	}


})

});








