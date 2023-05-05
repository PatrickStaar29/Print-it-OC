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

let currentSlidesIndex = 0

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner > p');


leftArrow.addEventListener('click', () => {
	currentSlidesIndex--;
	if (currentSlidesIndex < 0) {
	  currentSlidesIndex = slides.length - 1;
	}
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlidesIndex].image;
	tagLine.innerHTML = slides[currentSlidesIndex].tagLine;
	const dot = document.querySelectorAll('.dot')
	dot.forEach(el => {
		el.classList.remove('dot_selected')
	})
	console.log(currentSlidesIndex)
	document.querySelector(`.dot:nth-child(${currentSlidesIndex + 1})`).classList.add('dot_selected')
});

rightArrow.addEventListener('click', () => {
	currentSlidesIndex++;
	if (currentSlidesIndex >= slides.length) {
	  currentSlidesIndex = 0;
	}
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlidesIndex].image;
	tagLine.innerHTML = slides[currentSlidesIndex].tagLine;
	const dot = document.querySelectorAll('.dot')
	dot.forEach(el => {
		el.classList.remove('dot_selected')
	})
	document.querySelector(`.dot:nth-child(${currentSlidesIndex + 1})`).classList.add('dot_selected')
});