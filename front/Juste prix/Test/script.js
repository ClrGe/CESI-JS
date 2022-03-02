'use strict';

let numeroMystere = Math.trunc(Math.random() * 1000) + 1;
let score = 20;

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

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.nombre').style.width = '30rem';
   if (essai !== numeroMystere) {
    if (score > 1) {
      displayMessage(essai > numeroMystere ? 'Trop haut !' : 'Trop bas !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Perdu !');
      document.querySelector('.score').textContent = 0;
    }
  }
  }
});
