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

// Parsley 
	var validateFront = function () {
	  if (true === $('#contactForm').parsley().isValid()) {
	    $('#feedback').addClass('hidden').html("");
	  } else {
	    $('#feedback').removeClass('hidden').html("Tous les champs sont obligatoires, et votre adresse email doit être valide...");
	  }
	};

	/* var sendMessage = function(){
		if (true === $('#contactForm').parsley().isValid()) {
			event.preventDefault();
			$("#contactForm").find("#submit").attr("value", "Envoi en cours...").attr("disabled", "disabled");
			var sendTo = $("#contactForm").attr("action");
			$.ajax({
			  type: "POST",
			  url: sendTo,
			  data: $("#contactForm").serialize(),
			  success: function() {
			    $('#feedback').addClass("success").html("Message reçu");
			    $("#contactForm").find("#submit").attr("value", "Nouvel envoi").removeAttr("disabled");
			  }, 
			  error: function() {
			  	$('#feedback').removeClass("success").html("Oups, soucis de script. Merci de me joindre via email !");
			  }
			});
			return false;
		} else {
		  $('#feedback').removeClass('success').html("Tous les champs sont obligatoires, et votre adresse email doit être valide...");
		}
	} */


$(window).load(function () {
	// Parsley
		/* $.listen('parsley:field:validate', function () {
			validateFront();
		});

		$.listen('parsley:form:validated', function() {
			sendMessage();
		});

		$('#contactForm input[type="submit"]').on('click', function () {
		  $('#contactForm').parsley().validate();
		  validateFront();
		}); */


	// Scroll top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('#scrollTop').addClass("show");
					$('#scrollTop').removeClass("hide");
				} else {
					$('#scrollTop').removeClass("show");
					$('#scrollTop').addClass("hide");
				}
			});

			// scroll body to 0px on click
			$('#scrollTop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 600);
				return false;
			});
		});

	// Place any jQuery/helper plugins in here.
	
});