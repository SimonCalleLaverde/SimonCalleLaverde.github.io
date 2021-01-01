//---------------------------------HOME HEADER IMAGE 3D | ORIGINAL (UN-MINIFIED)---------------------------------//

// const container = document.querySelector(".home-hello-header .container");
// const card = document.querySelector(".header-3d");

// container.addEventListener("mousemove", (e) => {
//   //console.log(e.pageX, e.pageY);

//   let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

//   //xAxis = xAxis * (-1);//Making "xAxis" Negative
//   yAxis = yAxis * (-1);//Making "yAxis" Negative//Inverted Y Axis

//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });

// // Animate In
// container.addEventListener("mouseenter", (e) => {
//   card.style.transition = "all 0.5s ease-out";//card.style.transition = "none";
// });

// // Animate Out
// container.addEventListener("mouseleave", (e) => {
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   card.style.transition = "all 0.5s ease-in";//cubic-bezier(0.215, 0.610, 0.355, 1.5)
// });

// // 28:07 (Dev Ed's) To Continue For A Future Project, Images Headlines 3D Effect

//----------------------------------CLOSURE COMPILE SERVICE (MINIFIED)----------------------------------//

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};var container=document.querySelector(".home-hello-header .container"),card=document.querySelector(".header-3d");container.addEventListener("mousemove",function(a){card.style.transform="rotateY("+(window.innerWidth/2-a.pageX)/15+"deg) rotateX("+(window.innerHeight/2-a.pageY)/15*-1+"deg)"});
container.addEventListener("mouseenter",function(a){card.style.transition="all 0.5s ease-out"});container.addEventListener("mouseleave",function(a){card.style.transform="rotateY(0deg) rotateX(0deg)";card.style.transition="all 0.5s ease-in"});