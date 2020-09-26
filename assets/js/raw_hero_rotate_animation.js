// As Per: https://www.cssscript.com/rotating-text-in-sequence-with-javascript-and-css3/

// Rotate Word One
$(function() {

  var wordsOne = document.getElementsByClassName('word-rotate-1');
  var wordArrayOne = [];
  var currentWordOne = 0;

  wordsOne[currentWordOne].style.opacity = 1;
  for (var i = 0; i < wordsOne.length; i++) {
    splitLettersOne(wordsOne[i]);
  }

  function changeWordOne() {
    var cwOne = wordArrayOne[currentWordOne];
    var nwOne = currentWordOne == wordsOne.length-1 ? wordArrayOne[0] : wordArrayOne[currentWordOne+1];
    for (var i = 0; i < cwOne.length; i++) {
      animateLetterOutOne(cwOne, i);
    }
    
    for (var i = 0; i < nwOne.length; i++) {
      nwOne[i].className = 'letter-one behind';
      nwOne[0].parentElement.style.opacity = 1;
      animateLetterInOne(nwOne, i);
    }
    
    currentWordOne = (currentWordOne == wordArrayOne.length-1) ? 0 : currentWordOne+1;
  }

  function animateLetterOutOne(cwOne, i) {
    setTimeout(function() {
      cwOne[i].className = 'letter-one out';
    }, i*80);
  }

  function animateLetterInOne(nwOne, i) {
    setTimeout(function() {
      nwOne[i].className = 'letter-one in';
    }, 340+(i*80));
  }

  function splitLettersOne(word) {
    var contentOne = word.innerHTML;
    word.innerHTML = '';
    var lettersOne = [];
    for (var i = 0; i < contentOne.length; i++) {
      var letterOne = document.createElement('span');
      letterOne.className = 'letter-one';
      letterOne.innerHTML = contentOne.charAt(i);
      word.appendChild(letterOne);
      lettersOne.push(letterOne);
    }
    
    wordArrayOne.push(lettersOne);
  }

  changeWordOne();
  setInterval(changeWordOne, 9000);

});

// Rotate Word Two
$(function() {

  var wordsTwo = document.getElementsByClassName('word-rotate-2');
  var wordArrayTwo = [];
  var currentWordTwo = 0;

  wordsTwo[currentWordTwo].style.opacity = 1;
  for (var i = 0; i < wordsTwo.length; i++) {
    splitLettersTwo(wordsTwo[i]);
  }

  function changeWordTwo() {
    var cwTwo = wordArrayTwo[currentWordTwo];
    var nwTwo = currentWordTwo == wordsTwo.length-1 ? wordArrayTwo[0] : wordArrayTwo[currentWordTwo+1];
    for (var i = 0; i < cwTwo.length; i++) {
      animateLetterOutTwo(cwTwo, i);
    }
    
    for (var i = 0; i < nwTwo.length; i++) {
      nwTwo[i].className = 'letter-two behind';
      nwTwo[0].parentElement.style.opacity = 1;
      animateLetterInTwo(nwTwo, i);
    }
    
    currentWordTwo = (currentWordTwo == wordArrayTwo.length-1) ? 0 : currentWordTwo+1;
  }

  function animateLetterOutTwo(cwTwo, i) {
    setTimeout(function() {
      cwTwo[i].className = 'letter-two out';
    }, i*80);
  }

  function animateLetterInTwo(nwTwo, i) {
    setTimeout(function() {
      nwTwo[i].className = 'letter-two in';
    }, 340+(i*80));
  }

  function splitLettersTwo(word) {
    var contentTwo = word.innerHTML;
    word.innerHTML = '';
    var lettersTwo = [];
    for (var i = 0; i < contentTwo.length; i++) {
      var letterTwo = document.createElement('span');
      letterTwo.className = 'letter-two';
      letterTwo.innerHTML = contentTwo.charAt(i);
      word.appendChild(letterTwo);
      lettersTwo.push(letterTwo);
    }
    
    wordArrayTwo.push(lettersTwo);
  }

  changeWordTwo();
  setTimeout(() => setInterval(changeWordTwo, 9000), 300);//setTimeout(() => //, 300)

});