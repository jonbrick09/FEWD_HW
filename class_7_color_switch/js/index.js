$('.grayButton').click(switchGray);
$('.whiteButton').click(switchWhite);

// document.querySelector('.grayButton').onclick = switchGray;
// document.querySelector('.whiteButton').onclick = switchWhite;

function switchGray() {
  $('body').css({
    backgroundColor: 'gray',
    color: 'white'
  });
};

  // document.body.style.backgroundColor = 'gray';
  // document.body.style.color = 'white';

function switchWhite() {
  $('body').css({
    backgroundColor: 'white',
    color: 'black'
  });

  // document.body.style.backgroundColor = 'white';
  // document.body.style.color = 'black';

};
