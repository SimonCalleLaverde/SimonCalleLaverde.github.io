var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};
$(function(){var a={view:document.querySelector("#rolly"),preload:!0,"native":!0,change:function(a){document.documentElement.style.backgroundColor="hsl("+a.current/a.bounding*360+", 100%, 95%)"},scenes:{rotateZ:{transform:function(a){var b=a.globalState,d=b.current-b.previous;a.sceneState.cache.context.style[b.transformPrefix]="translate3d(0, "+a.transform+"px, 0) rotateZ("+d/16+"deg) skew("+d/20+"deg)"}}}};window.rolly(a).init()});$(function(){luxy.init({wrapper:"#luxy",targets:".luxy-el",wrapperSpeed:.1})});
"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1);$(function(){new Rellax(".rellax")});$(document).ready(function(){window.onload=function(){lax.setup({breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200}});var a=function(){lax.update(window.scrollY);window.requestAnimationFrame(a)};window.requestAnimationFrame(a)}});$(function(){$(".column-div").columnize({columns:2})});
$(document).ready(function(){$("html, body").scrollTop(0);$(window).on("load",function(){setTimeout(function(){$("html, body").scrollTop(0)},0)})});$(function(){var a=$(".change-features-interior, .copyright-interior, .logo, .mouse-svg"),b=$(".logo-cover");$(window).scroll(function(){var c=$(window).scrollTop();100<=c?a.addClass("hide-it").removeClass("show-it"):100>=c&&a.removeClass("hide-it").addClass("show-it");100<=c?b.addClass("show-it").removeClass("hide-it"):100>=c&&b.removeClass("show-it").addClass("hide-it")})});
$(function(){$(".smoothScroll").click(function(a){a.preventDefault();a=$(this.hash).offset()?$(this.hash).offset().top:10;$("html, body").animate({scrollTop:a-0},1200)})});$(function(){$(".burger-mobile").on("click",function(){$("html, body").toggleClass("menu-opened");$(".menu-mobile").toggleClass("opened");$(".burger-mobile").toggleClass("opened");$(".logo").toggleClass("logo-light")})});
$(function(){$("body");var a=$(".header-image"),b=$("img, .bg-image");imagesLoaded(b,{background:!0},function(){setTimeout(function(){return document.body.classList.remove("rendering")},4700);setTimeout(function(){return document.body.classList.remove("loading")},2E3);setTimeout(function(){return document.body.classList.add("imagesloaded")},2E3);setTimeout(function(){return a.removeClass("d-block").addClass("d-none")},4600)})});var $cursor=$(".cursor");
function moveCircle(a){TweenLite.to($cursor,.2,{css:{x:a.clientX,y:a.clientY}})}$(window).on("mousemove",moveCircle);
$(document).mousemove(function(a){a=$(".cursor");var b=$(event.target);a.css("display","block");var c=b.is("a.link, button.link, input.link, i.fa.link, a.link div, a.link span, a .link"),d=b.is(".recent-project-thumbnail"),e=b.is(".project-thumbnail");b=b.is("footer > a.container");var f=a.hasClass("hoveredLink"),g=a.hasClass("hoveredRecent"),h=a.hasClass("hoveredProject"),k=a.hasClass("hoveredFooter");c&&!f?a.addClass("hoveredLink"):!c&&f&&a.removeClass("hoveredLink");d&&!g?a.addClass("hoveredRecent"):
!d&&g&&a.removeClass("hoveredRecent");e&&!h?a.addClass("hoveredProject"):!e&&h&&a.removeClass("hoveredProject");b&&!k?a.addClass("hoveredFooter"):!b&&k&&a.removeClass("hoveredFooter")});$(document).mouseleave(function(a){$(".cursor").hide()});$(document).mouseenter(function(a){$(".cursor").show()});