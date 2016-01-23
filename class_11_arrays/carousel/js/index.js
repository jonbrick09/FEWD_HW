// Instructions:
// In the images folder, you will find 8 food images (feel free to use other images if you want)
// By default, food1.jpg is shown on the page.

// 1) When a user clicks next, food2.jpg. If they click next again, food3.jpg should be shown and so on.

// 2) When a user clicks back, you should show the previous image. So if you currently showing food3.jpg,
// a click on previous would show food2.jpg. A click on previous again would show food1.jpg

// Start with an array that contains strings of all the image paths.
// You will also need a variable to keep track of which image is currently being shown to the user.

var counter = 0;

var images =[
  'images/food1.jpg',
  'images/food2.jpg',
  'images/food3.jpg',
  'images/food4.jpg',
  'images/food6.jpg',
  'images/food7.jpg',
  'images/food8.jpg',
];

//clicks next, moving up the array, display image up array//

$('.next').click(function() {
  counter = counter + 1; // counter += counter // counter ++ counter

  var currentImage = images[counter];

  $('.image').attr('src', currentImage) // OR   $('.image').attr('src', images[counter])
  //when you click next the dom selects the next image in the array

  console.log(images[counter])
});

$('.back').click(function() {
  counter = counter - 1; // counter += counter // counter ++ counter

  var currentImage = images[counter];

  $('.image').attr('src', currentImage) // OR   $('.image').attr('src', images[counter])
  //when you click next the dom selects the next image in the array

  console.log(images[counter])
});

//src becomes new images counter (old images[counter +1])//
