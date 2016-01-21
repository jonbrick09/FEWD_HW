$(document).ready(function() {

  $("a").click(function(event) {
    event.preventDefault();

  });

  $(".read-more-1").click(function() {
    $( ".article-p-1" ).slideToggle( "slow" );
    $(".read-more-1").removeClass("show").addClass("hide");
    $(".read-less-1").removeClass("hide").addClass("show");
  });

  $(".read-less-1").click(function() {
    $( ".article-p-1" ).slideToggle( "slow" );
    $(".read-less-1").removeClass("show").addClass("hide");
    $(".read-more-1").removeClass("hide").addClass("show");
  });

  $(".read-more-2").click(function() {
    $( ".article-p-2" ).slideToggle( "slow" );
    $(".read-more-2").removeClass("show").addClass("hide");
    $(".read-less-2").removeClass("hide").addClass("show");
  });

  $(".read-less-2").click(function() {
    $( ".article-p-2" ).slideToggle( "slow" );
    $(".read-less-2").removeClass("show").addClass("hide");
    $(".read-more-2").removeClass("hide").addClass("show");
  });

  $(".learn-more").click(function() {
    $( ".about-p" ).slideToggle( "slow" );
    $(".learn-more").removeClass("show").addClass("hide");
    $(".learn-less").removeClass("hide").addClass("show");
  });

  $(".learn-less").click(function() {
    $( ".about-p" ).slideToggle( "slow" );
    $(".learn-less").removeClass("show").addClass("hide");
    $(".learn-more").removeClass("hide").addClass("show");
  });

});
