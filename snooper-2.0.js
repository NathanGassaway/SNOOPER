$(document).ready(function(){

	openProject = function(){
	 	$(".landing-image").click(function(){
	 		// $(".landing-image").animate({width: '1200px'});
	 		$(".landing").fadeOut(200, function(){
	 			$(".left-panel").fadeIn(200);
	 		$(".right-panel").fadeIn(200);
	 		$(".panel").fadeIn(200);
	 			});

	 	});
 	}

 	openIssue = function() {
 			hiddenElements = $(':hidden');
			visibleElements = $(':visible');

 		$(".site-3-issue-1").click(function(){
 				$(".site-3-issue-1-hider").toggle(500, "swing");
 				$(".site-3-issue-1-title").toggle();
 				if($(".site-3-issue-2-hider:visible").length == 1){
 					$(".site-3-issue-2-hider").toggle(500);
 					$(".site-3-issue-2-title").toggle()};
 				if($(".site-3-issue-3-hider:visible").length == 1){
 					$(".site-3-issue-3-hider").toggle(500);
 					$(".site-3-issue-3-title").toggle()};
 				if($(".site-3-about-hider:visible").length == 1){
 					$(".site-3-about-hider").toggle(500);
 					$(".site-3-about-title").toggle()};
 			});
 		$(".site-3-issue-2").click(function(){
 				$(".site-3-issue-2-hider").toggle(500);
 				$(".site-3-issue-2-title").toggle();
 				if($(".site-3-issue-1-hider:visible").length == 1){
 					$(".site-3-issue-1-hider").toggle(500);
 					$(".site-3-issue-1-title").toggle()};
 				if($(".site-3-issue-3-hider:visible").length == 1){
 					$(".site-3-issue-3-hider").toggle(500);
 					$(".site-3-issue-3-title").toggle()};
 				if($(".site-3-about-hider:visible").length == 1){
 					$(".site-3-about-hider").toggle(500);
 					$(".site-3-about-title").toggle()};
 			});
 		$(".site-3-issue-3").click(function(){
 				$(".site-3-issue-3-hider").toggle(500);
 				$(".site-3-issue-3-title").toggle();
 				if($(".site-3-issue-1-hider:visible").length == 1){
 					$(".site-3-issue-1-hider").toggle(500);
 					$(".site-3-issue-1-title").toggle()};
 				if($(".site-3-issue-2-hider:visible").length == 1){
 					$(".site-3-issue-2-hider").toggle(500);
 					$(".site-3-issue-2-title").toggle()};
 				if($(".site-3-about-hider:visible").length == 1){
 					$(".site-3-about-hider").toggle(500);
 					$(".site-3-about-title").toggle()};
 			});
 		$(".site-3-about").click(function(){
 				$(".site-3-about-hider").toggle(250);
 				$(".site-3-about-title").toggle(250);
 				if($(".site-3-issue-1-hider:visible").length == 1){
 					$(".site-3-issue-1-hider").toggle(500);
 					$(".site-3-issue-1-title").toggle()};
 				if($(".site-3-issue-2-hider:visible").length == 1){
 					$(".site-3-issue-2-hider").toggle(500);
 					$(".site-3-issue-2-title").toggle()};
 				if($(".site-3-issue-3-hider:visible").length == 1){
 					$(".site-3-issue-3-hider").toggle(500);
 					$(".site-3-issue-3-title").toggle()};
 			});
 	}

 	orderButton = function(){
 		$(".purchase").click(function(){
 			$(".button-form").submit()
 			$(".site-3-issue-1-title").text("hang on!");
 			$(".site-3-issue-2-title").text("hang on!!");
 			$(".site-3-issue-3-title").text("hang on!!!");
 		});

 	}

 	subscribeButton = function(){
 		$(".subscribe").click(function(){
 			$(".validate").submit()
 		});
 	}

 	kunstfondButton = function(){
 		$(".dk-logo").click(function(){
 			window.location.href="https://www.kunst.dk/";
 		});

 	}

 	openProject();

 	openIssue();

 	orderButton();

 	subscribeButton();

 	kunstfondButton();

});