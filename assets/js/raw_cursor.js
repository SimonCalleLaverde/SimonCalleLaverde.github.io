//---------------------------------CURSOR SCRIPTS---------------------------------//

// POSITIONING WITH GSAP AS PER (https://greensock.com/forums/topic/19789-follow-by-mouse/)
// http://ahrengot.com/tutorials/greensock-javascript-animation
var $cursor = $('.cursor');

function moveCircle(e) {
    TweenLite.to($cursor, 0.2, {//0.3
    css: {
      x: e.clientX,
      y: e.clientY
    }
  });
}

$(window).on('mousemove', moveCircle);
$(window).on('scroll', moveCircle);

// HOVER STATES AS PER (https://stackoverflow.com/questions/51281666/animate-custom-cursor-when-hovering-on-a-link)
$(document).mousemove(function(e) {
  const cursor = $('.cursor');
  const target = $(event.target);
  
  // Update position of cursor
  cursor.css('display', 'block');//cursor.css('left', e.clientX - 62.5px).css('top', e.clientY - 62.5px).css('display', 'block');

  //const isLink = target.is('a.link, button.link, input.link, i.fa.link, a.link div, a.link span, a .link');
  const isProject = target.is('.project-thumbnail');
  const isFooter = target.is('footer > a.container');
  const is01 = target.is('.project-1');
  const is02 = target.is('.project-2');
  const is03 = target.is('.project-3');
  const is04 = target.is('.project-4');
  const is05 = target.is('.project-5');
  const is06 = target.is('.project-6');
  const is07 = target.is('.project-7');
  const is08 = target.is('.project-8');
  const is09 = target.is('.project-9');
  const is10 = target.is('.project-10');
  const is11 = target.is('.project-11');
  const is12 = target.is('.project-12');
  const is13 = target.is('.project-13');
  const is14 = target.is('.project-14');
  const is15 = target.is('.project-15');
  const is16 = target.is('.project-16');
  const is17 = target.is('.project-17');
  const is18 = target.is('.project-18');
  const is19 = target.is('.project-19');
  const is20 = target.is('.project-20');
  const is21 = target.is('.project-21');
  const is22 = target.is('.project-22');
  const is23 = target.is('.project-23');
  const is24 = target.is('.project-24');
  const is25 = target.is('.project-25');
  const is26 = target.is('.project-26');
  const is27 = target.is('.project-27');
  const is28 = target.is('.project-28');
  const is29 = target.is('.project-29');
  const is30 = target.is('.project-30');

  //const isLinkHovered = cursor.hasClass('hoveredLink');
  const isProjectHovered = cursor.hasClass('hoveredProject');
  const isFooterHovered = cursor.hasClass('hoveredFooter');
  const is01Hovered = cursor.hasClass('hovered01');
  const is02Hovered = cursor.hasClass('hovered02');
  const is03Hovered = cursor.hasClass('hovered03');
  const is04Hovered = cursor.hasClass('hovered04');
  const is05Hovered = cursor.hasClass('hovered05');
  const is06Hovered = cursor.hasClass('hovered06');
  const is07Hovered = cursor.hasClass('hovered07');
  const is08Hovered = cursor.hasClass('hovered08');
  const is09Hovered = cursor.hasClass('hovered09');
  const is10Hovered = cursor.hasClass('hovered10');
  const is11Hovered = cursor.hasClass('hovered11');
  const is12Hovered = cursor.hasClass('hovered12');
  const is13Hovered = cursor.hasClass('hovered13');
  const is14Hovered = cursor.hasClass('hovered14');
  const is15Hovered = cursor.hasClass('hovered15');
  const is16Hovered = cursor.hasClass('hovered16');
  const is17Hovered = cursor.hasClass('hovered17');
  const is18Hovered = cursor.hasClass('hovered18');
  const is19Hovered = cursor.hasClass('hovered19');
  const is20Hovered = cursor.hasClass('hovered20');
  const is21Hovered = cursor.hasClass('hovered21');
  const is22Hovered = cursor.hasClass('hovered22');
  const is23Hovered = cursor.hasClass('hovered23');
  const is24Hovered = cursor.hasClass('hovered24');
  const is25Hovered = cursor.hasClass('hovered25');
  const is26Hovered = cursor.hasClass('hovered26');
  const is27Hovered = cursor.hasClass('hovered27');
  const is28Hovered = cursor.hasClass('hovered28');
  const is29Hovered = cursor.hasClass('hovered29');
  const is30Hovered = cursor.hasClass('hovered30');

  // Toggle the cursor class if necessary
  // if (isLink && !isLinkHovered) {
  //   cursor.addClass('hoveredLink');
  // } else if (!isLink && isLinkHovered) {
  //   cursor.removeClass('hoveredLink');
  // }

  if (isProject && !isProjectHovered) {
    cursor.addClass('hoveredProject');
  } else if (!isProject && isProjectHovered) {
    cursor.removeClass('hoveredProject');
  }

  if (isFooter && !isFooterHovered) {
    cursor.addClass('hoveredFooter');
  } else if (!isFooter && isFooterHovered) {
    cursor.removeClass('hoveredFooter');
  }

  if (is01 && !is01Hovered) {
    cursor.addClass('hovered01');
  } else if (!is01 && is01Hovered) {
    cursor.removeClass('hovered01');
  }

  if (is02 && !is02Hovered) {
    cursor.addClass('hovered02');
  } else if (!is02 && is02Hovered) {
    cursor.removeClass('hovered02');
  }

  if (is03 && !is03Hovered) {
    cursor.addClass('hovered03');
  } else if (!is03 && is03Hovered) {
    cursor.removeClass('hovered03');
  }

  if (is04 && !is04Hovered) {
    cursor.addClass('hovered04');
  } else if (!is04 && is04Hovered) {
    cursor.removeClass('hovered04');
  }

  if (is05 && !is05Hovered) {
    cursor.addClass('hovered05');
  } else if (!is05 && is05Hovered) {
    cursor.removeClass('hovered05');
  }

  if (is06 && !is06Hovered) {
    cursor.addClass('hovered06');
  } else if (!is06 && is06Hovered) {
    cursor.removeClass('hovered06');
  }

  if (is07 && !is07Hovered) {
    cursor.addClass('hovered07');
  } else if (!is07 && is07Hovered) {
    cursor.removeClass('hovered07');
  }

  if (is08 && !is08Hovered) {
    cursor.addClass('hovered08');
  } else if (!is08 && is08Hovered) {
    cursor.removeClass('hovered08');
  }

  if (is09 && !is09Hovered) {
    cursor.addClass('hovered09');
  } else if (!is09 && is09Hovered) {
    cursor.removeClass('hovered09');
  }

  if (is10 && !is10Hovered) {
    cursor.addClass('hovered10');
  } else if (!is10 && is10Hovered) {
    cursor.removeClass('hovered10');
  }

  if (is11 && !is11Hovered) {
    cursor.addClass('hovered11');
  } else if (!is11 && is11Hovered) {
    cursor.removeClass('hovered11');
  }

  if (is12 && !is12Hovered) {
    cursor.addClass('hovered12');
  } else if (!is12 && is12Hovered) {
    cursor.removeClass('hovered12');
  }

  if (is13 && !is13Hovered) {
    cursor.addClass('hovered13');
  } else if (!is13 && is13Hovered) {
    cursor.removeClass('hovered13');
  }

  if (is14 && !is14Hovered) {
    cursor.addClass('hovered14');
  } else if (!is14 && is14Hovered) {
    cursor.removeClass('hovered14');
  }

  if (is15 && !is15Hovered) {
    cursor.addClass('hovered15');
  } else if (!is15 && is15Hovered) {
    cursor.removeClass('hovered15');
  }

  if (is16 && !is16Hovered) {
    cursor.addClass('hovered16');
  } else if (!is16 && is16Hovered) {
    cursor.removeClass('hovered16');
  }

  if (is17 && !is17Hovered) {
    cursor.addClass('hovered17');
  } else if (!is17 && is17Hovered) {
    cursor.removeClass('hovered17');
  }

  if (is18 && !is18Hovered) {
    cursor.addClass('hovered18');
  } else if (!is18 && is18Hovered) {
    cursor.removeClass('hovered18');
  }

  if (is19 && !is19Hovered) {
    cursor.addClass('hovered19');
  } else if (!is19 && is19Hovered) {
    cursor.removeClass('hovered19');
  }

  if (is20 && !is20Hovered) {
    cursor.addClass('hovered20');
  } else if (!is20 && is20Hovered) {
    cursor.removeClass('hovered20');
  }

  if (is21 && !is21Hovered) {
    cursor.addClass('hovered21');
  } else if (!is21 && is21Hovered) {
    cursor.removeClass('hovered21');
  }

  if (is22 && !is22Hovered) {
    cursor.addClass('hovered22');
  } else if (!is22 && is22Hovered) {
    cursor.removeClass('hovered22');
  }

  if (is23 && !is23Hovered) {
    cursor.addClass('hovered23');
  } else if (!is23 && is23Hovered) {
    cursor.removeClass('hovered23');
  }

  if (is24 && !is24Hovered) {
    cursor.addClass('hovered24');
  } else if (!is24 && is24Hovered) {
    cursor.removeClass('hovered24');
  }

  if (is25 && !is25Hovered) {
    cursor.addClass('hovered25');
  } else if (!is25 && is25Hovered) {
    cursor.removeClass('hovered25');
  }

  if (is26 && !is26Hovered) {
    cursor.addClass('hovered26');
  } else if (!is26 && is26Hovered) {
    cursor.removeClass('hovered26');
  }

  if (is27 && !is27Hovered) {
    cursor.addClass('hovered27');
  } else if (!is27 && is27Hovered) {
    cursor.removeClass('hovered27');
  }

  if (is28 && !is28Hovered) {
    cursor.addClass('hovered28');
  } else if (!is28 && is28Hovered) {
    cursor.removeClass('hovered28');
  }

  if (is29 && !is29Hovered) {
    cursor.addClass('hovered29');
  } else if (!is29 && is29Hovered) {
    cursor.removeClass('hovered29');
  }

  if (is30 && !is30Hovered) {
    cursor.addClass('hovered30');
  } else if (!is30 && is30Hovered) {
    cursor.removeClass('hovered30');
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