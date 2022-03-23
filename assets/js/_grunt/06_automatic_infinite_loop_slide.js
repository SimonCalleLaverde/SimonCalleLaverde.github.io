//---------------------------------AUTOMATIC INFINITE LOOP SLIDE ANIMATION | ORIGINAL (UN-MINIFIED)---------------------------------//

// // Making "See All Projects" an 'automatic-infinite-loop-slide', instead of 'on-scroll-only' with "laxxx.js" as it was
// // Based on this codepen "https://codepen.io/GreenSock/pen/rNGxEvq" or same example here "https://greensock.com/forums/topic/28289-question-of-infinite-text-animation/" (by 'Cassie')
// // Using "Green Sock Animation Platform"

// let marquee = document.querySelector(".see-all-projects-link-track > a")//.text-single
// const links = document.querySelectorAll(".see-all-projects-link-track > a > span")//.text-piece//.js-text

// //console.log(marquee)

// // Assign the timeline returned from the helper function to 'loop'
// let loop = horizontalLoop(links, {
//   repeat: -1,
//   speed: 1 + 0.5,
//   draggable: true,
//   reversed: false,
//   paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
// });

// // // Handle the timeline on hover
// // marquee.addEventListener("mouseenter", () => {
// //     loop.pause()
// // })

// // marquee.addEventListener("mouseleave", () => {
// //     loop.play()
// // })

// // Handle the timeline on scroll
// let currentScroll = 0;
// let scrollDirection = 1;

// window.addEventListener("scroll", () => {
//   let direction = window.pageYOffset > currentScroll ? 1 : -1;
//   if (direction !== scrollDirection) {
//     gsap.to(loop, { timeScale: direction, overwrite: true });
//     scrollDirection = direction;
//   }
//   currentScroll = window.pageYOffset;
// });

// /*
// This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

// Features:
//  - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
//  - When each item animates to the left or right enough, it will loop back to the other side
//  - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
//  - The returned timeline will have the following methods added to it:
//    - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
//    - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
//    - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
//    - current() - returns the current index (if an animation is in-progress, it reflects the final index)
//    - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
//  */
// function horizontalLoop(items, config) {
//   items = gsap.utils.toArray(items);
//   config = config || {};
//   let tl = gsap.timeline({
//           repeat: config.repeat,
//           paused: config.paused,
//           defaults: { ease: "none" },
//           onReverseComplete: () =>
//               tl.totalTime(tl.rawTime() + tl.duration() * 100)
//       }),
//       length = items.length,
//       startX = items[0].offsetLeft,
//       times = [],
//       widths = [],
//       xPercents = [],
//       curIndex = 0,
//       pixelsPerSecond = (config.speed || 1) * 100,
//       snap =
//           config.snap === false
//               ? (v) => v
//               : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
//       populateWidths = () =>
//           items.forEach((el, i) => {
//               widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
//               xPercents[i] = snap(
//                   (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) *
//                       100 +
//                       gsap.getProperty(el, "xPercent")
//               );
//           }),
//       getTotalWidth = () =>
//           items[length - 1].offsetLeft +
//           (xPercents[length - 1] / 100) * widths[length - 1] -
//           startX +
//           items[length - 1].offsetWidth *
//               gsap.getProperty(items[length - 1], "scaleX") +
//           (parseFloat(config.paddingRight) || 0),
//       totalWidth,
//       curX,
//       distanceToStart,
//       distanceToLoop,
//       item,
//       i;
//   populateWidths();
//   gsap.set(items, {
//       // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
//       xPercent: (i) => xPercents[i]
//   });
//   gsap.set(items, { x: 0 });
//   totalWidth = getTotalWidth();
//   for (i = 0; i < length; i++) {
//       item = items[i];
//       curX = (xPercents[i] / 100) * widths[i];
//       distanceToStart = item.offsetLeft + curX - startX;
//       distanceToLoop =
//           distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
//       tl.to(
//           item,
//           {
//               xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
//               duration: distanceToLoop / pixelsPerSecond
//           },
//           0
//       )
//           .fromTo(
//               item,
//               {
//                   xPercent: snap(
//                       ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
//                   )
//               },
//               {
//                   xPercent: xPercents[i],
//                   duration:
//                       (curX - distanceToLoop + totalWidth - curX) /
//                       pixelsPerSecond,
//                   immediateRender: false
//               },
//               distanceToLoop / pixelsPerSecond
//           )
//           .add("label" + i, distanceToStart / pixelsPerSecond);
//       times[i] = distanceToStart / pixelsPerSecond;
//   }
//   function toIndex(index, vars) {
//       vars = vars || {};
//       Math.abs(index - curIndex) > length / 2 &&
//           (index += index > curIndex ? -length : length); // always go in the shortest direction
//       let newIndex = gsap.utils.wrap(0, length, index),
//           time = times[newIndex];
//       if (time > tl.time() !== index > curIndex) {
//           // if we're wrapping the timeline's playhead, make the proper adjustments
//           vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
//           time += tl.duration() * (index > curIndex ? 1 : -1);
//       }
//       curIndex = newIndex;
//       vars.overwrite = true;
//       return tl.tweenTo(time, vars);
//   }
//   tl.next = (vars) => toIndex(curIndex + 1, vars);
//   tl.previous = (vars) => toIndex(curIndex - 1, vars);
//   tl.current = () => curIndex;
//   tl.toIndex = (index, vars) => toIndex(index, vars);
//   tl.updateIndex = () =>
//       (curIndex = Math.round(tl.progress() * (items.length - 1)));
//   tl.times = times;
//   tl.progress(1, true).progress(0, true); // pre-render for performance
//   if (config.reversed) {
//       tl.vars.onReverseComplete();
//       tl.reverse();
//   }
//   if (config.draggable && typeof Draggable === "function") {
//       let proxy = document.createElement("div"),
//           wrap = gsap.utils.wrap(0, 1),
//           ratio,
//           startProgress,
//           draggable,
//           dragSnap,
//           roundFactor,
//           align = () =>
//               tl.progress(
//                   wrap(
//                       startProgress + (draggable.startX - draggable.x) * ratio
//                   )
//               ),
//           syncIndex = () => tl.updateIndex();
//       typeof InertiaPlugin === "undefined" &&
//           console.warn(
//               "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
//           );
//       draggable = Draggable.create(proxy, {
//           trigger: items[0].parentNode,
//           type: "x",
//           onPress() {
//               startProgress = tl.progress();
//               tl.progress(0);
//               populateWidths();
//               totalWidth = getTotalWidth();
//               ratio = 1 / totalWidth;
//               dragSnap = totalWidth / items.length;
//               roundFactor = Math.pow(
//                   10,
//                   ((dragSnap + "").split(".")[1] || "").length
//               );
//               tl.progress(startProgress);
//           },
//           onDrag: align,
//           onThrowUpdate: align,
//           inertia: true,
//           snap: (value) => {
//               let n =
//                   Math.round(parseFloat(value) / dragSnap) *
//                   dragSnap *
//                   roundFactor;
//               return (n - (n % 1)) / roundFactor;
//           },
//           onRelease: syncIndex,
//           onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex()
//       })[0];
//   }

//   return tl;
// }

//----------------------------------CLOSURE COMPILE SERVICE (MINIFIED)----------------------------------//

var marquee=document.querySelector(".see-all-projects-link-track > a"),links=document.querySelectorAll(".see-all-projects-link-track > a > span"),loop=horizontalLoop(links,{repeat:-1,speed:1.5,draggable:!0,reversed:!1,paddingRight:parseFloat(gsap.getProperty(links[0],"marginRight","px"))}),currentScroll=0,scrollDirection=1;
window.addEventListener("scroll",function(){var c=window.pageYOffset>currentScroll?1:-1;c!==scrollDirection&&(gsap.to(loop,{timeScale:c,overwrite:!0}),scrollDirection=c);currentScroll=window.pageYOffset});
function horizontalLoop(c,f){function u(a,e){e=e||{};Math.abs(a-h)>g/2&&(a+=a>h?-g:g);var B=gsap.utils.wrap(0,g,a),w=v[B];w>b.time()!==a>h&&(e.modifiers={time:gsap.utils.wrap(0,b.duration())},w+=b.duration()*(a>h?1:-1));h=B;e.overwrite=!0;return b.tweenTo(w,e)}c=gsap.utils.toArray(c);f=f||{};var b=gsap.timeline({repeat:f.repeat,paused:f.paused,defaults:{ease:"none"},onReverseComplete:function(){return b.totalTime(b.rawTime()+100*b.duration())}}),g=c.length,C=c[0].offsetLeft,v=[],l=[],m=[],h=0,k=100*
(f.speed||1),x=!1===f.snap?function(a){return a}:gsap.utils.snap(f.snap||1),D=function(){return c.forEach(function(a,e){l[e]=parseFloat(gsap.getProperty(a,"width","px"));m[e]=x(parseFloat(gsap.getProperty(a,"x","px"))/l[e]*100+gsap.getProperty(a,"xPercent"))})},E=function(){return c[g-1].offsetLeft+m[g-1]/100*l[g-1]-C+c[g-1].offsetWidth*gsap.getProperty(c[g-1],"scaleX")+(parseFloat(f.paddingRight)||0)},d;D();gsap.set(c,{xPercent:function(a){return m[a]}});gsap.set(c,{x:0});var n=E();for(d=0;d<g;d++){var r=
c[d];var p=m[d]/100*l[d];var y=r.offsetLeft+p-C;var q=y+l[d]*gsap.getProperty(r,"scaleX");b.to(r,{xPercent:x((p-q)/l[d]*100),duration:q/k},0).fromTo(r,{xPercent:x((p-q+n)/l[d]*100)},{xPercent:m[d],duration:(p-q+n-p)/k,immediateRender:!1},q/k).add("label"+d,y/k);v[d]=y/k}b.next=function(a){return u(h+1,a)};b.previous=function(a){return u(h-1,a)};b.current=function(){return h};b.toIndex=function(a,e){return u(a,e)};b.updateIndex=function(){return h=Math.round(b.progress()*(c.length-1))};b.times=v;b.progress(1,
!0).progress(0,!0);f.reversed&&(b.vars.onReverseComplete(),b.reverse());if(f.draggable&&"function"===typeof Draggable){var F=document.createElement("div"),J=gsap.utils.wrap(0,1),G,z,t,A;k=function(){return b.progress(J(z+(H.startX-H.x)*G))};var I=function(){return b.updateIndex()};"undefined"===typeof InertiaPlugin&&console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");var H=Draggable.create(F,{trigger:c[0].parentNode,type:"x",onPress:function(){z=
b.progress();b.progress(0);D();n=E();G=1/n;t=n/c.length;A=Math.pow(10,((t+"").split(".")[1]||"").length);b.progress(z)},onDrag:k,onThrowUpdate:k,inertia:!0,snap:function(a){a=Math.round(parseFloat(a)/t)*t*A;return(a-a%1)/A},onRelease:I,onThrowComplete:function(){return gsap.set(F,{x:0})&&I()}})[0]}return b};