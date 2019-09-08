$(document).ready(function(){

	openProject = function(){
	 	$(".landing-image").click(function(){
	 		$(".landing-image").fadeOut(200, function(){
	 			$(".left-panel").fadeIn(200);
	 		$(".right-panel").fadeIn(200);
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

 	flashingImage = function(){
 		window.setInterval("$('.blinker1').toggle();", 250);
 	};

 	imageTimeout = function(){
 		setTimeout(function(){
 			flashingImage();
 		}, 7500);
 	};

 	openProject();

 	orderButton();

 	subscribeButton();

 	imageTimeout();
});