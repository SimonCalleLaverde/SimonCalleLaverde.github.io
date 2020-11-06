//---------------------------------GSAP ANIMATIONS---------------------------------//

// //---------------------------------FIRST GSAP ATTEMPTS (With TweenMax, End 2019)---------------------------------//

// TweenMax.from('.header-image', 2, {css:{opacity:0}});

// //---------------------------------MAGICSCROLL (Only) AS PER DOCS | https://scrollmagic.io/docs/index.html---------------------------------//

// // init controller
// var controller = new ScrollMagic.Controller();

// // create a scene
// new ScrollMagic.Scene({
//     duration: 100, // the scene should last for a scroll distance of 100px
//     offset: 50 // start this scene after scrolling for 50px
// })
//     .setPin('#my-sticky-element') // pins the element for the scene's duration
//     .addTo(controller); // assign the scene to the controller

//---------------------------------SCROLL EFFECTS, GSAP (Gsap 3, September 2020)---------------------------------//

// Using Magic Scroll + Gsap For Elements Entering While Scrolling

//---------------------------------LOADING ANIMATION, GSAP (Gsap 3, September 2020)---------------------------------//

// Loading Animation (Some Elements)
const animation = gsap.timeline({defaults:{ease:"power1.out"}});

animation.to('.loader-area > .loader-center > span > .loading-quote', {y:"0%", duration:1.5, stagger:0.3});
//animation.to('.loader-area > .loader-center > span > .loading-quote', {skewY:"0", duration:1.5, stagger:0.3}, "-=1.5");

animation.to('.loader-circle', {opacity:"100%", duration:4});//"-=1.5"

//animation.fromTo('.loader-area > .loader-center > small > i > span', {opacity:"0"}, {opacity:"1", duration:0.65, stagger:0.01}, "-=0.5");

animation.to('.loader-area > .loader-center', {opacity:"0", duration:1, delay:0}, "-=0.5");