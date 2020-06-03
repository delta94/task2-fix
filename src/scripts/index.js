import './../styles/main.scss';
import './slick/slick';
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

$('.carousel-wrapper').slick({
	// infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    autoplay: false,
    // speed: 2000,
    arrows: false
});
