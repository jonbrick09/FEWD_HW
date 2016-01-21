$(document).ready(function() {
  var total = 0;

  $('.zero').click(function () {
    total = 0;
    console.log(total);

    $('.result').text(total);
  }); //end click zero

  $('.add5').click(function () {
    total = total + 5;
    console.log(total);

    $('.result').text(total);
  }); //end click add5

  $('.add10').click(function () {
    total = total + 10;
    console.log(total);

    $('.result').text(total);
  }); //end click add10

  $('.sub1').click(function () {
    total = total - 1;
    console.log(total);

    $('.result').text(total);
  }); //end click sub1

}); //end end ready
