var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};
$(function(){var a={view:document.querySelector("#rolly"),preload:!0,"native":!0,change:function(b){document.documentElement.style.backgroundColor="hsl("+b.current/b.bounding*360+", 100%, 95%)"},scenes:{rotateZ:{transform:function(b){var c=b.globalState,d=c.current-c.previous;b.sceneState.cache.context.style[c.transformPrefix]="translate3d(0, "+b.transform+"px, 0) rotateZ("+d/32+"deg) skew("+d/40+"deg)"}}}};window.rolly(a).init()});$(function(){luxy.init({wrapper:"#luxy",targets:".luxy-el",wrapperSpeed:.1})});
"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1);$(function(){new Rellax(".rellax",{center:!0})});$(document).ready(function(){window.onload=function(){lax.setup({breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200}});var a=function(){lax.update(window.scrollY);window.requestAnimationFrame(a)};window.requestAnimationFrame(a)}});$(function(){$(".column-div").columnize({columns:2})});
$(document).ready(function(){$("html, body").scrollTop(0);$(window).on("load",function(){setTimeout(function(){$("html, body").scrollTop(0)},0)})});$(function(){var a=$("aside .show-it, aside .hide-it"),b=$(".logo");$(window).scroll(function(){var c=$(window).scrollTop();30<=c?a.addClass("hide-it").removeClass("show-it"):30>=c&&a.removeClass("hide-it").addClass("show-it");30<=c?b.addClass("logo-smaller"):30>=c&&b.removeClass("logo-smaller")})});
$(function(){var a=$("body");$(window).scroll(function(){var b=$(document).height()-$(window).height()-$(window).scrollTop();435<=b?a.removeClass("is-bottom").addClass("is-top"):435>=b&&a.removeClass("is-top").addClass("is-bottom")})});$(function(){$(".smoothScroll").click(function(a){a.preventDefault();a=$(this.hash).offset()?$(this.hash).offset().top:10;$("html, body").animate({scrollTop:a-0},1200)})});
$(function(){$(".burger-mobile").on("click",function(){$("html, body").toggleClass("menu-opened");$(".menu-mobile").toggleClass("opened");$(".burger-mobile").toggleClass("opened");$(".logo a").toggleClass("logo-light")})});
$(function(){$("body");var a=$(".header-image"),b=$("img, .bg-image");imagesLoaded(b,{background:!0},function(){setTimeout(function(){return document.body.classList.remove("rendering")},4700);setTimeout(function(){return document.body.classList.remove("loading")},2E3);setTimeout(function(){return document.body.classList.add("imagesloaded")},2E3);setTimeout(function(){return a.removeClass("d-block").addClass("d-none")},4600)})});var $cursor=$(".cursor");
function moveCircle(a){TweenLite.to($cursor,.2,{css:{x:a.clientX,y:a.clientY}})}$(window).on("mousemove",moveCircle);
$(document).mousemove(function(a){a=$(".cursor");var b=$(event.target);a.css("display","block");var c=b.is("header-target-will-go-here"),d=b.is(".project-thumbnail");b=b.is("footer > a.container");var e=a.hasClass("hoveredHeader"),f=a.hasClass("hoveredProject"),g=a.hasClass("hoveredFooter");c&&!e?a.addClass("hoveredHeader"):!c&&e&&a.removeClass("hoveredHeader");d&&!f?a.addClass("hoveredProject"):!d&&f&&a.removeClass("hoveredProject");b&&!g?a.addClass("hoveredFooter"):!b&&g&&a.removeClass("hoveredFooter")});
$(document).mouseleave(function(a){$(".cursor").hide()});$(document).mouseenter(function(a){$(".cursor").show()});