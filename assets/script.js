const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*
	Les variables qui sont composées de plusieurs mots peuvent être notés en :
		- Snake case _ : majuscule_minuscule
		- Camel case > majusculeMinuscule - Première lettre du premier mot toujours en minuscule

	Pour les sélecteurs CSS, utilises plutôt querySelector au lieu de getElementById
*/

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
  console.log('La flèche gauche a été cliquée!');
});

rightArrow.addEventListener('click', () => {
  console.log('La flèche droite a été cliquée!');
});
