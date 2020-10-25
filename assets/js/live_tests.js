const container = document.querySelector(".home-hello-header .container");
const card = document.querySelector(".header-3d");

container.addEventListener("mousemove", (e) => {

	//console.log(e.pageX, e.pageY);

	let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// Animate In
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "all 0.5s ease-out";//card.style.transition = "none";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	card.style.transition = "all 0.5s ease-in";
});




// 28:07