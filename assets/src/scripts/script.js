$(document).ready(function () {
  $('.navbar-light .navbar-toggler').click(function () {
    $('.shadow').show();
  });

  $('.shadow').click(function () {
    $('.navbar-collapse').removeClass('show');
  });
});
