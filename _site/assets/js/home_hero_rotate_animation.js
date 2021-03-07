//---------------------------------HOME HERO ROTATE ANIMATION | ORIGINAL (UN-MINIFIED)----------------------------------//

// As Per: https://www.cssscript.com/rotating-text-in-sequence-with-javascript-and-css3/

// // [Desktop] | Rotate Word One
// $(function() {

//   var wordsOne = document.getElementsByClassName('word-rotate-1');
//   var wordArrayOne = [];
//   var currentWordOne = 0;

//   wordsOne[currentWordOne].style.opacity = 1;
//   for (var i = 0; i < wordsOne.length; i++) {
//     splitLettersOne(wordsOne[i]);
//   }

//   function changeWordOne() {
//     var cwOne = wordArrayOne[currentWordOne];
//     var nwOne = currentWordOne == wordsOne.length-1 ? wordArrayOne[0] : wordArrayOne[currentWordOne+1];
//     for (var i = 0; i < cwOne.length; i++) {
//       animateLetterOutOne(cwOne, i);
//     }
    
//     for (var i = 0; i < nwOne.length; i++) {
//       nwOne[i].className = 'letter-one behind';
//       nwOne[0].parentElement.style.opacity = 1;
//       animateLetterInOne(nwOne, i);
//     }
    
//     currentWordOne = (currentWordOne == wordArrayOne.length-1) ? 0 : currentWordOne+1;
//   }

//   function animateLetterOutOne(cwOne, i) {
//     setTimeout(function() {
//       cwOne[i].className = 'letter-one out';
//     }, i*80);
//   }

//   function animateLetterInOne(nwOne, i) {
//     setTimeout(function() {
//       nwOne[i].className = 'letter-one in';
//     }, 340+(i*80));
//   }

//   function splitLettersOne(word) {
//     var contentOne = word.innerHTML;
//     word.innerHTML = '';
//     var lettersOne = [];
//     for (var i = 0; i < contentOne.length; i++) {
//       var letterOne = document.createElement('span');
//       letterOne.className = 'letter-one';
//       letterOne.innerHTML = contentOne.charAt(i);
//       word.appendChild(letterOne);
//       lettersOne.push(letterOne);
//     }
    
//     wordArrayOne.push(lettersOne);
//   }

//   changeWordOne();
//   setInterval(changeWordOne, 8000);

// });

// // [Desktop] | Rotate Word Two
// $(function() {

//   var wordsTwo = document.getElementsByClassName('word-rotate-2');
//   var wordArrayTwo = [];
//   var currentWordTwo = 0;

//   wordsTwo[currentWordTwo].style.opacity = 1;
//   for (var i = 0; i < wordsTwo.length; i++) {
//     splitLettersTwo(wordsTwo[i]);
//   }

//   function changeWordTwo() {
//     var cwTwo = wordArrayTwo[currentWordTwo];
//     var nwTwo = currentWordTwo == wordsTwo.length-1 ? wordArrayTwo[0] : wordArrayTwo[currentWordTwo+1];
//     for (var i = 0; i < cwTwo.length; i++) {
//       animateLetterOutTwo(cwTwo, i);
//     }
    
//     for (var i = 0; i < nwTwo.length; i++) {
//       nwTwo[i].className = 'letter-two behind';
//       nwTwo[0].parentElement.style.opacity = 1;
//       animateLetterInTwo(nwTwo, i);
//     }
    
//     currentWordTwo = (currentWordTwo == wordArrayTwo.length-1) ? 0 : currentWordTwo+1;
//   }

//   function animateLetterOutTwo(cwTwo, i) {
//     setTimeout(function() {
//       cwTwo[i].className = 'letter-two out';
//     }, i*80);
//   }

//   function animateLetterInTwo(nwTwo, i) {
//     setTimeout(function() {
//       nwTwo[i].className = 'letter-two in';
//     }, 340+(i*80));
//   }

//   function splitLettersTwo(word) {
//     var contentTwo = word.innerHTML;
//     word.innerHTML = '';
//     var lettersTwo = [];
//     for (var i = 0; i < contentTwo.length; i++) {
//       var letterTwo = document.createElement('span');
//       letterTwo.className = 'letter-two';
//       letterTwo.innerHTML = contentTwo.charAt(i);
//       word.appendChild(letterTwo);
//       lettersTwo.push(letterTwo);
//     }
    
//     wordArrayTwo.push(lettersTwo);
//   }

//   changeWordTwo();
//   setTimeout(() => setInterval(changeWordTwo, 8000), 300);//setTimeout(() => //, 300)

// });

// // [Mobile] | Rotate Word Three
// $(function() {

//   var wordsThreeMobile = document.getElementsByClassName('word-rotate-3');
//   var wordArrayThreeMobile = [];
//   var currentWordThreeMobile = 0;

//   wordsThreeMobile[currentWordThreeMobile].style.opacity = 1;
//   for (var i = 0; i < wordsThreeMobile.length; i++) {
//     splitLettersThreeMobile(wordsThreeMobile[i]);
//   }

//   function changeWordThreeMobile() {
//     var cwThreeMobile = wordArrayThreeMobile[currentWordThreeMobile];
//     var nwThreeMobile = currentWordThreeMobile == wordsThreeMobile.length-1 ? wordArrayThreeMobile[0] : wordArrayThreeMobile[currentWordThreeMobile+1];
//     for (var i = 0; i < cwThreeMobile.length; i++) {
//       animateLetterOutThreeMobile(cwThreeMobile, i);
//     }
    
//     for (var i = 0; i < nwThreeMobile.length; i++) {
//       nwThreeMobile[i].className = 'letter-three behind';
//       nwThreeMobile[0].parentElement.style.opacity = 1;
//       animateLetterInThreeMobile(nwThreeMobile, i);
//     }
    
//     currentWordThreeMobile = (currentWordThreeMobile == wordArrayThreeMobile.length-1) ? 0 : currentWordThreeMobile+1;
//   }

//   function animateLetterOutThreeMobile(cwThreeMobile, i) {
//     setTimeout(function() {
//       cwThreeMobile[i].className = 'letter-three out';
//     }, i*80);
//   }

//   function animateLetterInThreeMobile(nwThreeMobile, i) {
//     setTimeout(function() {
//       nwThreeMobile[i].className = 'letter-three in';
//     }, 340+(i*80));
//   }

//   function splitLettersThreeMobile(word) {
//     var contentThreeMobile = word.innerHTML;
//     word.innerHTML = '';
//     var lettersThreeMobile = [];
//     for (var i = 0; i < contentThreeMobile.length; i++) {
//       var letterThreeMobile = document.createElement('span');
//       letterThreeMobile.className = 'letter-three';
//       letterThreeMobile.innerHTML = contentThreeMobile.charAt(i);
//       word.appendChild(letterThreeMobile);
//       lettersThreeMobile.push(letterThreeMobile);
//     }
    
//     wordArrayThreeMobile.push(lettersThreeMobile);
//   }

//   changeWordThreeMobile();
//   setInterval(changeWordThreeMobile, 8000);

// });

// // [Mobile] | Rotate Word Four
// $(function() {

//   var wordsFourMobile = document.getElementsByClassName('word-rotate-4');
//   var wordArrayFourMobile = [];
//   var currentWordFourMobile = 0;

//   wordsFourMobile[currentWordFourMobile].style.opacity = 1;
//   for (var i = 0; i < wordsFourMobile.length; i++) {
//     splitLettersFourMobile(wordsFourMobile[i]);
//   }

//   function changeWordFourMobile() {
//     var cwFourMobile = wordArrayFourMobile[currentWordFourMobile];
//     var nwFourMobile = currentWordFourMobile == wordsFourMobile.length-1 ? wordArrayFourMobile[0] : wordArrayFourMobile[currentWordFourMobile+1];
//     for (var i = 0; i < cwFourMobile.length; i++) {
//       animateLetterOutFourMobile(cwFourMobile, i);
//     }
    
//     for (var i = 0; i < nwFourMobile.length; i++) {
//       nwFourMobile[i].className = 'letter-four behind';
//       nwFourMobile[0].parentElement.style.opacity = 1;
//       animateLetterInFourMobile(nwFourMobile, i);
//     }
    
//     currentWordFourMobile = (currentWordFourMobile == wordArrayFourMobile.length-1) ? 0 : currentWordFourMobile+1;
//   }

//   function animateLetterOutFourMobile(cwFourMobile, i) {
//     setTimeout(function() {
//       cwFourMobile[i].className = 'letter-four out';
//     }, i*80);
//   }

//   function animateLetterInFourMobile(nwFourMobile, i) {
//     setTimeout(function() {
//       nwFourMobile[i].className = 'letter-four in';
//     }, 340+(i*80));
//   }

//   function splitLettersFourMobile(word) {
//     var contentFourMobile = word.innerHTML;
//     word.innerHTML = '';
//     var lettersFourMobile = [];
//     for (var i = 0; i < contentFourMobile.length; i++) {
//       var letterFourMobile = document.createElement('span');
//       letterFourMobile.className = 'letter-four';
//       letterFourMobile.innerHTML = contentFourMobile.charAt(i);
//       word.appendChild(letterFourMobile);
//       lettersFourMobile.push(letterFourMobile);
//     }
    
//     wordArrayFourMobile.push(lettersFourMobile);
//   }

//   changeWordFourMobile();
//   setInterval(changeWordFourMobile, 8000);

// });

//----------------------------------CLOSURE COMPILE SERVICE (MINIFIED)----------------------------------//

$(function(){function l(){for(var c=e[d],a=d==f.length-1?e[0]:e[d+1],b=0;b<c.length;b++)m(c,b);for(b=0;b<a.length;b++)a[b].className="letter-one behind",a[0].parentElement.style.opacity=1,n(a,b);d=d==e.length-1?0:d+1}function m(c,a){setTimeout(function(){c[a].className="letter-one out"},80*a)}function n(c,a){setTimeout(function(){c[a].className="letter-one in"},340+80*a)}function p(c){var a=c.innerHTML;c.innerHTML="";for(var b=[],h=0;h<a.length;h++){var g=document.createElement("span");g.className=
"letter-one";g.innerHTML=a.charAt(h);c.appendChild(g);b.push(g)}e.push(b)}var f=document.getElementsByClassName("word-rotate-1"),e=[],d=0;f[d].style.opacity=1;for(var k=0;k<f.length;k++)p(f[k]);l();setInterval(l,8E3)});
$(function(){function l(){for(var c=e[d],a=d==f.length-1?e[0]:e[d+1],b=0;b<c.length;b++)m(c,b);for(b=0;b<a.length;b++)a[b].className="letter-two behind",a[0].parentElement.style.opacity=1,n(a,b);d=d==e.length-1?0:d+1}function m(c,a){setTimeout(function(){c[a].className="letter-two out"},80*a)}function n(c,a){setTimeout(function(){c[a].className="letter-two in"},340+80*a)}function p(c){var a=c.innerHTML;c.innerHTML="";for(var b=[],h=0;h<a.length;h++){var g=document.createElement("span");g.className=
"letter-two";g.innerHTML=a.charAt(h);c.appendChild(g);b.push(g)}e.push(b)}var f=document.getElementsByClassName("word-rotate-2"),e=[],d=0;f[d].style.opacity=1;for(var k=0;k<f.length;k++)p(f[k]);l();setTimeout(function(){return setInterval(l,8E3)},300)});
$(function(){function l(){for(var c=e[d],a=d==f.length-1?e[0]:e[d+1],b=0;b<c.length;b++)m(c,b);for(b=0;b<a.length;b++)a[b].className="letter-three behind",a[0].parentElement.style.opacity=1,n(a,b);d=d==e.length-1?0:d+1}function m(c,a){setTimeout(function(){c[a].className="letter-three out"},80*a)}function n(c,a){setTimeout(function(){c[a].className="letter-three in"},340+80*a)}function p(c){var a=c.innerHTML;c.innerHTML="";for(var b=[],h=0;h<a.length;h++){var g=document.createElement("span");g.className=
"letter-three";g.innerHTML=a.charAt(h);c.appendChild(g);b.push(g)}e.push(b)}var f=document.getElementsByClassName("word-rotate-3"),e=[],d=0;f[d].style.opacity=1;for(var k=0;k<f.length;k++)p(f[k]);l();setInterval(l,8E3)});
$(function(){function l(){for(var c=e[d],a=d==f.length-1?e[0]:e[d+1],b=0;b<c.length;b++)m(c,b);for(b=0;b<a.length;b++)a[b].className="letter-four behind",a[0].parentElement.style.opacity=1,n(a,b);d=d==e.length-1?0:d+1}function m(c,a){setTimeout(function(){c[a].className="letter-four out"},80*a)}function n(c,a){setTimeout(function(){c[a].className="letter-four in"},340+80*a)}function p(c){var a=c.innerHTML;c.innerHTML="";for(var b=[],h=0;h<a.length;h++){var g=document.createElement("span");g.className=
"letter-four";g.innerHTML=a.charAt(h);c.appendChild(g);b.push(g)}e.push(b)}var f=document.getElementsByClassName("word-rotate-4"),e=[],d=0;f[d].style.opacity=1;for(var k=0;k<f.length;k++)p(f[k]);l();setInterval(l,8E3)});