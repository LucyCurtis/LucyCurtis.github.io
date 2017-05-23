$(document).ready(function() {


// Add jQuery here

$('.doge').mouseenter(function() {
  $('.doge__image').addClass('showme');
});

$('.doge').mouseleave(function() {
  $('.doge__image').removeClass('showme');
});

$('.success').mouseenter(function() {
  $('.success__image').addClass('showme');
});

$('.success').mouseleave(function() {
  $('.success__image').removeClass('showme');
});


  });
