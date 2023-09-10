$(function () {

  'use strict';

  $(window).scroll(function(){

      if ($(window).scrollTop() >= 50) {
          $('.main-header').addClass('fixed-header');
      }
      else {
          $('.main-header').removeClass('fixed-header');
      }

  });

  /* Toggle Navbar Menu - Small Screen */

  var clicked = false;
  var $header = $('.main-header'),
      $mobileMenu = $('#m-menu');
  $header.find('.toggle-nav').click(function () {
      var $this = $(this);
      $this.toggleClass('active');
      if (!clicked) {
          clicked = true;
          $mobileMenu.toggleClass('active');
          setTimeout(function () {
              clicked = false;
          });
      }
  });

  var clicked = false;
  var $mobileMenuu = $('#m-menu');
  $mobileMenuu.find('.toggle-nav').click(function () {
      var $this = $(this);
      $this.addClass('active');
      if (!clicked) {
          clicked = true;
          $mobileMenuu.toggleClass('active');
          setTimeout(function () {
              clicked = false;
          });
      }
  });
  // :not(".btnLink")
  $('#m-menu .nav-items li:not(".loginBtn") a').on('click', function() {
      $('#m-menu').removeClass('active');
  });

  $('.closeHidden').on('click', function() {
    $('#m-menu').removeClass('active');
  });

  

  $('.logModalBtn').on('click', function() {
    $('#m-menu').removeClass('active');
  });

  
  var ourServices = new Swiper ('.our-services .swiper-container', {
    loop: false,
    spaceBetween: 20,
    autoplay: false,
    noSwiping: true,
    speed: 500,
    breakpoints: {
      340: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        speed: 300,
      },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          speed: 300,
        },
        768: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        1024: {
            slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1100: {
            slidesPerView: 2.2,
          spaceBetween: 20,
        },
      },

});


var ourServices = new Swiper ('.works .swiper-container', {
  loop: false,
  spaceBetween: 20,
  autoplay: false,
  noSwiping: true,
  speed: 500,
  breakpoints: {
    340: {
      slidesPerView: 1.2,
      spaceBetween: 15,
      speed: 300,
    },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        speed: 300,
      },
      768: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      991: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      1024: {
          slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1100: {
          slidesPerView: 3.2,
        spaceBetween: 20,
      },
    },

});


var partners = new Swiper ('.partners .swiper-container', {
  loop: false,
  spaceBetween: 20,
  autoplay: false,
  loop: true,
  autoplay: false,
  speed: 500,
  breakpoints: {
    340: {
      slidesPerView: 3,
      spaceBetween: 15,
      speed: 300,
    },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 300,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      1024: {
          slidesPerView: 7,
        spaceBetween: 20,
      },
      1100: {
          slidesPerView: 7,
        spaceBetween: 20,
      },
    },

});

  // Youtube Player 

  // const player = new Plyr(document.querySelector('.player'));
//   const players = Array.from(document.querySelectorAll('.player')).map(p => new Plyr(p));
//   const playersModal = Array.from(document.querySelectorAll('.playerModal')).map(p => new Plyr(p));

//   $('#YoutubeModal').on('hide.bs.modal',function (){

//     playersModal.forEach(function(player) {
//           player.pause();
//     });
// });

$('#YoutubeModal').on('show.bs.modal',function (){

  playersModal.forEach(function(player) {
        player.play();
  });
});

});


$(function() {
$('select').niceSelect();

$('.ss_wrap_3 .ss_btn').on('click', function() {
  $(this).toggleClass('active');
})
});



$(document).ready(function () {
$('.modal').on('shown.bs.modal', function() {
    $(this).find('[autofocus]').focus();
});
$('.modal').on('show.bs.modal', function(e) {
    var activeElement = document.activeElement;
    $(this).on('hidden.bs.modal', function () {
        activeElement.focus();
        $(this).off('hidden.bs.modal');    
    });
});

});



function isNumberKey(txt, evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode == 46) {

      if (evt.target.value.length === 0) {
          evt.preventDefault();
          return false;
      }

      // if there are dots already 
      if (evt.target.value.indexOf('.') !== -1) {
          evt.preventDefault();
          return false;
      }

      return true;
  } else {
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
  }
  return true;
}


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});