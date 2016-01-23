//Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded//
$(document).ready(function () {

  //listen for click on .submit class//
  $('.submit-btn').click(function(event) {

    //Prevent a form submission using the ```event.preventDefault()``` function//
    event.preventDefault()

    //city variable is what is typed into .city-type class//
    var city = $('.city-type').val();

    // THIS IS EFFECTING THE CONSOLE//
    console.log('City: ' + city);

    if ((city.toUpperCase() === "AUSTIN"))
      $('body').addClass('austin');
    else if ((city.toUpperCase() === "NYC"))
      $('body').addClass('nyc');
    else if ((city.toUpperCase() === "SF"))
      $('body').addClass('sf');
    else if ((city.toUpperCase() === "LA"))
      $('body').addClass('la');
    else if ((city.toUpperCase() === "SYDNEY"))
      $('body').addClass('sydney');

  //CLOSE CLICK FUNCTION//
  });

//CLOSE DOCUMENT//
});

  // THEIRRY"S code - WHY IS HIS WORKING AND NOT MINE?

  // $("form").submit(function(event) {
  //   event.preventDefault();
  //
  //   var city = $('.city-type').val();
  //   console.log('City: ' + city);
  //
  //
