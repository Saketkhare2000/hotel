$(function () {
  $(document).scroll(function () {
    console.log('Hello');
    var $nav = $('.navbar ');

    $nav.toggleClass('scrolled', $(this).scrollTop() > 10);
  });
});
