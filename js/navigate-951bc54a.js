var topBar=$("#topBar"),triggers=topBar.find(".trigger"),closePanels=function(){var e=$(".layer"),a=new TimelineLite;a.pause(),a.to(e,.5,{maxHeight:"0px",ease:Sine.easeInOut}),a.to(e,0,{display:"none",ease:Sine.easeInOut},"=-0.1"),triggers.removeClass("expended"),a.play()},bodyClose=function(){$("body").bind("click",function(e){($("#log").height()>50||$("#languages").height()>50||$("#cart").height()>20)&&0==$(e.target).closest(".layer").length&&0==$(e.target).closest(".trigger").length&&closePanels()})};bodyClose(),triggers.click(function(e){e.preventDefault();var a=$(this).siblings("ul");if("user"==$(this).attr("id"))var s="700px";else var s="200px";var t=new TimelineLite;t.pause(),t.to(a,.5,{display:"block",maxHeight:s,ease:Sine.easeInOut});var i=new TimelineLite;i.pause(),i.to(a,.5,{maxHeight:"0px",ease:Sine.easeInOut}),i.to(a,0,{display:"none",ease:Sine.easeInOut},"=-0.1");var n=$(this).parent("li").siblings().find(".trigger"),l=new TimelineLite;l.pause(),l.to(n.siblings("ul"),.5,{maxHeight:"0px",ease:Sine.easeInOut}),l.to(n.siblings("ul"),0,{display:"none",ease:Sine.easeInOut},"=-0.1"),n.removeClass("expended"),l.play(),$(this).hasClass("expended")?(i.play(),$(this).removeClass("expended")):(t.play(),$(this).addClass("expended"))}),$(".mobileToggle").click(function(e){e.preventDefault(),$(".navigate").toggleClass("mobileOpen"),closePanels()});var expand=$("#mainNav").find(".flyout");expand.click(function(e){e.preventDefault(),$(this).toggleClass("active"),$("#mainNav").toggleClass("expended"),$("#contents").toggleClass("push")}),$("#back").click(function(e){e.preventDefault(),$("#mainNav").removeClass("expended"),expand.removeClass("active")}),$("#toggle").click(function(e){e.preventDefault(),$(this).toggleClass("reverse"),$("#categories").toggleClass("open")});