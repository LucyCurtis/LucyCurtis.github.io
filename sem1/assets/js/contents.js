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

$('.arthur').mouseenter(function() {
  $('.arthur__image').addClass('showme');
});

$('.arthur').mouseleave(function() {
  $('.arthur__image').removeClass('showme');
});


$('.thumbnailarthur').mouseenter(function() {
          $('.arthur').addClass('showme');
        });

$('.thumbnailsuccesskid').mouseenter(function() {
          $('.successkid').addClass('showme');
        });

$('.thumbnaildoge').mouseenter(function() {
          $('.doge').addClass('showme');
        });
  });
