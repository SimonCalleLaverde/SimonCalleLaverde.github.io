// As per: http://www.everyday3d.com/blog/index.php/2014/08/18/smooth-scrolling-with-virtualscroll/

// Prevent the touchmove event from doing its job of scrolling the site in mobile
document.addEventListener('touchmove', function(e) { 
  e.preventDefault(); 
});

// We need to grab the height of the element holding it
var section = document.querySelector('main');
var sectionHeight = section.getBoundingClientRect().height;

// Listen to the scroll events in Javascript | Support several different modes of interaction – mouse, touch, keyboard
VirtualScroll.on(function(e) {
  // e is an object that holds scroll values, including:
  e.deltaY; // <- amount of pixels scrolled vertically since last call
  e.deltaX; // <- amount of pixels scrolled horizontally since last call
});

// For simplicity sake, let's assume you just want to scroll your content vertically. Here's how you can track the value you need
var targetY = 0;

VirtualScroll.on(function(e) {
  targetY += e.deltaY;
  targetY = Math.max( (sectionHeight - window.innerHeight) * -1, targetY);
  targetY = Math.min(0, targetY);
});

// The CSS translation is done inside another function, one that runs at every frame, ideally 60 times per second. The best way to make a loop like this is to use requestAnimationFrame
var currentY = 0, ease = 0.1;

var run = function() {
  requestAnimationFrame(run);
  currentY += (targetY - currentY) * ease;
  var t = 'translateY(' + currentY + 'px) translateZ(0)';
  var s = section.style;
  s["transform"] = t;
  s["webkitTransform"] = t;
  s["mozTransform"] = t;
  s["msTransform"] = t;
}

run();