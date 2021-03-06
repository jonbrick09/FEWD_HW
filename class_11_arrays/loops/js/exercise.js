/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use an each loop to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

var q1 = [1,2,3,4];

$.each(q1, function(index, value) {
    q1[index] = q1[index] + 1;
});

/**
* Question 2
* Create an array of names with Will, Nevan, and Jessica as values. Append each of these names to the class-list element using an each loop.
*/

var q2 = ['Will','Nevan','Jessica']

$.each(q2, function(index, value) {
  $('.class-list').append('<li>' + q2[index] + '</li>');
});

/**
 * Question 3
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q3.
 */

var sum = 0;

 $.each(q1, function(index, value) {
   sum = sum + q1[index];
 });

var q3 = sum / q1.length;
