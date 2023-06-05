$(document).ready(function(){
  $('.background-images').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonhover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

    //fancybox
  $(".photo a").fancybox();

  //parallax//
  $('.parallax').parallax({ imageSrc: "images/img4.jpg" });
  //mobile-menu
  $(".menubtn").click(function() {
    $('.menuholder').addClass("menuholderadd");
});
  $(".cross").click(function() {
    $('.menuholder').removeClass("menuholderadd");
});

  $(".hashchild .newadd").click(function() {
    $(this).parents('.hashchild').children('.submenu').slideToggle();
});
//scroll-top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//wow
new WOW().init();

//Sticky-navbar
$(window).scroll(function() {
  if ($(this).scrollTop() > 200){  
      $('body').addClass("sticky");
    }
    else{
      $('body').removeClass("sticky");
    }
  });

   //smooth js
   $('.list').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});
  
