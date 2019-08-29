// // EXAMPLE 1 (https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow)
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
// 	//console.log(e);
// 	cursor.setAttribute("style", "display:block; top:"+(e.pageY - 25)+"px; left:"+(e.pageX - 25)+"px;");
// })

// document.addEventListener('click', () => {
// 	cursor.classList.add("cursor-on-click");
// 	setTimeout(() => {
// 		cursor.classList.remove("cursor-on-click");
// 	}, 500)
// })

// EXAMPLE 2 (https://stackoverflow.com/questions/51281666/animate-custom-cursor-when-hovering-on-a-link)
$(document).mousemove(function(e) {
  const cursor = $('.cursor');
  const target = $(event.target);
  
  // update position of cursor
  cursor.css('left', e.clientX - 25).css('top', e.clientY - 25).css('display', 'block');
  
  const isLinkTag = target.is('a');
  const isImgTag = target.is('img');
  const isLinkHovered = cursor.hasClass('hoveredLink');
  const isImgHovered = cursor.hasClass('hoveredImg');
  
  // toggle the cursor class if necessary 
  if(isLinkTag && !isLinkHovered) {
    cursor.addClass('hoveredLink');
  } else if(!isLinkTag && isLinkHovered) {
    cursor.removeClass('hoveredLink');
  }

  if(isImgTag && !isImgHovered) {
    cursor.addClass('hoveredImg');
  } else if(!isImgTag && isImgHovered) {
    cursor.removeClass('hoveredImg');
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