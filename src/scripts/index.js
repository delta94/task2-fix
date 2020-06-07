import "./../styles/main.scss";
import "./slick/slick";
require("./fontawesome.min.js");
// import Parallax from 'parallax-scroll';
// require('./scroll.js');

// if (process.env.NODE_ENV !== 'production') {
// 	require('./../index.pug');
// }
// // PARALLAX SCROLLING EFFECT
// const parallax = new Parallax('.js-parallax', {
// 	speed: 0.12 // Anything over 0.5 looks silly
// });
// parallax.animate();

// // RESPONSIVE MOBILE MENU
// const container = document.getElementById('mobile-menu');
// const ham = document.getElementById('hamburger');
// const collapse = document.getElementsByClassName('collapse').item(0);
// ham.onclick = function () {
// 	container.classList.toggle('opened');
// };
// collapse.onclick = function () { // close the menu if click happens
// 	container.classList.toggle('opened');
// };

$(".carousel-wrapper").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  speed: 2000,
  arrows: false,
});

$(".carousel-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplaySpeed: 3000,
  autoplay: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  speed: 2000,
  nextArrow: $(".bannerPrimary__slider > .next").get(0),
  prevArrow: $(".bannerPrimary__slider > .previous").get(0),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 788,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1044,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$(".product-carousel-wrapper").slick({
  prevArrow:
    '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
  nextArrow:
    '<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
