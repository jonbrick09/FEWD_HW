//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

  $('.stop-button').click(function() {
    clearLights();

    $('.stop-light').addClass('bg-red');
  });

  $('.slow-button').click(function() {
    clearLights();

    $('.slow-light').addClass('bg-yellow');
  });

  $('.go-button').click(function () {
    clearLights();

    $('.go-light').addClass('bg-green');
  });

  function clearLights() {
    $('.bulb').removeClass('bg-red bg-yellow bg-green');
  };

});
