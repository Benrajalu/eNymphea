// This deals with the tabs blocks behaviour.


	// Make height
	var tabHeight = function(){
		$(".tabs").each(function(){
			var h = $(this).find("dd.active").height();
			$(this).css("height", (h + 70) + "px");
		})
	}

	// Open / close tabs
	var toggle = function(){
		$('.tabs').find('dt a').on("click", function(event){
			event.preventDefault();

			var par = $(this).parents(".tabs"),
				tar = $(this).attr("href");

			if(Modernizr.mq('only all and (max-width: 780px)')){
				// Mobile behaviour
				$(this).toggleClass("mobileActive");
				$(tar).toggleClass("mobileActive");
				//tabHeight();
			}
			else{
				// Desktop behaviour
				if($(tar).is(":visible")){
					if($(tar).height() != "0"){
						console.log("nope");
						return false
					}
					else{
						$(par).find("dd").removeClass("active");
						$(par).find("dt a").removeClass("active");
						$(this).toggleClass("active");
						$(tar).toggleClass("active");
						tabHeight();
					}
				}
				else{
					$(par).find("dd").removeClass("active");
					$(par).find("dt a").removeClass("active");
					$(this).toggleClass("active");
					$(tar).toggleClass("active");
					tabHeight();
				}
			}
		})
	}

	toggle();


$(window).load(function () {
	tabHeight();

	$(window).resize(function(){
		tabHeight();
	})


});