/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

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
            startDate: 'today',
            todayBtn: 'linked',
            language: 'fr',
            daysOfWeekDisabled: '0',
            todayHighlight: true, 
            autoclose: true,
        });

	// Uniform
		$('select, input[type="checkbox"], input[type="radio"]').uniform();

	// Parsley on selects
		var outsource = function(){
				$('.selector').each(function(){
					var message = $(this).find('.parsley-errors-list');
					message.remove();
					$(this).after(message);
					message.addClass('outsource');
				});
				$('fieldset').each(function(){
					var message = $(this).find('.parsley-errors-list');
					message.remove();
					$(this).after(message);
					message.addClass('outsource');
				});
			},
			classSwitch = function(target){
				var status = $(target).val();
				if(status==='' && typeof target.attr('data-parsley-required') !== typeof undefined && target.attr('data-parsley-required') !== false){
					$(target).parent('.selector').addClass('parsley-error');
				}
				else{
					$(target).parent('.selector').removeClass('parsley-error');
				}
			};

		$('.form select').change(function(){
			classSwitch($(this));
		}).focus(function(){
			classSwitch($(this));
		});

		$('.form input[type="checkbox"]').change(function(){
			outsource();
		}).focus(function(){
			outsource();
		});

	// Switch between forms
		$('.formSwitch').on('click', function(event){
			if($(this).attr('value')){
				var tar1 = $(this).attr('value');
				$('.formPanel').each(function(){
					if($(this).attr('id')!== tar1){
						$(this).hide();
					}
					else{
						$(this).show();
					}
				});	
			}
			else{
				var tar2 = $(this).attr('href');	
				event.preventDefault();	
				$('#selectForm').find('.formSwitch').each(function(){
					$(this).removeAttr('checked').parent('span').removeClass('checked');
					if($(this).is('#book') && tar2 === '#bookForm'){
						$(this).attr('checked', 'checked').parent('span').addClass('checked');
					}
					if($(this).is('#gift') && tar2 === '#giftForm'){
						$(this).attr('checked', 'checked').parent('span').addClass('checked');
					}

					function scrollToAnchor(){
					    var aTag = $('#mainForm');
					    $('html,body').animate({scrollTop: aTag.offset().top}, 300);
					}

					scrollToAnchor();
				});
				$('.formPanel').each(function(){
					if($(this).is(tar2)){
						$(this).show();
					}
					else{
						$(this).hide();
					}
				});
			}
		});
		$('.switchPane').on('click', function(event){
			var tarForm = $(this).attr('href');	
			event.preventDefault();	
			$('#log').find('.logPane').each(function(){
				if($(this).is(tarForm)){
					$(this).show();
				}
				else{
					$(this).hide();
				}
			});
		});

	// Display hours if asked to
		$('#moment').on('change', function(){
			if($(this).val() == 'horaire'){
				$('#timescale').show();
			}
			else{
				$('#timescale').hide();
			}
		});


	// Cart
		// Count total
		var cartCount = function(){
			var sum = 0;

			$('#items').find('.price').each(function() {
				var clean = $(this).html().replace('€', '');
		        sum += Number(clean);
		    });

		    $('#total span').html(sum + '€');
		};

		// Redirect to home if no products
		var toHome = function(){
			if($('#items').find('.product').length === 0){
				location.href='/';
			}
		};

		// Remove items
		$(document).on('click', '.product .remove', function(event){
			event.preventDefault();
			var product = $(this).parents('.product');
			if(confirm('Souhaitez vous retirer cet article du panier ?')){
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
		});
		cartCount();

// Sticky footer
	var stickyFooter = function(){
		var h = $('#footer').height();
		$('#wrapper').css('margin-bottom', '-' + h + 'px');
		$('#push').css('height', h);
	};

// Reveal
	$('.reveal').click(function(event){
		$(this).toggleClass('active');
		event.preventDefault();
		var tar = $(this).attr('href');
		$(tar).toggleClass('show');
	});

// Archive panel
	$(document).on('click', '.archive .open', function(event){
		event.preventDefault();
		$(this).parent('.panel').toggleClass('on');
	});

// Promo panels
	$(document).on('click', '.badge', function(event){
		event.preventDefault();
		$(this).parents('.promo').toggleClass('open');
	});
	$(document).on('click', '.description .close', function(event){
		event.preventDefault();
		$(this).parents('.promo').toggleClass('open');
	});

// Search results
	// Display products
		$(document).on('click', '.entries a', function(event){
			event.preventDefault();

			var scope = $(this).parents('.line'), 
				tar = $(this).attr('href');

			$(scope).find('.entries li').removeClass('active');

			$(scope).find('.products').each(function(){
				if($(this).is(tar) && $(this).is(':hidden')){
					$(this).addClass('active').slideDown(300);
					$('.entries li a').each(function(){
						if($(this).attr('href') == tar){
							$(this).parent().addClass('active');
						}
					});
				}
				else{
					$(this).removeClass('active').slideUp(300);
					$('.entries li a').each(function(){
						if($(this).attr('href') != tar){
							$(this).parent().removeClass('active');
						}
					});
				}
			});
		});
		$(document).on('click', '.products .close', function(event){
			event.preventDefault();
			$(this).parents('.line').find('.entries li').removeClass('active');
			$(this).parent('.products').removeClass('.active').slideUp(300);
		});

	// Mobile / Display categories
		$(document).on('click', '.unit', function(event){
			event.preventDefault();
			if(Modernizr.mq('only all and (max-width: 780px)')){
				var target = $(this).attr('href');
				$('.entries').each(function(){
					if($(this).is(target) && $(this).height() === 0){
						$(this).addClass('open');
					}
					else if($(this).is(target) && $(this).height() !== 0){
						$(this).removeClass('open');
					}
				});
			}
		});

$(window).load(function () {
	// Parsley (Form validation)
		$.listen('parsley:form:validated', function() {
			$('.form').each(function(){
				var tar = $(this).find('select.parsley-error');
				classSwitch(tar);

				// Messages outside filedset for radios and checkboxes
				outsource();
			});
		});

	// Sticky footer
		stickyFooter();
		$(window).resize(function(){
			stickyFooter();
		});

	// Place any jQuery/helper plugins in here.
		// Flexslider
			$('.flexslider').addClass('loaded');
			$('#mainSlider').flexslider({
				slideshowSpeed : 5000,
				pauseOnHover: true,
				directionNav: false,
			});
			$('#soinSlider').flexslider({
				slideshowSpeed: 8000,
				pauseOnHover: true,
				controlNav: false,
				controlsContainer: '#pushOffers',
				slideshow: false, 
			});

			// Gallery sliders

				$('#photoNav').flexslider({
				   animation: 'slide',
				   controlNav: false,
				   animationLoop: false,
				   slideshow: false,
				   itemWidth: 100,
				   itemMargin: 5,
				   asNavFor: '#photoSlider'
				 });
				$('#photoSlider').flexslider({
					slideshowSpeed: 8000,
					animation: 'slide',
					pauseOnHover: true,
					controlNav: false,
					slideshow: true,
					synch: '#photoNav',
					start: function(slider){
				      $(slider).find('.current').html(slider.currentSlide+1);
				      $(slider).find('.total').html(slider.count);
				    },
				    after: function(slider){
				      $(slider).find('.current').html(slider.currentSlide+1);
				      $(slider).find('.total').html(slider.count);
				      $('#photoNav').find('li').each(function(index, item){
				      		$(item).removeClass('flex-active-slide');
				      		if(index == slider.currentSlide){
				      			$(item).addClass('flex-active-slide');
				      		}
				      });
				    } 
				});

				$('#videoNav').flexslider({
				   animation: 'slide',
				   controlNav: false,
				   animationLoop: false,
				   slideshow: false,
				   itemWidth: 100,
				   itemMargin: 5,
				   asNavFor: '#videoSlider'
				 });
				$('#videoSlider').flexslider({
					slideshowSpeed: 8000,
					animation: 'slide',
					pauseOnHover: true,
					controlNav: false,
					slideshow: true,
					synch: '#videoNav',
					start: function(slider){
				      $(slider).find('.current').html(slider.currentSlide+1);
				      $(slider).find('.total').html(slider.count);
				    },
				    after: function(slider){
				      $(slider).find('.current').html(slider.currentSlide+1);
				      $(slider).find('.total').html(slider.count);
				      $('#videoNav').find('li').each(function(index, item){
				      		$(item).removeClass('flex-active-slide');
				      		if(index == slider.currentSlide){
				      			$(item).addClass('flex-active-slide');
				      		}
				      });
				    } 
				});

		// Pop-ins
			$('.pop').magnificPopup({
				// Delay in milliseconds before popup is removed
				removalDelay: 300,

				// Class that is added to popup wrapper and background
				// make it unique to apply your CSS animations just to this exact popup
				mainClass: 'mfp-fade',
				callbacks : {
					open : function(){
						setTimeout(function(){
							if($('.flexslider').length){
								$('.flexslider').data('flexslider').resize();
							}
							if($('.galleryNav').length){
								$('.galleryNav').data('flexslider').resize();	
							}
						},300);
					}
				}
			});

			$('.closePop').click(function(){
				event.preventDefault();
				$.magnificPopup.close();
			});

	// Form behaviors
		// Password retrival
			$('#passwordFom').parsley().subscribe('parsley:form:validate', function(formInstance){
				if(formInstance.isValid()){
					event.preventDefault();
					// Do the ajax dance here
					$('#passwordFom').find('.feedback').html('Un nouveau mot de passe vous a été envoyé à cette adresse.');
				}
			});

		// Newsletter message
			$('#newsletter').parsley().subscribe('parsley:form:validate', function(formInstance){
				if(formInstance.isValid()){
					event.preventDefault();
					// Do the ajax dance here
					$('#newsletter').find('.feedback').html('Vous êtes désormais inscrit à la newsletter.');
				}
			});

		// Add to cart pop-in
			if($('#giftAmount').length){
				$('#giftAmount').parsley().subscribe('parsley:form:validate', function(formInstance){
					if(formInstance.isValid()){
						event.preventDefault();
						// Do the ajax dance here
						$.magnificPopup.open({
							items: {
								src: '#addCart'
							},
							type:'inline', 
							removalDelay: 300,
							// Class that is added to popup wrapper and background
							// make it unique to apply your CSS animations just to this exact popup
							mainClass: 'mfp-fade'
						});
					}
				});
			}

			if($('#giftItem').length){
				$('#giftItem').parsley().subscribe('parsley:form:validate', function(formInstance){
					if(formInstance.isValid()){
						event.preventDefault();
						// Do the ajax dance here
						$.magnificPopup.open({
							items: {
								src: '#addCart'
							},
							type:'inline', 
							removalDelay: 300,
							// Class that is added to popup wrapper and background
							// make it unique to apply your CSS animations just to this exact popup
							mainClass: 'mfp-fade'
						});
					}
				});
			}

			if($('#bookForm').length){
				$('#bookForm').parsley().subscribe('parsley:form:validate', function(formInstance){
					if(formInstance.isValid()){
						var shell = $('#bookForm'), 
							date = $(shell).find('input[name="date"]'),
							moment = $(shell).find('select[name="moment"]'),
							soin = $(shell).find('select[name="soin"]'),
							hour = $(shell).find('select[name="horaire"]');

						formInstance.submitEvent.preventDefault();

						if(date.val()){
							if(moment.val()){
								if(hour.val()){
									if(soin.val()){
										window.location = 'book-soin-precise.html#results';
									}
									else{
										window.location = 'book-precise.html#results';	
									}
								}
								else if(soin.val()){
									window.location = 'book-soin-precise.html#results';
								}
								else{
									window.location = 'book-period.html#results';
								}

							}
							else if(soin.val()){
								window.location = 'book-soin-date.html#results';
							}
							else{
								window.location = 'book-date.html#results';
							}
						}
						else if(moment.val()){
							if(hour.val()){
								if(soin.val()){
									window.location = 'book-soin-precise.html#results';
								}
								else{
									window.location = 'book-precise.html#results';	
								}
							}
							else if(soin.val()){
								window.location = 'book-soin-precise.html#results';
							}
							else{
								window.location = 'book-period.html#results';
							}
						}
						else if(soin.val()){
							window.location = 'book-soin.html#results';
						}
						else{
							window.location = 'book-date.html#results';
						}
						
					}
				});
			}

	// Teleport (responsive helper)
		var teleport = function(){
			$(".teleport").each(function(){
				var par = $(this).parent('.scope');
				if(Modernizr.mq('only all and (max-width: 780px)')){
					var shell = $(this).clone();
					$(this).remove();
					par.prepend(shell);
				}
				else{
					var shell = $(this).clone();
					$(this).remove();
					par.append(shell);
				}
			});
		};
		teleport();
		$(window).resize(function(){
			teleport();
		})
});