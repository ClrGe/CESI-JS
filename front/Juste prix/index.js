'use strict';

let numeroMystere  =   Math.trunc(Math.random() * 1000) + 1,
    score         =   20,
    highscore     =   0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  
  const essai = Number(document.querySelector('.essai').value);
  console.log(essai, typeof essai);

  if (!essai) {
    displayMessage('Nope !');

  } else if (essai === numeroMystere) {
    displayMessage('Correct !');
    document.querySelector('.nombre').textContent = numeroMystere;

    document.querySelector('body').style.backgroundColor = 'bla k';
    document.querySelector('.nombre').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (essai !== numeroMystere) {
    if (score > 1) {
      displayMessage(essai > numeroMystere ? 'TROP HAUT !' : 'TROP BAS !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Perdu !');
      document.querySelector('.score').textContent = 0;
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numeroMystere = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Devine le prix...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.nombre').textContent = '?';
  document.querySelector('.essai').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.nombre').style.width = '15rem';
});