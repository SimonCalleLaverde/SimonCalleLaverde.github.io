//---------------------------------PLUGINS INIT---------------------------------//

// Init Luxy
$(function() {
  luxy.init();
});

// Init Columnizer
$(function() {
  $('.column-div').columnize({ columns:2 });//#column_div
});

//---------------------------------CUSTOM JAVASCRIPTS---------------------------------//

// Force Site To Load At The Top
// First scrollTop scrolls early, after document ready | Second scrollTop scrolls late, after load event, and after timeout
$(document).ready(function() {
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
      $('html, body').scrollTop(0);
    }, 0);
  });
});

// Change Some Class After Scrolling Some Distance To Bottom | As Per, But Modified Now (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
$(function() {
  //caches a jQuery object containing the body element
  var body = $("body");
  $(window).scroll(function() {
    var scrollFromBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollFromBottom >= 550) {
      body.removeClass("is-bottom").addClass("is-top");
    } else if (scrollFromBottom <= 550) {
      body.removeClass("is-top").addClass("is-bottom");
    }
  });
});

// Smooth Scroll Script
$(function() {
  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top: 10;//0
    var customoffset = 0;//49
    $('html, body').animate({scrollTop:target_offset - customoffset}, 1200);
  });
});

// Switch Theme Colour
$(function() {
  $('.switch-theme-colour').on('click', function(e) {
    $('body').toggleClass("black white");
    //$('.switch-theme-colour').toggleClass("d-none d-inline-block");//btn-outline-white btn-outline-black
    $('.text-element').toggleClass("d-none d-inline-block");
    //$('.profile-picture').toggleClass("d-none d-inline-block");
    //$('.text-bootstrap-alternate').toggleClass("text-bootstrap-lighten text-bootstrap");


    // $('.theme-colour-in').removeClass("hide-it").addClass("show-it");
    // $('.theme-colour-in').toggleClass("text-grey-dark text-grey-light");
    // window.setTimeout(function() {
    //   $('.theme-colour-in').removeClass("show-it").addClass("hide-it");;
    // }, 1000);


    e.preventDefault();
  });
});

// // Change Some Class After Scrolling Some Distance From Top | As Per, But Modified Now (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
// $(function() {
//   //caches a jQuery object containing the body element
//   var changeFeaturesDiv = $(".change-features");
//   $(window).scroll(function() {
//     var scrollFromTop = $(window).scrollTop();

//     if (scrollFromTop >= 700) {
//       changeFeaturesDiv.removeClass("show-it").addClass("hide-it");
//     } else if (scrollFromTop <= 700) {
//       changeFeaturesDiv.removeClass("hide-it").addClass("show-it");
//     }
//   });
// });

// Adds/Removes Class After Scrolling Some Distance From Top | As Per Above Modified
$(function() {
  //caches a jQuery object containing the body element
  var hideThisDivs = $(".change-features-interior, .copyright-interior, .logo");
  var showThisDivs = $(".logo-cover");
  $(window).scroll(function() {
    var scrollFromTop = $(window).scrollTop();

    if (scrollFromTop >= 250) {
      hideThisDivs.addClass("hide-it").removeClass("show-it");
    } else if (scrollFromTop <= 250) {
      hideThisDivs.removeClass("hide-it").addClass("show-it");
    }

    if (scrollFromTop >= 250) {
      showThisDivs.addClass("show-it").removeClass("hide-it");
    } else if (scrollFromTop <= 250) {
      showThisDivs.removeClass("show-it").addClass("hide-it");
    }
  });
});

// // Change Some Class After Scrolling Some Element | As Per, But Modified Now (https://stackoverflow.com/questions/29717119/how-to-change-class-after-scroll-somewhere/29717259)
// $(function() {
//   var changeFeaturesDiv = $(".change-features");
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     var objectSelect = $("#section_2, #work_section");
//     var objectPosition = objectSelect.offset().top;
//     if (scroll > objectPosition) {
//       changeFeaturesDiv.removeClass("show-it").addClass("hide-it");//$("body").addClass("change");
//     } else if (scroll < objectPosition) {
//       changeFeaturesDiv.removeClass("hide-it").addClass("show-it");//$("body").removeClass("change");
//     }
//   });
// });

// Initialize Slick Carousel
$(document).ready(function() {
  $('.carousel-my-work').slick({
    dots: false,
    infinite: true,//false
    speed: 500,//300
    slidesToShow: 1,//3
    //slidesToScroll: 1,
    draggable: true,//default
    //swipe: true,//default
    swipeToSlide: true,
    arrows: false,//true
    centerMode: true,
    variableWidth: false,
    adaptiveHeight: false,
    //autoplay: true,
    //autoplaySpeed: 10000,
    pauseOnHover: false,
    lazyLoad: 'progressive',//'ondemand'
    //pauseOnFocus: true,//default
    //fade: true,
    //cssEase: 'linear',
    //asNavFor: '.as-nav-for-my-work'
  });
  // $('.as-nav-for-my-work').slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 500,//300
  //   slidesToShow: 8,
  //   //slidesToScroll: 1,
  //   draggable: true,//default
  //   swipe: true,//default
  //   swipeToSlide: true,
  //   arrows: false,
  //   focusOnSelect: true,
  //   lazyLoad: 'ondemand',
  //   asNavFor: '.carousel-my-work'
  // });
  $('.carousel-my-skills').slick({
    dots: false,
    infinite: true,
    //speed: 300,
    slidesToShow: 1,
    swipeToSlide: false,
    draggable: false,
    arrows: false,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    lazyLoad: 'ondemand',
    fade: true,
    //cssEase: 'linear'
  });
});

// Show Message Missing Features
$(function() {
  $('.show-message-button').on('click', function() {//(e)
    var $this = $('.show-message').removeClass('hide-it');//$('.show-message').removeClass('hide-it');
    window.setTimeout(function() {//setTimeout(function() {
      $this.addClass('hide-it');//$('.show-message').addClass('hide-it');
    }, 3000);
    //e.preventDefault();
  });
});

// // Loader Dots | As Per: https://codepen.io/WhiteWolfWizard/pen/vorqj
// $(function() {
//   var $loader = $('#loader'),
//     max = 75, speed = 500,
//     char = '<i>.</i>', count = 0,
//     dots = function(){
//       if ( count <= max ) {
//         count++;
//         for ( var i = 0; i < 1; i++ ) {
//           $loader.append(char);
//           $loader.find('i').fadeIn(speed);
//         }
//       } else {
//         clearInterval(dots);
//       }
//       // COLOR FUN * OPTIONAL *
//       /*
//       $('#loader i').each(function(i){
//         var hue = 10 * i;
//         $(this).css({ color: 'hsl('+hue+',75%,50%)' });
//       });
//       */
//     };
//   setInterval(dots,speed/2);
// });

//---------------------------------CURSOR SCRIPTS---------------------------------//

// // EXAMPLE 1 (https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow)
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//  //console.log(e);
//  cursor.setAttribute("style", "display:block; top:"+(e.pageY - 25)+"px; left:"+(e.pageX - 25)+"px;");
// })

// document.addEventListener('click', () => {
//  cursor.classList.add("cursor-on-click");
//  setTimeout(() => {
//    cursor.classList.remove("cursor-on-click");
//  }, 500)
// })

// EXAMPLE 7 (https://greensock.com/forums/topic/19789-follow-by-mouse/)
// http://ahrengot.com/tutorials/greensock-javascript-animation
var $cursor = $('.cursor');

function moveCircle(e) {
    TweenLite.to($cursor, 0.3, {
    css: {
      x: e.clientX,
      y: e.clientY
    }
  });
}

$(window).on('mousemove', moveCircle);

// EXAMPLE 2 (https://stackoverflow.com/questions/51281666/animate-custom-cursor-when-hovering-on-a-link)
$(document).mousemove(function(e) {
  const cursor = $('.cursor');
  const target = $(event.target);
  
  // update position of cursor // # As Css Transition Lag Issue Started, Now Using GSAP Above Code For Positioning
  cursor.css('display', 'block');//cursor.css('left', e.clientX - 25).css('top', e.clientY - 25).css('display', 'block');

  // setTimeout(function() {// # My Custom Code With Timeout, Following Example 6, To Simulate Delay With setTimeout
  //   cursor.css('left', e.clientX - 25).css('top', e.clientY - 25).css('display', 'block');
  // }, 50);

  const isLink = target.is('a.link, i.fa.link, a.link div, a.link span');//a::after, a::before//.nav-social-media//a
  //const isImg = target.is('img, .glitch-img, .parallax-image');
  const isProject = target.is('.project-thumbnail');//figure
  const isModal = target.is('.modal, .modal div, .modal p, .modal h1, .modal h2, .modal h3, .modal h4, .modal h5, .modal h6, .modal img, .modal a, .modal button, .modal span');
  const isDragSides = target.is('.project-as-nav-for');
  const isFooter = target.is('footer .container');

  const isLinkHovered = cursor.hasClass('hoveredLink');
  //const isImgHovered = cursor.hasClass('hoveredImg');
  const isProjectHovered = cursor.hasClass('hoveredProject');
  const isModalHovered = cursor.hasClass('hoveredModal');
  const isDragSidesHovered = cursor.hasClass('hoveredDragSides');
  const isFooterHovered = cursor.hasClass('hoveredFooter');

  // toggle the cursor class if necessary 
  if(isLink && !isLinkHovered) {
    cursor.addClass('hoveredLink');
  } else if(!isLink && isLinkHovered) {
    cursor.removeClass('hoveredLink');
  }

  // if(isImg && !isImgHovered) {
  //   cursor.addClass('hoveredImg');
  // } else if(!isImg && isImgHovered) {
  //   cursor.removeClass('hoveredImg');
  // }

  if(isProject && !isProjectHovered) {
    cursor.addClass('hoveredProject');
  } else if(!isProject && isProjectHovered) {
    cursor.removeClass('hoveredProject');
  }

  if(isModal && !isModalHovered) {
    cursor.addClass('hoveredModal');
  } else if(!isModal && isModalHovered) {
    cursor.removeClass('hoveredModal');
  }

  if(isDragSides && !isDragSidesHovered) {
    cursor.addClass('hoveredDragSides');
  } else if(!isDragSides && isDragSidesHovered) {
    cursor.removeClass('hoveredDragSides');
  }

  if(isFooter && !isFooterHovered) {
    cursor.addClass('hoveredFooter');
  } else if(!isFooter && isFooterHovered) {
    cursor.removeClass('hoveredFooter');
  }
});

$(document).mouseleave(function(e) {
  const cursor = $('.cursor');
  cursor.hide()
});

$(document).mouseenter(function(e) {
  const cursor = $('.cursor');
  cursor.show()
});

//---------------------------------IMAGE GLITCH EFFECT | IMAGESLOADED---------------------------------//

/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
  setTimeout(() => document.body.classList.remove('home-rendering'), 6800);
  //setTimeout(() => document.body.classList.add('home-rendered'), 6800);

  setTimeout(() => document.body.classList.remove('rendering'), 5000);
  //setTimeout(() => document.body.classList.add('rendered'), 5000);

  setTimeout(() => document.body.classList.remove('first-load'), 1000);

  imagesLoaded('img, .bg-image', { background: true }, () => {
    // document.body.classList.remove('loading');
    // document.body.classList.add('imagesloaded');//imgloaded
    // document.body.classList.remove('first-load');
    
    setTimeout(() => document.body.classList.remove('loading') , 1000);
    setTimeout(() => document.body.classList.add('imagesloaded') , 1000);//imgloaded
  });
}

//---------------------------------FIRST GSAP ATTEMPTS---------------------------------//

// TweenMax.from('.header-image', 2, {css:{opacity:0}});

//---------------------------------MAGICSCROLL AS PER DOCS | https://scrollmagic.io/docs/index.html---------------------------------//

// // init controller
// var controller = new ScrollMagic.Controller();

// // create a scene
// new ScrollMagic.Scene({
//     duration: 100,    // the scene should last for a scroll distance of 100px
//     offset: 50    // start this scene after scrolling for 50px
// })
// .setPin("#my-sticky-element") // pins the element for the the scene's duration
// .addTo(controller); // assign the scene to the controller

//---------------------------------AS PER GARY SIMON | https://www.youtube.com/watch?v=S18Wh9IELo0---------------------------------//

//var tl0 = new TimelineMax({onUpdate:updatePercentage});
var tlMwT = new TimelineMax();
//var tlAnF = new TimelineMax();
var tlCd = new TimelineMax();
var tlSc = new TimelineMax();
var tlAp = new TimelineMax();
var tlSh = new TimelineMax();
var tlSl1 = new TimelineMax();
var tlSl2 = new TimelineMax();
var tlSl3 = new TimelineMax();

const controller = new ScrollMagic.Controller();

//tl0.from(".gsap-all-projects", 2, {x:-200});

// const scene0 = new ScrollMagic.Scene({
//   triggerElement: ".sticky-section",
//   triggerHook: "onLeave",
//   duration: "100%"
// })

// //.setPin(".sticky-section")
// .setTween(tl0)
//   .addTo(controller);

// function updatePercentage() {
//   tl0.progress();
//   //console.log(tl0.progress());
// }

tlMwT.from(".gsap-my-work-title", 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});//opacity:0, scale:0

//tlAnF.from(".gsap-as-nav-for", 4, {x:500, opacity:0, ease:Power2.easeOut});//scale:0

tlCd.from(".gsap-content-development", 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});//x:-500//scale:0.5

tlSc.from(".gsap-subcontent", 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});

tlAp.from(".gsap-all-projects" , 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});

tlSh.from(".gsap-skills-headline" , 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});

tlSl1.from(".gsap-skills-list-1" , 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});

tlSl2.from(".gsap-skills-list-2" , 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});

tlSl3.from(".gsap-skills-list-3" , 2, {y:250, opacity:0, transformStyle:"preserve-3d", skewY:15, ease:Power3.easeOut});

const sceneMwT = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-my-work-title"
})
.setTween(tlMwT)
 .addTo(controller);

// const sceneAnF = new ScrollMagic.Scene({
//   triggerElement: ".magic-trigger-as-nav-for"
// })
// .setTween(tlAnF)
//   .addTo(controller);

const sceneCd = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-content-development"
})
.setTween(tlCd)
 .addTo(controller);

const sceneSc = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-subcontent"
})
.setTween(tlSc)
 .addTo(controller);

const sceneAp = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-all-projects"
})
.setTween(tlAp)
 .addTo(controller);

const scenetlSh = new ScrollMagic.Scene({
 triggerElement: "#my_skills_section"
})
.setTween(tlSh)
 .addTo(controller);

const scenetlSl1 = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-skills-list-1"
})
.setTween(tlSl1)
 .addTo(controller);

const scenetlSl2 = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-skills-list-2"
})
.setTween(tlSl2)
 .addTo(controller);

const scenetlSl3 = new ScrollMagic.Scene({
 triggerElement: ".magic-trigger-skills-list-3"
})
.setTween(tlSl3)
 .addTo(controller);

//---------------------------------MAGNETIC BUTTON---------------------------------//

$('.burger-menu').mouseleave(function(e){
  TweenMax.to(this, 0.3, {scale: 1});
  TweenMax.to('.burger-circle, .burger-center', 0.3,{scale: 1, x: 0, y: 0});
});

$('.burger-menu').mouseenter(function(e){
  TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
  TweenMax.to('.burger-circle', 0.3,{scale: 1.3});
});

$('.burger-menu').mousemove(function(e){
  callParallax(e);
});

function callParallax(e){
  parallaxIt(e, '.burger-circle', 60);
  parallaxIt(e, '.burger-center', 40);
}

function parallaxIt(e, target, movement){
  var $this = $('.burger-menu');
  var boundingRect = $this[0].getBoundingClientRect();
  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  TweenMax.to(target, 0.3, {
    x: (relX - boundingRect.width/2) / boundingRect.width * movement,
    y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
    ease: Power2.easeOut
  });
}