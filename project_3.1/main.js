$(document).ready(function() {


// Add jQuery here

$('.chan').mouseenter(function() {
  $('.chan__image').addClass('showme');
});

$('.chan').mouseleave(function() {
  $('.chan__image').removeClass('showme');
});

$('.doge').mouseenter(function() {
  $('.doge__image').addClass('showme');
});

$('.doge').mouseleave(function() {
  $('.doge__image').removeClass('showme');
});

$('.political').mouseenter(function() {
  $('.political__image').addClass('showme');
});

$('.political').mouseleave(function() {
  $('.political__image').removeClass('showme');
});

$('.pepper').mouseenter(function() {
  $('.pepper__image').addClass('showme');
});

$('.pepper').mouseleave(function() {
  $('.pepper__image').removeClass('showme');
});

$('.american').mouseenter(function() {
  $('.american__image').addClass('showme');
});

$('.american').mouseleave(function() {
  $('.american__image').removeClass('showme');
});


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}






















  });
