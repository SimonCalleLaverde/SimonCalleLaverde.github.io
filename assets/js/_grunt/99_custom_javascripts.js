$(function(){luxy.init()});$(function(){$(".column-div").columnize({columns:2})});$(document).ready(function(){$("html, body").scrollTop(0);$(window).on("load",function(){setTimeout(function(){$("html, body").scrollTop(0)},0)})});$(function(){var a=$("body");$(window).scroll(function(){var b=$(document).height()-$(window).height()-$(window).scrollTop();550<=b?a.removeClass("is-bottom").addClass("is-top"):550>=b&&a.removeClass("is-top").addClass("is-bottom")})});
$(function(){$(".smoothScroll").click(function(a){a.preventDefault();a=$(this.hash).offset()?$(this.hash).offset().top:10;$("html, body").animate({scrollTop:a-0},1200)})});$(function(){$(".switch-theme-colour").on("click",function(a){$("body").toggleClass("black white");$(".text-element").toggleClass("d-none d-inline-block");a.preventDefault()})});
$(function(){var a=$(".change-features-interior, .copyright-interior, .logo"),b=$(".logo-cover");$(window).scroll(function(){var c=$(window).scrollTop();250<=c?a.addClass("hide-it").removeClass("show-it"):250>=c&&a.removeClass("hide-it").addClass("show-it");250<=c?b.addClass("show-it").removeClass("hide-it"):250>=c&&b.removeClass("show-it").addClass("hide-it")})});
$(document).ready(function(){$(".carousel-my-work").slick({dots:!1,infinite:!1,speed:500,slidesToShow:1,draggable:!0,swipeToSlide:!0,arrows:!0,centerMode:!0,variableWidth:!1,adaptiveHeight:!1,pauseOnHover:!1,lazyLoad:"ondemand",asNavFor:".as-nav-for-my-work"});$(".as-nav-for-my-work").slick({dots:!1,infinite:!1,speed:500,slidesToShow:8,draggable:!0,swipe:!0,swipeToSlide:!0,arrows:!1,focusOnSelect:!0,lazyLoad:"ondemand",asNavFor:".carousel-my-work"});$(".carousel-my-skills").slick({dots:!1,infinite:!0,
slidesToShow:1,swipeToSlide:!1,draggable:!1,arrows:!1,variableWidth:!1,adaptiveHeight:!1,autoplay:!0,autoplaySpeed:2E3,pauseOnHover:!1,pauseOnFocus:!1,lazyLoad:"ondemand",fade:!0})});$(function(){$(".show-message-button").on("click",function(){var a=$(".show-message").removeClass("hide-it");window.setTimeout(function(){a.addClass("hide-it")},3E3)})});var $cursor=$(".cursor");function moveCircle(a){TweenLite.to($cursor,.3,{css:{x:a.clientX,y:a.clientY}})}$(window).on("mousemove",moveCircle);
$(document).mousemove(function(a){a=$(".cursor");var b=$(event.target);a.css("display","block");var c=b.is("a.link, i.fa.link, a.link div, a.link span"),d=b.is(".project-thumbnail"),e=b.is(".modal, .modal div, .modal p, .modal h1, .modal h2, .modal h3, .modal h4, .modal h5, .modal h6, .modal img, .modal a, .modal button, .modal span"),f=b.is(".project-as-nav-for");b=b.is("footer .container");var g=a.hasClass("hoveredLink"),h=a.hasClass("hoveredProject"),k=a.hasClass("hoveredModal"),l=a.hasClass("hoveredDragSides"),
m=a.hasClass("hoveredFooter");c&&!g?a.addClass("hoveredLink"):!c&&g&&a.removeClass("hoveredLink");d&&!h?a.addClass("hoveredProject"):!d&&h&&a.removeClass("hoveredProject");e&&!k?a.addClass("hoveredModal"):!e&&k&&a.removeClass("hoveredModal");f&&!l?a.addClass("hoveredDragSides"):!f&&l&&a.removeClass("hoveredDragSides");b&&!m?a.addClass("hoveredFooter"):!b&&m&&a.removeClass("hoveredFooter")});$(document).mouseleave(function(a){$(".cursor").hide()});$(document).mouseenter(function(a){$(".cursor").show()});
setTimeout(function(){return document.body.classList.remove("home-rendering")},6800);setTimeout(function(){return document.body.classList.remove("rendering")},5E3);setTimeout(function(){return document.body.classList.remove("first-load")},1E3);imagesLoaded("img, .bg-image",{background:!0},function(){setTimeout(function(){return document.body.classList.remove("loading")},1E3);setTimeout(function(){return document.body.classList.add("imagesloaded")},1E3)});
var tlMwT=new TimelineMax,tlAnF=new TimelineMax,tlCd=new TimelineMax,tlSc=new TimelineMax,tlAp=new TimelineMax,tlSh=new TimelineMax,tlSl1=new TimelineMax,tlSl2=new TimelineMax,tlSl3=new TimelineMax,controller=new ScrollMagic.Controller;tlMwT.from(".gsap-my-work-title",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});tlAnF.from(".gsap-as-nav-for",4,{x:500,opacity:0,ease:Power2.easeOut});
tlCd.from(".gsap-content-development",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});tlSc.from(".gsap-subcontent",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});tlAp.from(".gsap-all-projects",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});tlSh.from(".gsap-skills-headline",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});
tlSl1.from(".gsap-skills-list-1",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});tlSl2.from(".gsap-skills-list-2",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});tlSl3.from(".gsap-skills-list-3",2,{y:250,opacity:0,transformStyle:"preserve-3d",skewY:15,ease:Power3.easeOut});
var sceneMwT=(new ScrollMagic.Scene({triggerElement:".magic-trigger-my-work-title"})).setTween(tlMwT).addTo(controller),sceneAnF=(new ScrollMagic.Scene({triggerElement:".magic-trigger-as-nav-for"})).setTween(tlAnF).addTo(controller),sceneCd=(new ScrollMagic.Scene({triggerElement:".magic-trigger-content-development"})).setTween(tlCd).addTo(controller),sceneSc=(new ScrollMagic.Scene({triggerElement:".magic-trigger-subcontent"})).setTween(tlSc).addTo(controller),sceneAp=(new ScrollMagic.Scene({triggerElement:".magic-trigger-all-projects"})).setTween(tlAp).addTo(controller),
scenetlSh=(new ScrollMagic.Scene({triggerElement:"#my_skills_section"})).setTween(tlSh).addTo(controller),scenetlSl1=(new ScrollMagic.Scene({triggerElement:".magic-trigger-skills-list-1"})).setTween(tlSl1).addTo(controller),scenetlSl2=(new ScrollMagic.Scene({triggerElement:".magic-trigger-skills-list-2"})).setTween(tlSl2).addTo(controller),scenetlSl3=(new ScrollMagic.Scene({triggerElement:".magic-trigger-skills-list-3"})).setTween(tlSl3).addTo(controller);
$(".burger-menu").mouseleave(function(a){TweenMax.to(this,.3,{scale:1});TweenMax.to(".burger-circle, .burger-center",.3,{scale:1,x:0,y:0})});$(".burger-menu").mouseenter(function(a){TweenMax.to(this,.3,{transformOrigin:"0 0",scale:1});TweenMax.to(".burger-circle",.3,{scale:1.3})});$(".burger-menu").mousemove(function(a){callParallax(a)});function callParallax(a){parallaxIt(a,".burger-circle",60);parallaxIt(a,".burger-center",40)}
function parallaxIt(a,b,c){var d=$(".burger-menu")[0].getBoundingClientRect();TweenMax.to(b,.3,{x:(a.pageX-d.left-d.width/2)/d.width*c,y:(a.pageY-d.top-d.height/2-(window.pageYOffset||document.documentElement.scrollTop))/d.width*c,ease:Power2.easeOut})};