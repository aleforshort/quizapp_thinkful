$(document).ready(function() {

//starte game here.

$(".startquiz").click(function(){
	// startgame()
	$(".background-image").show();
	$("#introduction").hide();

})

//these are the var for the correct answers to the questions.

var rightanswers ={
	question_1 = $("#question1",".1"),
	question_2 = $("#question2", ".3"),
	question_3 = $("#question3", ".2"),
	question_4 = $("#question4", ".1"),

}

//here is the function that evaluates the user submisson.

function startgame (){
	$("#question1").show(); 
	$("submit").click(function(){
		if(".input" == question_1){
			
		}

}

});


