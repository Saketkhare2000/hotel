// const scroll = new LocomotiveScroll({
//   el: document.querySelector('body'),
//   smooth: true,
// });

// const book = document.querySelectorAll('.arrow');

$(function () {
  $(document).scroll(function () {
    var $nav = $('.navbar ');
    $nav.toggleClass('scrolled', $(this).scrollTop() > 10);
  });
});

// const hover = gsap.to(book, {
//   x: '20px',
// });

// const tl = gsap.timeline({defaults: {ease: 'power2'}});
// tl.to('.hero-img', {
//   duration: 1,
//   scale: 1.1,
// });
// tl.to('.sec1-img', {
//   x: '-70px',
//   opacity: 1,
//   duration: 3,
//   // scale: 1.3,
//   scrollTrigger: {
//     trigger: '.sec1',
//     start: 'top 50%',
//     end: '50% top',
//     // pin: '',
//     scrub: true,
//     // markers: true,
//   },
// });
// tl.to('.sec1-content', {
//   y: '50px',
//   opacity: 1,
//   duration: 3,
//   // scale: 1.3,
//   scrollTrigger: {
//     trigger: '.sec1',
//     start: 'top 50%',
//     end: '50% top',
//     // pin: '',
//     scrub: true,
//     // markers: true,
//   },
// });
