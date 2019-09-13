// Smooth Scroll Script
$(function() {
  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    var customoffset = 0;//49
    $('html, body').animate({scrollTop:target_offset - customoffset}, 1200);
  });
});

// Switch Theme Colour
$(function() {
  $('.switch-theme-colour').on('click', function(e) {
    $('.theme-colour').toggleClass("black white");
    $('.switch-theme-colour').toggleClass("d-none d-inline-block");//btn-outline-white btn-outline-black
    $('.text-element').toggleClass("d-none d-inline-block");
    //$('.profile-picture').toggleClass("d-none d-inline-block");
    //$('.text-bootstrap-alternate').toggleClass("text-bootstrap-lighten text-bootstrap");
    e.preventDefault();
  });
});

// Change Class After Scrolling Some Distance | As Per (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
$(function() {
  //caches a jQuery object containing the body element
  var body = $("body");
  $(window).scroll(function() {
    //var scroll = $(window).scrollTop();
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom >= 50) {//scroll
      body.removeClass("white").addClass("black");
    } else if (scrollBottom <= 50) {
      body.removeClass("black").addClass("white");
    }
  });
});

// // Change Class After Scrolling Some Element | As Per (https://stackoverflow.com/questions/29717119/how-to-change-class-after-scroll-somewhere/29717259)
// $(function() {
//   var body = $("body");
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     var objectSelect = $("#section_2");
//     var objectPosition = objectSelect.offset().top;
//     if (scroll > objectPosition) {
//       body.removeClass("black").addClass("white");//$("body").addClass("change");
//     } else {
//       body.removeClass("white").addClass("black");//$("body").removeClass("change");
//     }
//   });
// });