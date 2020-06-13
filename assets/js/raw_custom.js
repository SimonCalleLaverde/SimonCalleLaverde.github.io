//---------------------------------PLUGINS INIT---------------------------------//

// Init Rolly
$(function() {
  //import rolly from 'rolly.js';

  // const view = document.querySelector('#rolly');
  // const r = rolly({
  //   view,
  //   native: true,
  //   // other options
  // });
  // r.init();
  
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
          const rotationZ = delta / 48;//32//2
          const skew = delta / 60;//40//2.5
          context.style[transformPrefix] = `translate3d(0, ${transform}px, 0) rotateZ(${rotationZ}deg) skew(${skew}deg)`;
        },
      },
    },
  };

  const r = window.rolly(config);
  r.init();
});

// Init Luxy
$(function() {
  luxy.init({
    wrapper: '#luxy',
    targets: '.luxy-el',
    wrapperSpeed: 0.1//Default 0.08
  });
});

// Init Fastclick
// $(function() {//Jquery
//   FastClick.attach(document.body);
// });

// window.addEventListener('load', function() {//Other example from main page
//   new FastClick(document.body);
// }, false);

if ('addEventListener' in document) {//Github
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

// Init Rellax
$(function() {
  // Accepts any class name
  var rellax = new Rellax('.rellax');
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
  var hideThisDivs = $(".change-features-interior, .copyright-interior, .logo a, .mouse-svg");
  var showThisDivs = $(".logo .logo-cover");
  $(window).scroll(function() {
    var scrollFromTop = $(window).scrollTop();

    if (scrollFromTop >= 100) {
      hideThisDivs.addClass("hide-it").removeClass("show-it");
    } else if (scrollFromTop <= 100) {
      hideThisDivs.removeClass("hide-it").addClass("show-it");
    }

    if (scrollFromTop >= 100) {
      showThisDivs.addClass("show-it").removeClass("hide-it");
    } else if (scrollFromTop <= 100) {
      showThisDivs.removeClass("show-it").addClass("hide-it");
    }
  });
});

// // Change Some Class After Scrolling Some Distance To Bottom | As Per, But Modified Now (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
// $(function() {
//   //caches a jQuery object containing the body element
//   var body = $("body");
//   $(window).scroll(function() {
//     var scrollFromBottom = $(document).height() - $(window).height() - $(window).scrollTop();

//     if (scrollFromBottom >= 550) {
//       body.removeClass("is-bottom").addClass("is-top");
//     } else if (scrollFromBottom <= 550) {
//       body.removeClass("is-top").addClass("is-bottom");
//     }
//   });
// });

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
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top: 10;//0
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
    $('.menu-mobile').toggleClass('opened');
    $('.burger-mobile').toggleClass('opened');
    $('.logo a').toggleClass('logo-light');
    //e.preventDefault();
  });
});

//---------------------------------IMAGESLOADED---------------------------------//

$(function() {
  var body = $("body");
  var loaderHeader = $(".header-image");//New
  var allImages = $("img, .bg-image");//New

  imagesLoaded(allImages, { background:true }, () => {
    // document.body.classList.remove('loading');
    // document.body.classList.add('imagesloaded');
    
    setTimeout(() => document.body.classList.remove('rendering'), 4700);
    //setTimeout(() => document.body.classList.add('complete'), 4700);

    setTimeout(() => document.body.classList.remove('loading'), 2000);
    setTimeout(() => document.body.classList.add('imagesloaded'), 2000);

    setTimeout(() => loaderHeader.removeClass("d-block").addClass("d-none"), 4600);//New
  });
});

//---------------------------------CURSOR SCRIPTS---------------------------------//

// POSITIONING WITH GSAP AS PER (https://greensock.com/forums/topic/19789-follow-by-mouse/)
// http://ahrengot.com/tutorials/greensock-javascript-animation
var $cursor = $('.cursor');

function moveCircle(e) {
    TweenLite.to($cursor, 0.2, {//0.3
    css: {
      x: e.clientX,
      y: e.clientY
    }
  });
}

$(window).on('mousemove', moveCircle);

// HOVER STATES AS PER (https://stackoverflow.com/questions/51281666/animate-custom-cursor-when-hovering-on-a-link)
$(document).mousemove(function(e) {
  const cursor = $('.cursor');
  const target = $(event.target);
  
  // Update position of cursor
  cursor.css('display', 'block');//cursor.css('left', e.clientX - 25).css('top', e.clientY - 25).css('display', 'block');
  
  const isLink = target.is('a.link, button.link, input.link, i.fa.link, a.link div, a.link span, a .link');
  const isRecent = target.is('.recent-project-thumbnail');//figure
  const isProject = target.is('.project-thumbnail');//figure
  const isFooter = target.is('footer > a.container');

  const isLinkHovered = cursor.hasClass('hoveredLink');
  const isRecentHovered = cursor.hasClass('hoveredRecent');
  const isProjectHovered = cursor.hasClass('hoveredProject');
  const isFooterHovered = cursor.hasClass('hoveredFooter');

  // Toggle the cursor class if necessary 
  if (isLink && !isLinkHovered) {
    cursor.addClass('hoveredLink');
  } else if (!isLink && isLinkHovered) {
    cursor.removeClass('hoveredLink');
  }

  if (isRecent && !isRecentHovered) {
    cursor.addClass('hoveredRecent');
  } else if (!isRecent && isRecentHovered) {
    cursor.removeClass('hoveredRecent');
  }

  if (isProject && !isProjectHovered) {
    cursor.addClass('hoveredProject');
  } else if (!isProject && isProjectHovered) {
    cursor.removeClass('hoveredProject');
  }

  if (isFooter && !isFooterHovered) {
    cursor.addClass('hoveredFooter');
  } else if (!isFooter && isFooterHovered) {
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