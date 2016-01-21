/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to
 */

$(document).ready(function() { //load all of the content before running the .js

  // Question 1: When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.

  $('.button1').click(function() {
    event.preventDefault();
    // console.log('click'); registers a click to 
    $('p').addClass('blue second-class third');
  }); // end click on button 1


  // Question 2:When button 2 is clicked, select all <h2> elements on this page, and change the text to say your name.



  // Question 3:
  //  When button 3 is clicked, select the ordered list item that has the class "falseFact".
  //  Using jQuery change the content to read "True Fact".

  // $('.button3').click(function () {
  //   $('.falseFact').text('True Fact');
  // }); //end click button3
  //this changes the text inside to True Fact!


  // Question 4:
  // Refactor question 3 keeping in mind separation of concerns

  $('.button3').click(function () {
    $('.initial-text').addClass("hidden");
    $('.alt-text').removeClass("hidden");
  }); //end click button3

}); //end ready
