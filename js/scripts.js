
var winH = window.innerHeight;
var winW = window.innerWidth;
var range = winH / 3;
var scroll = $(window).scrollTop();

var start = new TimelineMax({delay: 3});

document.addEventListener("DOMContentLoaded", function() {
var isIpadPro;
var ios;


var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    var mac = navigator.userAgent.match(/Mac/i);
    var s = screen.width + 'x' + screen.height;
    var dpr = devicePixelRatio;

    if (ios) {

      if (ios[0] === "iPad") {
        viewportSize();
        isIpadPro = false;

        if (ancho == 1024 && alto == 1366) {

          isIpadPro = true;


        }

        if (ancho == 1366 && alto == 1024) {

          isIpadPro = true;


        }

        if (ancho == 1112 && alto == 834) {

          isIpadPro = true;


        }

        if (ancho == 2048 && alto == 2732) {

          isIpadPro = true;


        }

        if (ancho == 834 && alto == 1112) {

          isIpadPro = true;


        }




      }

    } else if (mac) {
      //viewportSize();
      if (dpr == 2 && (s == '1112x834' || s == '1194x834' || s == '1024x768' || s == '1366x1024' || s == '834x1112' || s == '1024x1366' || s == '834x1194')) {
        isIpadPro = true;
        ios = true;
      }
    }


    return ios; //&& ancho < 1366;
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};



});


paceOptions = {
  elements: false,
  restartOnPushState: false,
  restartOnRequestAfter: false,
  document: true
};

Pace.on("done", function () {
  $('body').css('overflow', 'auto');
  TweenLite.to($('#preloader'), 2, {
    y: -3000,
    ease: Power4.easeInOut,
    delay: 1
   });
  TweenLite.to($('.viewport'), 1.5, {
    opacity: 1,
    ease: Power4.easeInOut,
    delay: 0.5
  });
  start.play()
});




var minus = 0; 

$(document).ready(function () {
  

  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
    
    where = $($(this).attr('href')).offset().top - $('header').height() - 50;

    gsap.to(window, {duration: 0.5, scrollTo: where});
  })
  

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
    }
  });

  var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
    }
  });


  $('.open-feat').on('click', function(){

    $(this).parent('.info').find('p').toggleClass('feat-open');
    $(this).find('img').toggleClass('plus-rotate'); 
    
  })

});
