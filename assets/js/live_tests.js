// Loading Animation (Some Elements)
const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.loader-area > .loader-center > span > .loading-quote', {y:"0%", duration:2, stagger:0.1});

//tl.fromTo('.loader-area > .loader-center > small > i > span', {opacity:"0"}, {opacity:"1", duration:0.65, stagger:0.01}, "-=0.5");

tl.to('.loader-area > .loader-center', {opacity:"0", duration:2, delay:0.1});