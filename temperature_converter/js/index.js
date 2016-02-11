$(document).ready(function () {

//listen for submit on entry button//
  $('.entry').submit(function() {
    //remove the slideDown from output class which adds a style of display block
    $(".output").removeAttr("style");

    //remove previous classes
    $("body").removeClass();

    //event preventDefault//
    event.preventDefault();

    //slide .ouput down//
    $(".output").slideDown( "slow");

    //newVal variable is what is entered in celcius class//
    var celciusTemp = $('.celcius').val();

    //CONVERT CELCIUS TO Farenheit//
    var farenheitTemp = (celciusTemp * 9/5) + 32

    //INPUT TEXT OF TOTAL AND DEGREES F INTO TEMPERATURE CLASS//
    $('.temperature').text(farenheitTemp + ' Degrees Farenheit');

    //Tracking the farenheitTemp//
    console.log(farenheitTemp)

    //add a class depending on the temp//

    //Temp <32 is winter//
    if (farenheitTemp<32||farenheitTemp===32) {
      $("body").addClass("winter");
    }

    //32<Temp<80 is spring//
    else if (32<farenheitTemp && farenheitTemp<80) {
      $("body").addClass("spring");
    }

    //Temp>80 is summer//
    else if (farenheitTemp>80) {
      $("body").addClass("summer");
    }

  }); //close on.click

});//end ready
