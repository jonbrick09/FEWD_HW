//Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded//
$(document).ready(function () {

  //listen for click on .submit class//
  $('.submit-btn').click(function(event) {

    //Prevent a form submission using the ```event.preventDefault()``` function//
    event.preventDefault()

//CLEAR ANY BODy CLASSES//
    $("body").removeClass();

//city variable is what is typed into .city-type class//
    var city = $('.city-type').val();

//PUT LOWER CASE TO UPPER CASE//
    var city = city.toUpperCase()

//Convert combinations to one city//
    if (city === "NEW YORK" || city === "NEW YORK CITY" || city === "NY") {
      city = "NYC";
    }
    else if (city === "SAN FRAN" || city === "SAN FRANCISCO" || city === "BAY AREA") {
      city = "SF";
    }
    else if (city === "LOS ANGELES" || city === "LAX" || city === "CIT OF ANGELS") {
      city = "LA";
    }
    else if (city === "ATX" || city === "ACL" || city === "AUS") {
      city = "AUSTIN";
    }
    else if (city === "SYD") {
      city = "SYDNEY";
    }

// THIS IS EFFECTING THE CONSOLE//
console.log('City: ' + city);

//CHANGE BACKGROUND IMAGE BASED ON CITY//
    if (city === "AUSTIN") {
      $('body').addClass('austin');
    }
    else if (city === "NYC") {
      $('body').addClass('nyc');
    }
    else if (city === "SF") {
      $('body').addClass('sf');
    }
    else if (city === "LA") {
      $('body').addClass('la');
    }
    else if (city === "SYDNEY") {
      $('body').addClass('sydney');
    }

  //CLOSE CLICK FUNCTION//
  });

//CLOSE DOCUMENT//
});
