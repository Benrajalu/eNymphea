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
			if($(this).attr("value")){
				tar = $(this).attr("value");	
			}
			else{
				event.preventDefault();
				tar = $(this).attr("href");	
			}
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


	// Cart
		// Count total
		var cartCount = function(){
			var sum = 0;

			$('#items').find('.price').each(function() {
				var clean = $(this).html().replace('€', '');
		        sum += Number(clean);
		    });

		    $("#total span").html(sum + '€');
		}

		// Redirect to home if no products
		var toHome = function(){
			if($('#items').find('.product').length == 0){
				location.href="/";
			}
		}

		// Remove items
		$(document).on('click', '.product .remove', function(event){
			event.preventDefault();
			var product = $(this).parents(".product");
			if(confirm("Souhaitez vous retirer cet article du panier ?")){
				$(product).fadeOut(300);
				setTimeout(function(){
					$(product).remove();
					cartCount();
					toHome();
				}, 300);
			}
			else{
				return false;
			}
		})
		cartCount();

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

// Archive panel
	$(document).on("click", ".archive .open", function(event){
		event.preventDefault();
		$(this).parent('.panel').toggleClass("on");
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

			// Gallery sliders

				$('#photoNav').flexslider({
				   animation: "slide",
				   controlNav: false,
				   animationLoop: false,
				   slideshow: false,
				   itemWidth: 100,
				   itemMargin: 5,
				   asNavFor: '#photoSlider'
				 });
				$("#photoSlider").flexslider({
					slideshowSpeed: 8000,
					animation: 'slide',
					pauseOnHover: true,
					controlNav: false,
					slideshow: true,
					synch: '#photoNav',
					start: function(slider){
				      $(slider).find(".current").html(slider.currentSlide+1);
				      $(slider).find(".total").html(slider.count);
				    },
				    after: function(slider){
				      $(slider).find(".current").html(slider.currentSlide+1);
				      $(slider).find(".total").html(slider.count);
				      $("#photoNav").find("li").each(function(index, item){
				      		$(item).removeClass("flex-active-slide");
				      		if(index == slider.currentSlide){
				      			$(item).addClass("flex-active-slide");
				      		}
				      });
				    } 
				});

				$('#videoNav').flexslider({
				   animation: "slide",
				   controlNav: false,
				   animationLoop: false,
				   slideshow: false,
				   itemWidth: 100,
				   itemMargin: 5,
				   asNavFor: '#videoSlider'
				 });
				$("#videoSlider").flexslider({
					slideshowSpeed: 8000,
					animation: 'slide',
					pauseOnHover: true,
					controlNav: false,
					slideshow: true,
					synch: '#videoNav',
					start: function(slider){
				      $(slider).find(".current").html(slider.currentSlide+1);
				      $(slider).find(".total").html(slider.count);
				    },
				    after: function(slider){
				      $(slider).find(".current").html(slider.currentSlide+1);
				      $(slider).find(".total").html(slider.count);
				      $("#videoNav").find("li").each(function(index, item){
				      		$(item).removeClass("flex-active-slide");
				      		if(index == slider.currentSlide){
				      			$(item).addClass("flex-active-slide");
				      		}
				      });
				    } 
				});

		// Pop-ins
			$('.pop').magnificPopup({
				callbacks : {
					open : function(){
						setTimeout(function(){
							if($(".flexslider").length){
								$(".flexslider").data('flexslider').resize();
							}
							if($(".galleryNav").length){
								$(".galleryNav").data('flexslider').resize();	
							}
						},300);
					}
				}
			});
});