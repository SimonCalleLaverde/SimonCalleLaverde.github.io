var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};
jQuery(document).ready(function(a){var b=function(){if(768<=document.body.clientWidth){var c={view:document.querySelector("#rolly"),preload:!0,"native":!0,change:function(d){document.documentElement.style.backgroundColor="hsl("+d.current/d.bounding*360+", 100%, 95%)"},scenes:{rotateZ:{transform:function(d){var e=d.globalState,f=e.current-e.previous;d.sceneState.cache.context.style[e.transformPrefix]="translate3d(0, "+d.transform+"px, 0) rotateZ("+f/40+"deg) skew("+f/50+"deg)"}}}};window.rolly(c).init()}};
a(window).resize(function(){b()});b()});jQuery(document).ready(function(a){var b=function(){var c=document.body.clientWidth;768>c?(a(".rolly-on-off").removeAttr("id"),a("body").addClass("theme-dark-mobile-wide")):768<=c&&(a(".rolly-on-off").attr("id","rolly"),a("body").removeClass("theme-dark-mobile-wide"))};a(window).resize(function(){b()});b()});"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1);
$(function(){new Rellax(".rellax",{center:!0})});$(document).ready(function(){window.onload=function(){lax.setup({breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200}});var a=function(){lax.update(window.scrollY);window.requestAnimationFrame(a)};window.requestAnimationFrame(a)}});$(function(){$(".column-div").columnize({columns:2})});$(document).ready(function(){$("html, body").scrollTop(0);$(window).on("load",function(){setTimeout(function(){$("html, body").scrollTop(0)},0)})});
$(function(){var a=$("aside .show-it, aside .hide-it"),b=$(".logo");$(window).scroll(function(){var c=$(window).scrollTop();30<=c?a.addClass("hide-it").removeClass("show-it"):30>=c&&a.removeClass("hide-it").addClass("show-it");30<=c?b.addClass("logo-smaller"):30>=c&&b.removeClass("logo-smaller")})});$(function(){var a=$("body");$(window).scroll(function(){var b=$(document).height()-$(window).height()-$(window).scrollTop();300<=b?a.removeClass("is-bottom").addClass("is-top"):300>=b&&a.removeClass("is-top").addClass("is-bottom")})});
$(function(){$(".smoothScroll").click(function(a){a.preventDefault();a=$(this.hash).offset()?$(this.hash).offset().top:0;$("html, body").animate({scrollTop:a-0},1200)})});$(function(){$(".burger-mobile").on("click",function(){$("html, body").toggleClass("menu-opened");$(".burger-mobile").toggleClass("opened");$(".menu-mobile").toggleClass("opened");$(".logo").toggleClass("logo-light")})});function delay(a){setTimeout(function(){window.location=a},1E3)}
$(function(){$(".link-page-load").on("click",function(){$("body").addClass("load-out")})});
$(function(){$("body");var a=$(".header-image, .loader-area"),b=$("img, .bg-image");imagesLoaded(b,{background:!0},function(){document.body.classList.remove("loading");document.body.classList.add("imagesloaded");document.body.classList.add("rendering");document.body.classList.add("rendering-internal");setTimeout(function(){return document.body.classList.remove("rendering")},5500);setTimeout(function(){return document.body.classList.remove("rendering-internal")},3E3);setTimeout(function(){return a.addClass("d-none")},
6E3)})});