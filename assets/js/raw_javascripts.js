//---------------------------------PLUGINS INIT---------------------------------//

// // Init Rolly
// $(function() {
//   //import rolly from 'rolly.js';

//   // const view = document.querySelector('#rolly');
//   // const r = rolly({
//   //   view,
//   //   native: true,
//   //   // other options
//   // });
//   // r.init();
  
//   const config = {
//     view: document.querySelector('#rolly'),
//     preload: true,
//     native: true,//false
//     change(state) {
//       document.documentElement.style.backgroundColor = `hsl(${(state.current / state.bounding) * 360}, 100%, 95%)`;
//     },
//     scenes: {
//       rotateZ: {
//         transform({ globalState, sceneState, transform }) {
//           const { previous, current, transformPrefix } = globalState;
//           const { context } = sceneState.cache;
//           const delta = current - previous;
//           const rotationZ = delta / 40;//32//24//48//2
//           const skew = delta / 50;//40//30//60//2.5
//           context.style[transformPrefix] = `translate3d(0, ${transform}px, 0) rotateZ(${rotationZ}deg) skew(${skew}deg)`;
//         },
//       },
//     },
//   };

//   const r = window.rolly(config);
//   r.init();
// });

// Init Rolly (JUST IN DESKTOP)
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww >= 768) {//400
      
      // Initializing Rolly (Just In Desktop) [Start]
      const config = {
        view: document.querySelector('#rolly'),
        preload: true,
        native: true,//false
        change(state) {
          document.documentElement.style.backgroundColor = `hsl(${(state.current / state.bounding) * 360}, 100%, 95%)`;
        },
        scenes: {
          rotateZ: {
            transform({ globalState, sceneState, transform }) {
              const { previous, current, transformPrefix } = globalState;
              const { context } = sceneState.cache;
              const delta = current - previous;
              const rotationZ = delta / 40;//32//24//48//2
              const skew = delta / 50;//40//30//60//2.5
              context.style[transformPrefix] = `translate3d(0, ${transform}px, 0) rotateZ(${rotationZ}deg) skew(${skew}deg)`;
            },
          },
        },
      };

      const r = window.rolly(config);
      r.init();
      // Initializing Rolly (Just In Desktop) [End]

    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

// This Code Goes Together With "Rolly Init Just In Desktop"
// Removing #Rolly Id On Mobile (BETTER CODE HERE) | But Rolly Still Inits, So New Code Is At The Top Of File
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 768) {//400
      //$('.rolly-on-off').removeClass('blue');
      $(".rolly-on-off").removeAttr("id");
      $('body').addClass('theme-dark-mobile-wide');//Theme Dark All In Mobile
    } else if (ww >= 768) {//401
      //$('.rolly-on-off').addClass('blue');
      $(".rolly-on-off").attr("id", "rolly");
      $('body').removeClass('theme-dark-mobile-wide');//Theme Dark All In Mobile
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

// // Init Luxy
// $(function() {
//   luxy.init({
//     wrapper: '#luxy',
//     targets: '.luxy-el',
//     wrapperSpeed: 0.1//Default 0.08
//   });
// });

// Init Fastclick [Removing Touch Delay On Mobile]
if ('addEventListener' in document) {//Github
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

// $(function() {//Jquery
//   FastClick.attach(document.body);
// });

// window.addEventListener('load', function() {//Other example from main page
//   new FastClick(document.body);
// }, false);

// Init Rellax
$(function() {
  // Accepts any class name
  var rellax = new Rellax('.rellax', {
    center:true
  });
});

// Init Laxxx
$(document).ready(function() {
  window.onload = function() {
    // init
    lax.setup({
      breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 }
    })

    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
  }
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

// Change Some Class After Scrolling Some Distance From Top | As Per, But Modified Now (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
$(function() {
  //caches a jQuery object containing the body element
  var hideThisDivs = $("aside .show-it, aside .hide-it");//.mouse-svg,//.logo .show-it, .logo .hide-it,
  var toggleLogoSize = $(".logo");

  $(window).scroll(function() {
    var scrollFromTop = $(window).scrollTop();

    if (scrollFromTop >= 30) {
      hideThisDivs.addClass("hide-it").removeClass("show-it");
    } else if (scrollFromTop <= 30) {
      hideThisDivs.removeClass("hide-it").addClass("show-it");
    }

    if (scrollFromTop >= 30) {
      toggleLogoSize.addClass("logo-smaller");
    } else if (scrollFromTop <= 30) {
      toggleLogoSize.removeClass("logo-smaller");
    }
  });
});

// Change Some Class After Scrolling Some Distance To Bottom | As Per, But Modified Now (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
$(function() {
  //caches a jQuery object containing the body element
  var body = $("body");
  $(window).scroll(function() {
    var scrollFromBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollFromBottom >= 300) {
      body.removeClass("is-bottom").addClass("is-top");
    } else if (scrollFromBottom <= 300) {
      body.removeClass("is-top").addClass("is-bottom");
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

// Smooth Scroll Script
$(function() {
  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top: 0;
    var customoffset = 0;//49
    $('html, body').animate({scrollTop:target_offset - customoffset}, 1200);
  });
});

// // Switch Theme Colour
// $(function() {
//   $('.switch-theme-colour').on('click', function(e) {
//     $('body').toggleClass("black white");
//     $('.text-element').toggleClass("d-none d-inline-block");

//     e.preventDefault();
//   });
// });

// // Show Message Missing Features
// $(function() {
//   $('.show-message-button').on('click', function() {//(e)
//     var $this = $('.show-message').removeClass('hide-it');//$('.show-message').removeClass('hide-it');
//     window.setTimeout(function() {//setTimeout(function() {
//       $this.addClass('hide-it');//$('.show-message').addClass('hide-it');
//     }, 3000);
//     //e.preventDefault();
//   });
// });

// Show Menu Mobile On Click
$(function() {
  $('.burger-mobile').on('click', function() {//(e)
    $('html, body').toggleClass('menu-opened');
    $('.burger-mobile').toggleClass('opened');
    $('.menu-mobile').toggleClass('opened');
    $('.logo').toggleClass('logo-light');
    //e.preventDefault();
  });
});

// As Per: https://stackoverflow.com/questions/14434604/i-want-to-delay-a-link-for-a-period-of-500-with-javascript
// Delay Some Links To Page Load // Set your href attribute as href="javascript:delay('URL')" and JavaScript:
function delay (URL) {
  setTimeout( function() { window.location = URL }, 1000 );
}

// Custom Code | Should Go Together With The Above
// Open Page Transition Loader When Clicking "link-page-load" Buttons
$(function() {
  $('.link-page-load').on('click', function() {//e
    $('body').addClass("load-out");

    //e.preventDefault();
  });
});

// // As Per: https://forum.webflow.com/t/javascript-delay-on-page-links/38852
// // Didn't Really Work As It Is
// $('.link-page-load').click(function(e) {
//   e.preventDefault();
//   setTimeout(function(url) { window.location = url }, 1000, this.href);
// });

// // Removing .Rolly Class On Mobile (BETTER CODE ABOVE)
// $(window).resize(function() {//jQuery
//  var screen = $(window);

//  if (screen.width < 768) {
//    $(".rolly-on-off").removeClass("rolly");
//  } else {
//    $(".rolly-on-off").addClass("rolly");
//  }
// });

// // Removing #Rolly Id On Mobile (BETTER CODE ABOVE)
// $(window).resize(function() {//jQuery(window)
//   var screen = $(window);

//   if (screen.width < 768) {
//     $(".rolly-on-off").removeAttr("id");
//   } else {
//     $(".rolly-on-off").attr("id", "rolly");
//   }
// });

// // Setting and unsetting the "Id" ("Id"s are single strings)
// // To add new "Id"
// document.querySelector(".rolly-on-off").id = "rolly";
// // Or
// document.querySelector(".rolly-on-off").setAttribute("id", "rolly");
// // And to remove (Removing the attribute is best way)
// document.querySelector(".rolly-on-off").removeAttribute("id");
// document.querySelector(".rolly-on-off").setAttribute("id", "");
// // Using jQuery
// $(".rolly-on-off").attr("id", "rolly");
// $(".rolly-on-off").removeAttr("id");

//---------------------------------MAGNETIC BUTTON---------------------------------//

$('#header-hire-button').mouseenter(function(e){
  TweenMax.to(this, 0.5, {transformOrigin: '0 0', scale: 1});
  TweenMax.to('.hire-button-circle', 0.5, {scale: 1.1});//scale: 1.3
});

$('#header-hire-button').mouseleave(function(e){
  TweenMax.to(this, 0.5, {scale: 1});
  TweenMax.to('.hire-button-circle, .hire-button-text', 0.5, {scale: 1, x: 0, y: 0});
});

$('#header-hire-button').mousemove(function(e){
  callParallax(e);
});

function callParallax(e){
  parallaxIt(e, '.hire-button-circle', 60);
  parallaxIt(e, '.hire-button-text', 40);
}

function parallaxIt(e, target, movement){
  var $this = $('#header-hire-button');
  var boundingRect = $this[0].getBoundingClientRect();
  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  TweenMax.to(target, 0.5, {
  x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
  y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
  ease: Power2.easeOut
  });
}

//---------------------------------IMAGESLOADED---------------------------------//

$(function() {
  var body = $("body");
  var loadingHeader = $(".header-image, .loader-area");//New
  var allImages = $("img, .bg-image");//New

  imagesLoaded(allImages, { background:true }, () => {
    document.body.classList.remove('loading');
    document.body.classList.add('imagesloaded');
    //setTimeout(() => document.body.classList.remove('loading'), 2000);
    //setTimeout(() => document.body.classList.add('imagesloaded'), 2000);

    document.body.classList.add('rendering');
    document.body.classList.add('rendering-internal');
    setTimeout(() => document.body.classList.remove('rendering'), 5500);
    setTimeout(() => document.body.classList.remove('rendering-internal'), 3000);

    setTimeout(() => loadingHeader.addClass("d-none"), 6000);//New//Removing Header-Image After Site's Loading Animation
  });
});