$(document).ready(function() {

  var total = 0;

  $('.entry').submit(transactionSubmit);

  function transactionSubmit(evt) {
    evt.preventDefault();

    var newVal = $('.new-entry').val();

    newVal = parseFloat(newVal);

// THIS IS EFFECTING THE CONSOLE

      //
      // console.log(newVal);

    $('.entries').append('<li>' + '$' + newVal + '</li>');

// THIS IS SIMPLY APPENDING THE LI TO THE UL, NOT EFFECTING THE CONSOLE

    total += newVal;
// 
// // THIS IS CHANGING THE VAR TOTAL
//
//       //
//       console.log(total);
    formatCurrency(total);

    $('.total').text('$' + total);

    $('.new-entry').val("");
  };

  function formatCurrency(number) {
    console.log(number);
  };

});
