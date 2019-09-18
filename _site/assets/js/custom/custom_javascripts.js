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

// Change Some Class After Scrolling Some Distance | As Per, But Modified Now (https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll)
$(function() {
  //caches a jQuery object containing the body element
  var body = $("body");
  $(window).scroll(function() {
    //var scroll = $(window).scrollTop();
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom >= 730) {//scroll//50
      body.removeClass("white").addClass("black");
    } else if (scrollBottom <= 730) {//50
      body.removeClass("black").addClass("white");
    }
  });
});

// Change Some Class After Scrolling Some Element | As Per, But Modified Now (https://stackoverflow.com/questions/29717119/how-to-change-class-after-scroll-somewhere/29717259)
$(function() {
  var changeFeaturesDiv = $(".change-features");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var objectSelect = $("#section_2, #work_section");
    var objectPosition = objectSelect.offset().top;
    if (scroll > objectPosition) {
      changeFeaturesDiv.removeClass("show-it").addClass("hide-it");//$("body").addClass("change");
    } else if (scroll < objectPosition) {
      changeFeaturesDiv.removeClass("hide-it").addClass("show-it");//$("body").removeClass("change");
    }
  });
});

// Initialize Slick Carousel
$(document).ready(function(){
  $('.slick-carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    //slidesToScroll: 1,
    //draggable: true,//default
    //swipe: true,//default
    swipeToSlide: true,
    arrows: true,
    centerMode: true,
    variableWidth: false,
    adaptiveHeight: false,
    //autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    //pauseOnFocus: true,//default
    //fade: true,
    //cssEase: 'linear'
    asNavFor: '.slick-as-nav-for'
  });
  $('.slick-as-nav-for').slick({
    dots: false,
    infinite: false,
    slidesToShow: 6,
    //slidesToScroll: 1,
    //draggable: true,//default
    //swipe: true,//default
    swipeToSlide: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slick-carousel'
  });
});

// Show Message Missing Features
$(function() {
  $('.show-message-button').on('click', function() {//(e)
    var $this = $('.show-message').removeClass('hide-it');//$('.show-message').removeClass('hide-it');
    window.setTimeout(function() {//setTimeout(function() {
      $this.addClass('hide-it');//$('.show-message').addClass('hide-it');
    }, 3000);
    //e.preventDefault();
  });
});