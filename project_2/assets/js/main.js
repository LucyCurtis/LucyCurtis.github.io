$(document).ready(function() {


// Add jQuery here

$('.nav_old').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.old').removeClass('hide');
  $('.item.old').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_outside').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.outside').removeClass('hide');
  $('.item.outside').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_classy').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.classy').removeClass('hide');
  $('.item.classy').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_bright').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.bright').removeClass('hide');
  $('.item.bright').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_people').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.people').removeClass('hide');
  $('.item.people').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_ikea').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ikea').removeClass('hide');
  $('.item.ikea').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_animal').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.animal').removeClass('hide');
  $('.item.animal').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_famous').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.famous').removeClass('hide');
  $('.item.famous').addClass('show');
  $('.nav_clear').addClass('show');
});

$('.nav_thumbnail').click(function(event) {
  $('.item').addClass('thumbnail');
});


$('.nav_clear').click(function(event){
  $('.nav_clear').addClass('hide');
  $('.nav_clear').removeClass('show');

  $('.item').removeClass('hide');
});

$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail');
});

$('.nav_large').click(function(event){
  $('.item').removeClass('thumbnail');
});



  });
