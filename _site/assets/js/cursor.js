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
  
  const isLink = target.is('a > span > i, a > span, a > i, a > u, a > p, a > h1, a > h2, a > h3, a > h4, a > h5, a > h6, i.fa.link');//a::after, a::before//.nav-social-media//a
  const isImg = target.is('img, .glitch-img, .parallax-image');
  const isProject = target.is('.project-thumbnail');//figure
  const isModal = target.is('.modal, .modal div, .modal p, .modal h1, .modal h2, .modal h3, .modal h4, .modal h5, .modal h6, .modal img, .modal a, .modal button, .modal span');

  const isLinkHovered = cursor.hasClass('hoveredLink');
  const isImgHovered = cursor.hasClass('hoveredImg');
  const isProjectHovered = cursor.hasClass('hoveredProject');
  const isModalHovered = cursor.hasClass('hoveredModal');
  
  // toggle the cursor class if necessary 
  if(isLink && !isLinkHovered) {
    cursor.addClass('hoveredLink');
  } else if(!isLink && isLinkHovered) {
    cursor.removeClass('hoveredLink');
  }

  if(isImg && !isImgHovered) {
    cursor.addClass('hoveredImg');
  } else if(!isImg && isImgHovered) {
    cursor.removeClass('hoveredImg');
  }

  if(isProject && !isProjectHovered) {
    cursor.addClass('hoveredProject');
  } else if(!isProject && isProjectHovered) {
    cursor.removeClass('hoveredProject');
  }

  if(isModal && !isModalHovered) {
    cursor.addClass('hoveredModal');
  } else if(!isModal && isModalHovered) {
    cursor.removeClass('hoveredModal');
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