import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      670: {
        slidesPerView: 3,
        spaceBetween: 60
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
  });
    const swiper2 = new Swiper('.swiper2', {
        autoplay: {
            delay: 5000,
          },
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
     
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
  });
  const swiper3 = new Swiper('.swiper3', {
    autoplay: {
        delay: 5000,
      },
// Optional parameters
direction: 'horizontal',
loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},
breakpoints: {
 
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  }
},

// Navigation arrows
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
});