const jeu = () => {

	let scoreJoueur = 	0,
		scoreOrdi 	= 	0,
		moves 		= 	0;
	
	const lancerJeu = () => {
	
		const btnPierre 	  = 	document.querySelector('.pierre'),
			  btnPapier    	  = 	document.querySelector('.papier'),
			  btnCiseaux 	  = 	document.querySelector('.ciseaux'),
			  optionsJoueur   = 	[btnPierre, btnPapier, btnCiseaux],
		      optionsOrdi 	  = 	['pierre','papier','ciseaux'];
	
		optionsJoueur.forEach(option => {

			option.addEventListener('click',function(){
				const mouvementG = document.querySelector('.mouvG');
				moves++;
				mouvementG.innerText = `Essais : ${10-moves}`;

				const choixNum = Math.floor(Math.random()*3);
				const choixOrdi = optionsOrdi[choixNum];

				gagnant(this.innerText,choixOrdi)
				if(moves == 10){ finJeu(optionsJoueur,mouvementG); }
			})
		})
	}

	const gagnant = (joueur,ordi) => {

		const 	result 				= 	document.querySelector('.result'),
				tableauScoreHumain  = 	document.querySelector('.p-count'),
				tableauScoreOrdi 	= 	document.querySelector('.c-count');
		
		joueur 	= 	joueur.toLowerCase();
		ordi 	= 	ordi.toLowerCase();

		if(joueur === ordi){
			result.textContent = 'Égalité';

		} else if(joueur == 'pierre') {
			if(ordi == 'papier'){
				result.textContent = 'L\'ordinateur gagne !';
				scoreOrdi++;
				tableauScoreOrdi.textContent = scoreOrdi;
			} else {
				result.textContent = 'L\'humain gagne'
				scoreJoueur++;
				tableauScoreHumain.textContent = scoreJoueur;
			}

		} else if(joueur == 'ciseaux') {
			if(ordi == 'pierre'){
				result.textContent = 'Ordinateur gagne';
				scoreOrdi++;
				tableauScoreOrdi.textContent = scoreOrdi;
			} else {
				result.textContent = 'Humain gagne';
				scoreJoueur++;
				tableauScoreHumain.textContent = scoreJoueur;
			}

		} else if(joueur == 'papier') {
			if(ordi == 'ciseaux'){
				result.textContent = 'Ordinateur gagne';
				scoreOrdi++;
				tableauScoreOrdi.textContent = scoreOrdi;
			} else {
				result.textContent = 'Humain gagne';
				scoreJoueur++;
				tableauScoreHumain.textContent = scoreJoueur;
			}
		}
	}

	const finJeu = (optionsJoueur,mouvementG) => {

		const choixMouv = document.querySelector('.move'),
			  result 	= document.querySelector('.result'),
			  reloadBtn = document.querySelector('.reload');

		optionsJoueur.forEach(option => {
			option.style.display = 'none';
		})

		choixMouv.innerText 		= 	'Perdu !'
		mouvementG.style.display 	= 	'none';

		if(scoreJoueur > scoreOrdi) {
			result.style.fontSize 	= 	'2rem';
			result.innerText 		= 	'Gagné !'
			result.style.color 		= 	'#308D46';

		} else if(scoreJoueur < scoreOrdi) {
			result.style.fontSize 	= 	'2rem';
			result.innerText 		= 	'Perdu ... Game Over';
			result.style.color 		= 	'red';

		} else if(scoreJoueur == scoreOrdi){
			result.style.fontSize 	= 	'2rem';
			result.innerText 	  	= 	'Égalité';
			result.style.color 	    = 	'grey';

		} else {
			result.style.fontSize 	= 	'2rem';
			result.innerText 	  	= 	'Oups, jeu codé avec les pieds';
			result.style.color 	  	= 	'grey';
		}

		reloadBtn.innerText 		= 	'Recommencer';
		reloadBtn.style.display 	= 	'flex'

		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}
	lancerJeu();
}
jeu();