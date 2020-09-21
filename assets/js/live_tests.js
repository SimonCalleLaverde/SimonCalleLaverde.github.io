const tl = gsap.timeline({defaults:{ease:"power1.out"}});





tl.to('.loading-quote', {y:"0%", duration:2, stagger:0.1});

tl.to('.loader-center', {opacity:"0", duration:2});