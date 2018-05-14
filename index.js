$(document).ready(function(){

	$(".modal").hide()
	
	
	// show and hide modal function
	$("#myButton").click(function(){
		$(".modal").show()
	})

	$(".close").click(function(){
		$(".modal").hide()
	})

})