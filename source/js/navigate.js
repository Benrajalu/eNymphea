// Menus
	// Top bar

		var topBar = $("#topBar"), 
			triggers = topBar.find(".trigger");

		// Close all panels
			var closePanels = function(){
				var panels = $(".layer");
				var clo = new TimelineLite();
				clo.pause();
				clo.to(panels, 0.5, {maxHeight:"0px", ease:Sine.easeInOut});
				clo.to(panels, 0, {display:"none", ease:Sine.easeInOut}, "=-0.1");

				triggers.removeClass("expended");
				clo.play();
			}

		// Close panels on body click
			var bodyClose = function(){
				$('body').bind('click', function(e) {
					if($('#log').height() > 50 || $("#languages").height() > 50 || $("#cart").height() > 20){
						if($(e.target).closest('.layer').length == 0 && $(e.target).closest('.trigger').length == 0 ) {
						    closePanels();
						}	
					}
				});
			}

			bodyClose();

		triggers.click(function(event){
			event.preventDefault();
			var target = $(this).siblings("ul"); 

			if($(this).attr("id")=="user"){
				var mx = "700px";
			}
			else{
				var mx = "200px";
			}
			
			var op = new TimelineLite();
		    op.pause();
		    op.to(target, 0.5, {display:"block", maxHeight: mx, ease:Sine.easeInOut});

		    var cl = new TimelineLite();
		    cl.pause();
		    cl.to(target, 0.5, {maxHeight:"0px", ease:Sine.easeInOut});
		    cl.to(target, 0, {display:"none", ease:Sine.easeInOut}, "=-0.1");


		    // Close other panels
		    	var other = $(this).parent("li").siblings().find(".trigger");
		    	var clo = new TimelineLite();
		    	clo.pause();
		    	clo.to(other.siblings("ul"), 0.5, {maxHeight:"0px", ease:Sine.easeInOut});
		    	clo.to(other.siblings("ul"), 0, {display:"none", ease:Sine.easeInOut}, "=-0.1");

		    	other.removeClass("expended");
		    	clo.play();


		    // Animate open or close depending on current state
			    if($(this).hasClass("expended")){
			    	cl.play();
			    	$(this).removeClass("expended");
			    }
			    else{
			    	op.play();
			    	$(this).addClass("expended");
			    }

		})


	// Main menu
		$(".mobileToggle").click(function(event){
			event.preventDefault();
			$(".navigate").toggleClass("mobileOpen");
			closePanels();
		})

		var expand = $("#mainNav").find(".flyout");
		expand.click(function(event){
			event.preventDefault();
			$(this).toggleClass("active");
			$("#mainNav").toggleClass("expended");
			$("#contents").toggleClass("push");
		});
		$("#back").click(function(event){
			event.preventDefault();
			$("#mainNav").removeClass("expended");
			expand.removeClass("active");
		})

		/*expand.each(function(){
			if($(this).hasClass("active")){
				$('#mainNav').addClass("expended");
				$("#contents").addClass("push");
			}
		})*/

	// Rituals on category page
		$("#toggle").click(function(event){
			event.preventDefault();
			$(this).toggleClass("reverse");
			$("#categories").toggleClass("open");
		})