const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	//console.log(e);
	cursor.setAttribute("style", "display:block; top:"+(e.pageY - 60)+"px; left:"+(e.pageX - 60)+"px;")
})

document.addEventListener('click', () => {
	cursor.classList.add("cursor-on-click");
	setTimeout(() => {
		cursor.classList.remove("cursor-on-click");
	}, 500)
})



// TESTINGS

// $(function(){
//   $(".link").addEventListener("mouseover", myFunction);
	
// 	function myFunction() {
// 		cursor.classList.add("animate-on-hover");
// 	}
// });



// $('.link').hover(
// 	function(){ $(.cursor).addClass('animate-on-hover') },
// 	function(){ $(.cursor).removeClass('animate-on-hover') }
// )