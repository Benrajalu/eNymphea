window.console&&console.log||!function(){for(var e=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],i=o.length,s=window.console={};i--;)s[o[i]]=e}();var topBar=$("#topBar"),triggers=topBar.find(".trigger");triggers.click(function(e){e.preventDefault();var o=$(this).siblings("ul");if("user"==$(this).attr("id"))var i="490px";else var i="200px";var s=new TimelineLite;s.pause(),s.to(o,.5,{display:"block",maxHeight:i,ease:Sine.easeInOut});var a=new TimelineLite;a.pause(),a.to(o,.5,{maxHeight:"0px",ease:Sine.easeInOut}),a.to(o,0,{display:"none",ease:Sine.easeInOut},"=-0.1"),$(this).hasClass("expended")?(a.play(),$(this).removeClass("expended")):(s.play(),$(this).addClass("expended"))});var validateFront=function(){!0===$("#contactForm").parsley().isValid()?$("#feedback").addClass("hidden").html(""):$("#feedback").removeClass("hidden").html("Tous les champs sont obligatoires, et votre adresse email doit \xeatre valide...")};$(window).load(function(){$(function(){$(window).scroll(function(){$(this).scrollTop()>200?($("#scrollTop").addClass("show"),$("#scrollTop").removeClass("hide")):($("#scrollTop").removeClass("show"),$("#scrollTop").addClass("hide"))}),$("#scrollTop").click(function(){return $("body,html").animate({scrollTop:0},600),!1})})});