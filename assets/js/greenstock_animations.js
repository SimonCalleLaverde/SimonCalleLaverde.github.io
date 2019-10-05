//------------------First GSAP Attemps------------------//

// TweenMax.from('.header-image', 2, {css:{opacity:0}});






//------------------Basic MagicScroll Usage As Per Documentation | https://scrollmagic.io/docs/index.html------------------//

// // init controller
// var controller = new ScrollMagic.Controller();

// // create a scene
// new ScrollMagic.Scene({
//     duration: 100,    // the scene should last for a scroll distance of 100px
//     offset: 50    // start this scene after scrolling for 50px
// })
// .setPin("#my-sticky-element") // pins the element for the the scene's duration
// .addTo(controller); // assign the scene to the controller






//------------------As Per Gary Simon | https://www.youtube.com/watch?v=S18Wh9IELo0------------------//

//var tl0 = new TimelineMax({onUpdate:updatePercentage});
var tlMwT = new TimelineMax();
var tlAnF = new TimelineMax();
var tlCd = new TimelineMax();
var tlSc = new TimelineMax();
var tlAp = new TimelineMax();
var tlSh = new TimelineMax();

const controller = new ScrollMagic.Controller();

//tl0.from(".tag-moving-element", 2, {x:-200});

// const scene0 = new ScrollMagic.Scene({
// 	triggerElement: ".sticky-section",
// 	triggerHook: "onLeave",
// 	duration: "100%"
// })

// //.setPin(".sticky-section")
// .setTween(tl0)
// 	.addTo(controller);

// function updatePercentage() {
// 	tl0.progress();
// 	//console.log(tl0.progress());
// }

tlMwT.from(".gsap-my-work-title", 1.5, {y:200, opacity:0, transformStyle:"preserve-3d", skewY:10, ease:Power3.easeOut});//opacity:0, scale:0

tlAnF.from(".gsap-as-nav-for", 3, {x:300, opacity:0, ease:Power2.easeOut});//scale:0

tlCd.from(".gsap-content-development", 1.5, {y:200, opacity:0, transformStyle:"preserve-3d", skewY:10, ease:Power3.easeOut});//x:-500//scale:0.5

tlSc.from(".gsap-subcontent", 1.5, {y:200, opacity:0, transformStyle:"preserve-3d", skewY:10, ease:Power3.easeOut});

tlAp.from(".gsap-all-projects" , 2, {y:200, opacity:0, transformStyle:"preserve-3d", skewY:10, ease:Power3.easeOut});

tlSh.from(".gsap-skills-headline" , 2, {y:200, opacity:0, transformStyle:"preserve-3d", skewY:10, ease:Power3.easeOut});

const sceneMwT = new ScrollMagic.Scene({
	triggerElement: ".magic-trigger-my-work-title"
})
.setTween(tlMwT)
	.addTo(controller);

const sceneAnF = new ScrollMagic.Scene({
	triggerElement: ".magic-trigger-as-nav-for"
})
.setTween(tlAnF)
	.addTo(controller);

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