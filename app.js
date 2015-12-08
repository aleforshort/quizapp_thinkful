$(document).ready(function() {
	$(".background-image").hide();
	$(".questions").hide();
	$("#introduction").show();

})
//start game here.

$(".startquiz").click(function(){
	// startgame()
	$(".background-image").show();
	$("#introduction").hide();

});

//these are the var for the correct answers to the questions.

var rightanswers ={
	question_1 = "23",
	question_2 = "Brazil",
	question_3 = "green, yellow, blue",
	question_4 = "Venezuela"
};

//here is the function that evaluates the user submisson.

function startgame (){
	$("#question1").show(); 
}

	$("submit").click(function(){
		if(".input" == question_1){

		$(".feeback").text("Your answer is correct!");		
		}

		else{
			$(".feeback").text("Your answer is incorrect!");
		}

});









