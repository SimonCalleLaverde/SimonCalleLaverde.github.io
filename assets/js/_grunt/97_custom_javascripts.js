var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,c){a.raw=c;return a};
jQuery(document).ready(function(a){var c=function(){if(768<=document.body.clientWidth){var d={view:document.querySelector("#rolly"),preload:!0,"native":!0,change:function(b){document.documentElement.style.backgroundColor="hsl("+b.current/b.bounding*360+", 100%, 95%)"},scenes:{rotateZ:{transform:function(b){var e=b.globalState,f=e.current-e.previous;b.sceneState.cache.context.style[e.transformPrefix]="translate3d(0, "+b.transform+"px, 0) rotateZ("+f/40+"deg) skew("+f/50+"deg)"}}}};window.rolly(d).init()}};
a(window).resize(function(){c()});c()});jQuery(document).ready(function(a){var c=function(){var d=document.body.clientWidth;768>d?(a(".rolly-on-off").removeAttr("id"),a("body").addClass("theme-dark-mobile-wide")):768<=d&&(a(".rolly-on-off").attr("id","rolly"),a("body").removeClass("theme-dark-mobile-wide"))};a(window).resize(function(){c()});c()});"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1);
$(function(){new Rellax(".rellax",{center:!0})});$(document).ready(function(){window.onload=function(){lax.setup({breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200}});var a=function(){lax.update(window.scrollY);window.requestAnimationFrame(a)};window.requestAnimationFrame(a)}});$(function(){$(".column-div").columnize({columns:2})});$(document).ready(function(){$("html, body").scrollTop(0);$(window).on("load",function(){setTimeout(function(){$("html, body").scrollTop(0)},0)})});
$(function(){var a=$("aside .show-it, aside .hide-it"),c=$(".logo"),d=$(".trail-images-wrap");$(window).scroll(function(){var b=$(window).scrollTop();30<=b?a.addClass("hide-it").removeClass("show-it"):30>=b&&a.removeClass("hide-it").addClass("show-it");30<=b?c.addClass("logo-smaller"):30>=b&&c.removeClass("logo-smaller");30<=b?d.addClass("trail-fade-out"):30>=b&&d.removeClass("trail-fade-out")})});
$(function(){var a=$("body");$(window).scroll(function(){var c=$(document).height()-$(window).height()-$(window).scrollTop();300<=c?a.removeClass("is-bottom").addClass("is-top"):300>=c&&a.removeClass("is-top").addClass("is-bottom")})});$(function(){$(".smoothScroll").click(function(a){a.preventDefault();a=$(this.hash).offset()?$(this.hash).offset().top:0;$("html, body").animate({scrollTop:a-0},1200)})});
$(function(){$(".burger-mobile").on("click",function(){$("html, body").toggleClass("menu-opened");$(".burger-mobile").toggleClass("opened");$(".menu-mobile").toggleClass("opened");$(".logo").toggleClass("logo-light")})});function delay(a){setTimeout(function(){window.location=a},1E3)}$(function(){$(".link-page-load").on("click",function(){$("body").addClass("load-out")})});
$("#header-hire-button").mouseenter(function(a){TweenMax.to(this,.5,{transformOrigin:"0 0",scale:1});TweenMax.to(".hire-button-circle",.5,{scale:1.1})});$("#header-hire-button").mouseleave(function(a){TweenMax.to(this,.5,{scale:1});TweenMax.to(".hire-button-circle, .hire-button-text",.5,{scale:1,x:0,y:0})});$("#header-hire-button").mousemove(function(a){callParallax(a)});function callParallax(a){parallaxIt(a,".hire-button-circle",60);parallaxIt(a,".hire-button-text",40)}
function parallaxIt(a,c,d){var b=$("#header-hire-button")[0].getBoundingClientRect();TweenMax.to(c,.5,{x:(a.pageX-b.left-b.width/2)/b.width*d,y:(a.pageY-b.top-b.height/2-(window.pageYOffset||document.documentElement.scrollTop))/b.width*d,ease:Power2.easeOut})}
$(function(){$("body");var a=$(".header-image, .loader-area"),c=$("img, .bg-image");imagesLoaded(c,{background:!0},function(){document.body.classList.remove("loading");document.body.classList.add("imagesloaded");document.body.classList.add("rendering");document.body.classList.add("rendering-internal");setTimeout(function(){return document.body.classList.remove("rendering")},5500);setTimeout(function(){return document.body.classList.remove("rendering-internal")},3E3);setTimeout(function(){return a.addClass("d-none")},
6E3)})});