$(document).ready(function() {


// Add jQuery here

$('.arthur').mouseenter(function() {
  $('.arthur__image').addClass('showme');
});

$('.arthur').mouseleave(function() {
  $('.arthur__image').removeClass('showme');
});

$('.twitter').mouseenter(function() {
  $('.twitter__image').addClass('showme');
});

$('.twitter').mouseleave(function() {
  $('.twitter__image').removeClass('showme');
});

$('.frasier').mouseenter(function() {
  $('.frasier__image').addClass('showme');
});

$('.frasier').mouseleave(function() {
  $('.frasier__image').removeClass('showme');
});

$('.thumbnailarthur').mouseenter(function() {
          $('.arthur').addClass('showme');
        });

$('.thumbnailunderwear').mouseenter(function() {
          $('.underwear').addClass('showme');
        });

$('.thumbnailtwins').mouseenter(function() {
          $('.twins').addClass('showme');
        });

  });
