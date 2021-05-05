//---------------------------------CURSOR SCRIPTS | ORIGINAL (UN-MINIFIED)---------------------------------//

// // POSITIONING WITH GSAP AS PER (https://greensock.com/forums/topic/19789-follow-by-mouse/)
// // http://ahrengot.com/tutorials/greensock-javascript-animation
// var $cursor = $('.cursor');

// function moveCircle(e) {
//     TweenLite.to($cursor, 0.2, {//0.3
//     css: {
//       x: e.clientX,
//       y: e.clientY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);

// // HOVER STATES AS PER (https://stackoverflow.com/questions/51281666/animate-custom-cursor-when-hovering-on-a-link)
// $(document).mousemove(function(e) {
//   const cursor = $('.cursor');
//   const target = $(event.target);
  
//   // Update position of cursor
//   cursor.css('display', 'block');//cursor.css('left', e.clientX - 62.5px).css('top', e.clientY - 62.5px).css('display', 'block');

//   //const isLink = target.is('a.link, button.link, input.link, i.fa.link, a.link div, a.link span, a .link');
//   const isProject = target.is('.project-thumbnail');
//   const isFooter = target.is('footer > a.container');
//   const is01 = target.is('.project-1');
//   const is02 = target.is('.project-2');
//   const is03 = target.is('.project-3');
//   const is04 = target.is('.project-4');
//   const is05 = target.is('.project-5');
//   const is06 = target.is('.project-6');
//   const is07 = target.is('.project-7');
//   const is08 = target.is('.project-8');
//   const is09 = target.is('.project-9');
//   const is10 = target.is('.project-10');
//   const is11 = target.is('.project-11');
//   const is12 = target.is('.project-12');
//   const is13 = target.is('.project-13');
//   const is14 = target.is('.project-14');
//   const is15 = target.is('.project-15');
//   const is16 = target.is('.project-16');
//   const is17 = target.is('.project-17');
//   const is18 = target.is('.project-18');
//   const is19 = target.is('.project-19');
//   const is20 = target.is('.project-20');
//   const is21 = target.is('.project-21');
//   const is22 = target.is('.project-22');
//   const is23 = target.is('.project-23');
//   const is24 = target.is('.project-24');
//   const is25 = target.is('.project-25');
//   const is26 = target.is('.project-26');
//   const is27 = target.is('.project-27');
//   const is28 = target.is('.project-28');
//   const is29 = target.is('.project-29');
//   const is30 = target.is('.project-30');

//   //const isLinkHovered = cursor.hasClass('hoveredLink');
//   const isProjectHovered = cursor.hasClass('hoveredProject');
//   const isFooterHovered = cursor.hasClass('hoveredFooter');
//   const is01Hovered = cursor.hasClass('hovered01');
//   const is02Hovered = cursor.hasClass('hovered02');
//   const is03Hovered = cursor.hasClass('hovered03');
//   const is04Hovered = cursor.hasClass('hovered04');
//   const is05Hovered = cursor.hasClass('hovered05');
//   const is06Hovered = cursor.hasClass('hovered06');
//   const is07Hovered = cursor.hasClass('hovered07');
//   const is08Hovered = cursor.hasClass('hovered08');
//   const is09Hovered = cursor.hasClass('hovered09');
//   const is10Hovered = cursor.hasClass('hovered10');
//   const is11Hovered = cursor.hasClass('hovered11');
//   const is12Hovered = cursor.hasClass('hovered12');
//   const is13Hovered = cursor.hasClass('hovered13');
//   const is14Hovered = cursor.hasClass('hovered14');
//   const is15Hovered = cursor.hasClass('hovered15');
//   const is16Hovered = cursor.hasClass('hovered16');
//   const is17Hovered = cursor.hasClass('hovered17');
//   const is18Hovered = cursor.hasClass('hovered18');
//   const is19Hovered = cursor.hasClass('hovered19');
//   const is20Hovered = cursor.hasClass('hovered20');
//   const is21Hovered = cursor.hasClass('hovered21');
//   const is22Hovered = cursor.hasClass('hovered22');
//   const is23Hovered = cursor.hasClass('hovered23');
//   const is24Hovered = cursor.hasClass('hovered24');
//   const is25Hovered = cursor.hasClass('hovered25');
//   const is26Hovered = cursor.hasClass('hovered26');
//   const is27Hovered = cursor.hasClass('hovered27');
//   const is28Hovered = cursor.hasClass('hovered28');
//   const is29Hovered = cursor.hasClass('hovered29');
//   const is30Hovered = cursor.hasClass('hovered30');

//   // Toggle the cursor class if necessary
//   // if (isLink && !isLinkHovered) {
//   //   cursor.addClass('hoveredLink');
//   // } else if (!isLink && isLinkHovered) {
//   //   cursor.removeClass('hoveredLink');
//   // }

//   if (isProject && !isProjectHovered) {
//     cursor.addClass('hoveredProject');
//   } else if (!isProject && isProjectHovered) {
//     cursor.removeClass('hoveredProject');
//   }

//   if (isFooter && !isFooterHovered) {
//     cursor.addClass('hoveredFooter');
//   } else if (!isFooter && isFooterHovered) {
//     cursor.removeClass('hoveredFooter');
//   }

//   if (is01 && !is01Hovered) {
//     cursor.addClass('hovered01');
//   } else if (!is01 && is01Hovered) {
//     cursor.removeClass('hovered01');
//   }

//   if (is02 && !is02Hovered) {
//     cursor.addClass('hovered02');
//   } else if (!is02 && is02Hovered) {
//     cursor.removeClass('hovered02');
//   }

//   if (is03 && !is03Hovered) {
//     cursor.addClass('hovered03');
//   } else if (!is03 && is03Hovered) {
//     cursor.removeClass('hovered03');
//   }

//   if (is04 && !is04Hovered) {
//     cursor.addClass('hovered04');
//   } else if (!is04 && is04Hovered) {
//     cursor.removeClass('hovered04');
//   }

//   if (is05 && !is05Hovered) {
//     cursor.addClass('hovered05');
//   } else if (!is05 && is05Hovered) {
//     cursor.removeClass('hovered05');
//   }

//   if (is06 && !is06Hovered) {
//     cursor.addClass('hovered06');
//   } else if (!is06 && is06Hovered) {
//     cursor.removeClass('hovered06');
//   }

//   if (is07 && !is07Hovered) {
//     cursor.addClass('hovered07');
//   } else if (!is07 && is07Hovered) {
//     cursor.removeClass('hovered07');
//   }

//   if (is08 && !is08Hovered) {
//     cursor.addClass('hovered08');
//   } else if (!is08 && is08Hovered) {
//     cursor.removeClass('hovered08');
//   }

//   if (is09 && !is09Hovered) {
//     cursor.addClass('hovered09');
//   } else if (!is09 && is09Hovered) {
//     cursor.removeClass('hovered09');
//   }

//   if (is10 && !is10Hovered) {
//     cursor.addClass('hovered10');
//   } else if (!is10 && is10Hovered) {
//     cursor.removeClass('hovered10');
//   }

//   if (is11 && !is11Hovered) {
//     cursor.addClass('hovered11');
//   } else if (!is11 && is11Hovered) {
//     cursor.removeClass('hovered11');
//   }

//   if (is12 && !is12Hovered) {
//     cursor.addClass('hovered12');
//   } else if (!is12 && is12Hovered) {
//     cursor.removeClass('hovered12');
//   }

//   if (is13 && !is13Hovered) {
//     cursor.addClass('hovered13');
//   } else if (!is13 && is13Hovered) {
//     cursor.removeClass('hovered13');
//   }

//   if (is14 && !is14Hovered) {
//     cursor.addClass('hovered14');
//   } else if (!is14 && is14Hovered) {
//     cursor.removeClass('hovered14');
//   }

//   if (is15 && !is15Hovered) {
//     cursor.addClass('hovered15');
//   } else if (!is15 && is15Hovered) {
//     cursor.removeClass('hovered15');
//   }

//   if (is16 && !is16Hovered) {
//     cursor.addClass('hovered16');
//   } else if (!is16 && is16Hovered) {
//     cursor.removeClass('hovered16');
//   }

//   if (is17 && !is17Hovered) {
//     cursor.addClass('hovered17');
//   } else if (!is17 && is17Hovered) {
//     cursor.removeClass('hovered17');
//   }

//   if (is18 && !is18Hovered) {
//     cursor.addClass('hovered18');
//   } else if (!is18 && is18Hovered) {
//     cursor.removeClass('hovered18');
//   }

//   if (is19 && !is19Hovered) {
//     cursor.addClass('hovered19');
//   } else if (!is19 && is19Hovered) {
//     cursor.removeClass('hovered19');
//   }

//   if (is20 && !is20Hovered) {
//     cursor.addClass('hovered20');
//   } else if (!is20 && is20Hovered) {
//     cursor.removeClass('hovered20');
//   }

//   if (is21 && !is21Hovered) {
//     cursor.addClass('hovered21');
//   } else if (!is21 && is21Hovered) {
//     cursor.removeClass('hovered21');
//   }

//   if (is22 && !is22Hovered) {
//     cursor.addClass('hovered22');
//   } else if (!is22 && is22Hovered) {
//     cursor.removeClass('hovered22');
//   }

//   if (is23 && !is23Hovered) {
//     cursor.addClass('hovered23');
//   } else if (!is23 && is23Hovered) {
//     cursor.removeClass('hovered23');
//   }

//   if (is24 && !is24Hovered) {
//     cursor.addClass('hovered24');
//   } else if (!is24 && is24Hovered) {
//     cursor.removeClass('hovered24');
//   }

//   if (is25 && !is25Hovered) {
//     cursor.addClass('hovered25');
//   } else if (!is25 && is25Hovered) {
//     cursor.removeClass('hovered25');
//   }

//   if (is26 && !is26Hovered) {
//     cursor.addClass('hovered26');
//   } else if (!is26 && is26Hovered) {
//     cursor.removeClass('hovered26');
//   }

//   if (is27 && !is27Hovered) {
//     cursor.addClass('hovered27');
//   } else if (!is27 && is27Hovered) {
//     cursor.removeClass('hovered27');
//   }

//   if (is28 && !is28Hovered) {
//     cursor.addClass('hovered28');
//   } else if (!is28 && is28Hovered) {
//     cursor.removeClass('hovered28');
//   }

//   if (is29 && !is29Hovered) {
//     cursor.addClass('hovered29');
//   } else if (!is29 && is29Hovered) {
//     cursor.removeClass('hovered29');
//   }

//   if (is30 && !is30Hovered) {
//     cursor.addClass('hovered30');
//   } else if (!is30 && is30Hovered) {
//     cursor.removeClass('hovered30');
//   }
// });

// $(document).mouseleave(function(e) {
//   const cursor = $('.cursor');
//   cursor.hide()
// });

// $(document).mouseenter(function(e) {
//   const cursor = $('.cursor');
//   cursor.show()
// });

//----------------------------------CLOSURE COMPILE SERVICE (MINIFIED)----------------------------------//

var $cursor=$(".cursor");function moveCircle(a){TweenLite.to($cursor,.2,{css:{x:a.clientX,y:a.clientY}})}$(window).on("mousemove",moveCircle);
$(document).mousemove(function(a){a=$(".cursor");var b=$(event.target);a.css("display","block");var c=b.is(".project-thumbnail"),d=b.is("footer > a.container"),e=b.is(".project-1"),f=b.is(".project-2"),g=b.is(".project-3"),h=b.is(".project-4"),k=b.is(".project-5"),l=b.is(".project-6"),m=b.is(".project-7"),n=b.is(".project-8"),p=b.is(".project-9"),q=b.is(".project-10"),r=b.is(".project-11"),t=b.is(".project-12"),u=b.is(".project-13"),v=b.is(".project-14"),w=b.is(".project-15"),x=b.is(".project-16"),
y=b.is(".project-17"),z=b.is(".project-18"),A=b.is(".project-19"),B=b.is(".project-20"),C=b.is(".project-21"),D=b.is(".project-22"),E=b.is(".project-23"),F=b.is(".project-24"),G=b.is(".project-25"),H=b.is(".project-26"),I=b.is(".project-27"),J=b.is(".project-28"),K=b.is(".project-29");b=b.is(".project-30");var L=a.hasClass("hoveredProject"),M=a.hasClass("hoveredFooter"),N=a.hasClass("hovered01"),O=a.hasClass("hovered02"),P=a.hasClass("hovered03"),Q=a.hasClass("hovered04"),R=a.hasClass("hovered05"),
S=a.hasClass("hovered06"),T=a.hasClass("hovered07"),U=a.hasClass("hovered08"),V=a.hasClass("hovered09"),W=a.hasClass("hovered10"),X=a.hasClass("hovered11"),Y=a.hasClass("hovered12"),Z=a.hasClass("hovered13"),aa=a.hasClass("hovered14"),ba=a.hasClass("hovered15"),ca=a.hasClass("hovered16"),da=a.hasClass("hovered17"),ea=a.hasClass("hovered18"),fa=a.hasClass("hovered19"),ha=a.hasClass("hovered20"),ia=a.hasClass("hovered21"),ja=a.hasClass("hovered22"),ka=a.hasClass("hovered23"),la=a.hasClass("hovered24"),
ma=a.hasClass("hovered25"),na=a.hasClass("hovered26"),oa=a.hasClass("hovered27"),pa=a.hasClass("hovered28"),qa=a.hasClass("hovered29"),ra=a.hasClass("hovered30");c&&!L?a.addClass("hoveredProject"):!c&&L&&a.removeClass("hoveredProject");d&&!M?a.addClass("hoveredFooter"):!d&&M&&a.removeClass("hoveredFooter");e&&!N?a.addClass("hovered01"):!e&&N&&a.removeClass("hovered01");f&&!O?a.addClass("hovered02"):!f&&O&&a.removeClass("hovered02");g&&!P?a.addClass("hovered03"):!g&&P&&a.removeClass("hovered03");h&&
!Q?a.addClass("hovered04"):!h&&Q&&a.removeClass("hovered04");k&&!R?a.addClass("hovered05"):!k&&R&&a.removeClass("hovered05");l&&!S?a.addClass("hovered06"):!l&&S&&a.removeClass("hovered06");m&&!T?a.addClass("hovered07"):!m&&T&&a.removeClass("hovered07");n&&!U?a.addClass("hovered08"):!n&&U&&a.removeClass("hovered08");p&&!V?a.addClass("hovered09"):!p&&V&&a.removeClass("hovered09");q&&!W?a.addClass("hovered10"):!q&&W&&a.removeClass("hovered10");r&&!X?a.addClass("hovered11"):!r&&X&&a.removeClass("hovered11");
t&&!Y?a.addClass("hovered12"):!t&&Y&&a.removeClass("hovered12");u&&!Z?a.addClass("hovered13"):!u&&Z&&a.removeClass("hovered13");v&&!aa?a.addClass("hovered14"):!v&&aa&&a.removeClass("hovered14");w&&!ba?a.addClass("hovered15"):!w&&ba&&a.removeClass("hovered15");x&&!ca?a.addClass("hovered16"):!x&&ca&&a.removeClass("hovered16");y&&!da?a.addClass("hovered17"):!y&&da&&a.removeClass("hovered17");z&&!ea?a.addClass("hovered18"):!z&&ea&&a.removeClass("hovered18");A&&!fa?a.addClass("hovered19"):!A&&fa&&a.removeClass("hovered19");
B&&!ha?a.addClass("hovered20"):!B&&ha&&a.removeClass("hovered20");C&&!ia?a.addClass("hovered21"):!C&&ia&&a.removeClass("hovered21");D&&!ja?a.addClass("hovered22"):!D&&ja&&a.removeClass("hovered22");E&&!ka?a.addClass("hovered23"):!E&&ka&&a.removeClass("hovered23");F&&!la?a.addClass("hovered24"):!F&&la&&a.removeClass("hovered24");G&&!ma?a.addClass("hovered25"):!G&&ma&&a.removeClass("hovered25");H&&!na?a.addClass("hovered26"):!H&&na&&a.removeClass("hovered26");I&&!oa?a.addClass("hovered27"):!I&&oa&&
a.removeClass("hovered27");J&&!pa?a.addClass("hovered28"):!J&&pa&&a.removeClass("hovered28");K&&!qa?a.addClass("hovered29"):!K&&qa&&a.removeClass("hovered29");b&&!ra?a.addClass("hovered30"):!b&&ra&&a.removeClass("hovered30")});$(document).mouseleave(function(a){$(".cursor").hide()});$(document).mouseenter(function(a){$(".cursor").show()});