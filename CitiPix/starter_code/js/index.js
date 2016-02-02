$(document).ready(function () {
  //Prevent a form submission using the ```event.preventDefault()``` function//
  event.preventDefault()

  //Array of city locations
  var locations = ["NYC", "SF", "LA", "ATX", "SYD"]

  //Use loop to show each location and append it to a list
  function showCities() {
    $.each(locations, function(index, value) {
    $('.city-type').append("<option>" + value + "</option>")
    });
  }

  showCities()

//On change of city-type, enter that city in the 'city-input'//
  $(".city-type").change(function () {
    //clear body of classes
    $("body").removeClass();

    //select the val of this specific city-type
    $(this).val();

    //Define city variable of the city-type value
    var city = $(this).val();

    //addClass to Body based on city
    if (city === "ATX") {
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
    else if (city === "SYD") {
      $('body').addClass('sydney');
    }

    //Console Log
    console.log('City: ' + city);

  }); //end click of array

}); //end ready

/* THIS IS OLD CODE FROM THE PREVIOUS ASSINGMENT

    // listen for click on .submit class
    $('.submit-btn').click(function(event) {

//city variable is what is typed into .city-type class//
    var city = $('.city-type').val();

//PUT LOWER CASE TO UPPER CASE//
    var city = city.toUpperCase();

//TRIM SPACES FOR CITY//
    var city = city.trim();

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

    //CHANGE BACKGROUND IMAGE BASED ON CITY//
        if (city === "ATX") {
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
        else if (city === "SYD") {
          $('body').addClass('sydney');
        }
      });

END CODE FROM LAST ASSIGNMENT */
