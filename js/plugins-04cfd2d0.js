window.console&&console.log||!function(){for(var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],i=t.length,o=window.console={};i--;)o[t[i]]=e}(),$(".datepicker").datepicker({startDate:"today",todayBtn:"linked",language:"fr",daysOfWeekDisabled:"0",todayHighlight:!0,autoclose:!0}),$("select, input[type='checkbox'], input[type='radio']").uniform();var forms=$(".form"),selects=forms.find(".selector"),outsource=function(){$(".selector").each(function(){var e=$(this).find(".parsley-errors-list");e.remove(),$(this).after(e),e.addClass("outsource")}),$("fieldset").each(function(){var e=$(this).find(".parsley-errors-list");e.remove(),$(this).after(e),e.addClass("outsource")})},classSwitch=function(e){var t=$(e).val();""==t&&"undefined"!=typeof e.attr("data-parsley-required")&&e.attr("data-parsley-required")!==!1?$(e).parent(".selector").addClass("parsley-error"):$(e).parent(".selector").removeClass("parsley-error")};$(".form select").change(function(){classSwitch($(this))}).focus(function(){classSwitch($(this))}),$(".form input[type='checkbox']").change(function(){outsource()}).focus(function(){outsource()}),$(".formSwitch").on("click",function(e){$(this).attr("value")?tar=$(this).attr("value"):(e.preventDefault(),tar=$(this).attr("href")),$(".formPanel").each(function(){$(this).attr("id")!=tar?$(this).hide():$(this).show()})}),$("#moment").on("change",function(){"horaire"==$(this).val()?$("#timescale").show():$("#timescale").hide()});var cartCount=function(){var e=0;$("#items").find(".price").each(function(){var t=$(this).html().replace("\u20ac","");e+=Number(t)}),$("#total span").html(e+"\u20ac")},toHome=function(){0==$("#items").find(".product").length&&(location.href="/")};$(document).on("click",".product .remove",function(e){e.preventDefault();var t=$(this).parents(".product");return confirm("Souhaitez vous retirer cet article du panier ?")?($(t).fadeOut(300),void setTimeout(function(){$(t).remove(),cartCount(),toHome()},300)):!1}),cartCount();var stickyFooter=function(){var e=$("#footer").height();$("#wrapper").css("margin-bottom","-"+e+"px"),$("#push").css("height",e)};$(".reveal").click(function(e){$(this).toggleClass("active"),e.preventDefault();var t=$(this).attr("href");$(t).toggleClass("show")}),$(document).on("click",".archive .open",function(e){e.preventDefault(),$(this).parent(".panel").toggleClass("on")}),$(document).on("click",".badge",function(e){e.preventDefault(),$(this).parents(".promo").toggleClass("open")}),$(document).on("click",".description .close",function(e){e.preventDefault(),$(this).parents(".promo").toggleClass("open")}),$(document).on("click",".entries a",function(e){e.preventDefault();{var t=$(this).parents(".line"),i=$(this).attr("href");$(this).parent()}$(t).find(".entries li").removeClass("active"),$(t).find(".products").each(function(){$(this).is(i)&&$(this).is(":hidden")?($(this).addClass("active").slideDown(300),$(".entries li a").each(function(){$(this).attr("href")==i&&$(this).parent().addClass("active")})):($(this).removeClass("active").slideUp(300),$(".entries li a").each(function(){$(this).attr("href")!=i&&$(this).parent().removeClass("active")}))})}),$(document).on("click",".products .close",function(e){e.preventDefault(),$(this).parents(".line").find(".entries li").removeClass("active"),$(this).parent(".products").removeClass(".active").slideUp(300)}),$(document).on("click",".unit",function(e){if(e.preventDefault(),Modernizr.mq("only all and (max-width: 780px)")){var t=$(this).attr("href");$(".entries").each(function(){$(this).is(t)&&0==$(this).height()?$(this).addClass("open"):$(this).is(t)&&0!=$(this).height()&&$(this).removeClass("open")})}}),$(window).load(function(){$.listen("parsley:form:validated",function(){$(".form").each(function(){tar=$(this).find("select.parsley-error"),classSwitch(tar),outsource()})}),stickyFooter(),$(window).resize(function(){stickyFooter()}),$("#mainSlider").flexslider({slideshowSpeed:5e3,pauseOnHover:!0,directionNav:!1}),$("#soinSlider").flexslider({slideshowSpeed:8e3,pauseOnHover:!0,controlNav:!1,controlsContainer:"#pushOffers",slideshow:!1}),$("#photoNav").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:100,itemMargin:5,asNavFor:"#photoSlider"}),$("#photoSlider").flexslider({slideshowSpeed:8e3,animation:"slide",pauseOnHover:!0,controlNav:!1,slideshow:!0,synch:"#photoNav",start:function(e){$(e).find(".current").html(e.currentSlide+1),$(e).find(".total").html(e.count)},after:function(e){$(e).find(".current").html(e.currentSlide+1),$(e).find(".total").html(e.count),$("#photoNav").find("li").each(function(t,i){$(i).removeClass("flex-active-slide"),t==e.currentSlide&&$(i).addClass("flex-active-slide")})}}),$("#videoNav").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:100,itemMargin:5,asNavFor:"#videoSlider"}),$("#videoSlider").flexslider({slideshowSpeed:8e3,animation:"slide",pauseOnHover:!0,controlNav:!1,slideshow:!0,synch:"#videoNav",start:function(e){$(e).find(".current").html(e.currentSlide+1),$(e).find(".total").html(e.count)},after:function(e){$(e).find(".current").html(e.currentSlide+1),$(e).find(".total").html(e.count),$("#videoNav").find("li").each(function(t,i){$(i).removeClass("flex-active-slide"),t==e.currentSlide&&$(i).addClass("flex-active-slide")})}}),$(".pop").magnificPopup({callbacks:{open:function(){setTimeout(function(){$(".flexslider").length&&$(".flexslider").data("flexslider").resize(),$(".galleryNav").length&&$(".galleryNav").data("flexslider").resize()},300)}}})});