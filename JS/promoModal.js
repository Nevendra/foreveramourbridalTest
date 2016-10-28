$(document).ready(function(){
	

	// function applyNoScrollOnPromo() {
	// 	if($(".promoModalWrapper").is(":visible")){
	// 		$("body").addClass("noScroll");
	// 	}
	// }
	// applyNoScrollOnPromo();

	function closePromo(){
		$("#promoModalClose").click(function(){
			$(".promoModalWrapper").css("display", "none");
			// $("body").removeClass("noScroll");

		})
	}
	closePromo();

	console.log($(window).width());

	function modalScroll(){
		$(window).scroll(function(){

	
			if ($(window).scrollTop() >= 300) {
						$(".promoModalWrapper").css("position", "fixed");
						$(".promoModalWrapper").css("top", "50px");
						// $("#promoModalClose").removeClass("displayNone");
					} else {
		
				}
		});
			
	}
	modalScroll();


});
