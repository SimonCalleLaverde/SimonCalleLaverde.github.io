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

  const isLink = target.is('a > span > i, a > span, a > i, a > u, a > p, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6, i.fa.link, a .logo-interior');//a::after, a::before//.nav-social-media//a
  const isImg = target.is('img, .glitch-img, .parallax-image');
  const isProject = target.is('.project-thumbnail');//figure
  const isModal = target.is('.modal, .modal div, .modal p, .modal h1, .modal h2, .modal h3, .modal h4, .modal h5, .modal h6, .modal img, .modal a, .modal button, .modal span');

  const isLinkHovered = cursor.hasClass('hoveredLink');
  const isImgHovered = cursor.hasClass('hoveredImg');
  const isProjectHovered = cursor.hasClass('hoveredProject');
  const isModalHovered = cursor.hasClass('hoveredModal');
  
  // toggle the cursor class if necessary 
  if(isLink && !isLinkHovered) {
    cursor.addClass('hoveredLink');
  } else if(!isLink && isLinkHovered) {
    cursor.removeClass('hoveredLink');
  }

  if(isImg && !isImgHovered) {
    cursor.addClass('hoveredImg');
  } else if(!isImg && isImgHovered) {
    cursor.removeClass('hoveredImg');
  }

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
});

$(document).mouseleave(function(e) {
  const cursor = $('.cursor');
  cursor.hide()
});

$(document).mouseenter(function(e) {
  const cursor = $('.cursor');
  cursor.show()
});

// // EXAMPLE 3 (https://codepen.io/anon/pen/QQOmwW)
// // http://ahrengot.com/tutorials/greensock-javascript-animation

// var $circle = $('.circle');

// function moveCircle(e) {
//   TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);

// // EXAMPLE 4 (https://greensock.com/forums/topic/15210-easing-to-y-position-set-on-mousemove/)
// var ease = 0.15;

// var ball = $("#ball");
// var pos = { x: 0, y: 0 };
// var mouse = { x: 0, y: 0 };

// $(window).mousemove(function(e){  
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// TweenLite.ticker.addEventListener("tick", update);

// function update() {
  
//   pos.x += (mouse.x - pos.x) * ease;
//   pos.y += (mouse.y - pos.y) * ease;
  
//   ball.attr("cx", pos.x);
//   ball.attr("cy", pos.y);
// }

// EXAMPLE 5 (Was A Youtube Code I Tested | https://www.youtube.com/watch?v=r3I04RXsvYA)

// // EXAMPLE 6 (https://www.jqueryscript.net/other/Custom-Cursor-jQuery-CSS3.html)
// $(document).mousemove(function(e) {
//   $('.cursor').eq(0).css({left:e.clientX, top:e.clientY});
//   setTimeout(function() {
//     $('.cursor').eq(1).css({left:e.clientX, top:e.clientY});
//   }, 100);
// })