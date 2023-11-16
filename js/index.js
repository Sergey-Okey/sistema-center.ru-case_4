const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let timer;
let isMouseOverSlide = false;

function showSlide(n) {
	slides.forEach((slide, index) => {
		slide.classList.remove('active');
		dots[index].classList.remove('active');
		slide.style.animation = '';
	});

	slides[n].classList.add('active');
	dots[n].classList.add('active');
	slides[n].style.animation = 'slideInLeft 3s forwards';
}

function activateDot(n) {
	dots.forEach(dot => {
		dot.classList.remove('active');
	});
	dots[n].classList.add('active');
}

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		showSlide(index);
		currentSlide = index;
	});
});

slides.forEach(slide => {
	slide.addEventListener('mouseenter', () => {
		isMouseOverSlide = true;
		clearInterval(timer);
	});

	slide.addEventListener('mouseleave', () => {
		isMouseOverSlide = false;
		timer = setInterval(nextSlide, 6000);
	});
});

showSlide(currentSlide);
timer = setInterval(nextSlide, 8000);
document.querySelector('a[href="#slider-team"]').addEventListener('click', function (e) {
	e.preventDefault(); // Отменить переход по ссылке по умолчанию

	document.querySelector('#slider-team').scrollIntoView({
		behavior: 'smooth' // Добавить плавность при прокрутке
	});
});
showSlide(currentSlide);
timer = setInterval(nextSlide, 8000);
document.querySelector('a[href="#abouts"]').addEventListener('click', function (e) {
	e.preventDefault(); // Отменить переход по ссылке по умолчанию

	document.querySelector('#abouts').scrollIntoView({
		behavior: 'smooth' // Добавить плавность при прокрутке
	});
});
showSlide(currentSlide);
timer = setInterval(nextSlide, 8000);
document.querySelector('a[href="#product-list"]').addEventListener('click', function (e) {
	e.preventDefault(); // Отменить переход по ссылке по умолчанию

	document.querySelector('#product-list').scrollIntoView({
		behavior: 'smooth' // Добавить плавность при прокрутке
	});
});
showSlide(currentSlide);
timer = setInterval(nextSlide, 8000);
document.querySelector('a[href="#lenta-info"]').addEventListener('click', function (e) {
	e.preventDefault(); // Отменить переход по ссылке по умолчанию

	document.querySelector('#lenta-info').scrollIntoView({
		behavior: 'smooth' // Добавить плавность при прокрутке
	});
});

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
	duration: 2.5,
})

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

