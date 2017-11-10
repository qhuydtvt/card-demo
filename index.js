$(document).ready(function() {
  $(".card-footer").click(function() {
    $(".card").toggleClass('active');
    $(".card-origin").toggleClass('active');
    $(".card-button-front").toggleClass('active');
    $(".back-button-container").toggleClass('active');
    $(".card-meaning").toggleClass('active');
    $(".back-button").toggleClass('active');
  });
});
