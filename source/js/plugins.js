// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Forms 
	
	// Dates
		$('.datepicker').datepicker({
		    startDate: "today",
		    todayBtn: "linked",
		    language: "fr",
		    daysOfWeekDisabled: "0",
		    todayHighlight: true, 
		    autoclose: true,
		});

	// Uniform
		$("select, input[type='checkbox'], input[type='radio']").uniform();

	// Parsley on selects
		var forms = $('.form'),
			selects = forms.find(".selector"),
			outsource = function(){
				$(".selector").each(function(){
					var message = $(this).find('.parsley-errors-list');
					message.remove();
					$(this).after(message);
					message.addClass("outsource");
				})
				$("fieldset").each(function(){
					var message = $(this).find('.parsley-errors-list');
					message.remove();
					$(this).after(message);
					message.addClass("outsource");
				});
			},
			classSwitch = function(target){
				var status = $(target).val();
				if(status=="" && typeof target.attr("data-parsley-required") !== typeof undefined && target.attr("data-parsley-required") !== false){
					$(target).parent(".selector").addClass("parsley-error");
				}
				else{
					$(target).parent(".selector").removeClass("parsley-error");
				}
			};

		$(".form select").change(function(){
			classSwitch($(this));
		}).focus(function(){
			classSwitch($(this));
		});

		$(".form input[type='checkbox']").change(function(){
			outsource();
		}).focus(function(){
			outsource();
		})

	// Switch between forms
		$(".formSwitch").on("click", function(event){
			tar = $(this).attr("value");
			$(".formPanel").each(function(){
				if($(this).attr("id")!=tar){
					$(this).hide();
				}
				else{
					$(this).show();
				}
			})
		})

	// Display hours if asked to
		$("#moment").on("change", function(){
			if($(this).val() == "horaire"){
				$("#timescale").show();
			}
			else{
				$("#timescale").hide();
			}
		})

// Sticky footer
	var stickyFooter = function(){
		var h = $("#footer").height();
		$("#wrapper").css("margin-bottom", '-' + h + 'px');
		$("#push").css("height", h);
	}


// Reveal
	$(".reveal").click(function(event){
		$(this).toggleClass("active");
		event.preventDefault();
		var tar = $(this).attr("href");
		$(tar).toggleClass("show");
	})


$(window).load(function () {
	// Parsley

		$.listen('parsley:form:validated', function() {
			$(".form").each(function(){
				tar = $(this).find('select.parsley-error');
				classSwitch(tar);

				// Messages outside filedset for radios and checkboxes
				outsource();
			})
		});

	// Sticky footer
		stickyFooter();
		$(window).resize(function(){
			stickyFooter();
		})

	// Place any jQuery/helper plugins in here.
		// Flexslider
			$('#mainSlider').flexslider({
				slideshowSpeed : 5000,
				pauseOnHover: true,
				directionNav: false,
			});
			$("#soinSlider").flexslider({
				slideshowSpeed: 8000,
				pauseOnHover: true,
				controlNav: false,
				controlsContainer: "#pushOffers",
				slideshow: false, 
			});

		// Pop-ins
			$('.pop').magnificPopup();
});