$(document).ready(function(){

	openProject = function(){
	 	$(".landing-image").click(function(){
	 		$(".landing").fadeOut(200, function(){
	 			$(".left-panel").fadeIn(200);
	 		$(".right-panel").fadeIn(200);
	 		$(".panel").fadeIn(200);
	 			});
	 	});
 	}

 	orderButton = function(){
 		$(".purchase").click(function(){
 			$(".button-form").submit()
 		});

 	}

 	subscribeButton = function(){
 		$(".subscribe").click(function(){
 			$(".validate").submit()
 		});
 	}

 	openProject();

 	orderButton();

 	subscribeButton();

});