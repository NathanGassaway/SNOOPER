$(document).ready(function(){

	openProject = function(){
	 	$(".landing-image").click(function(){
	 		$(".landing-image").fadeOut(200, function(){
	 			$(".left-panel").fadeIn(200);
	 		$(".right-panel").fadeIn(200);
	 			});
	 	});
 	}



 	openProject();
});