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
	slides[n].style.animation = 'slideInLeft 2s forwards';
}

function nextSlide() {
	if (!isMouseOverSlide) {
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		showSlide(currentSlide);
	}
}

function prevSlide() {
	if (!isMouseOverSlide) {
		currentSlide--;
		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}
		showSlide(currentSlide);
	}
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
document.querySelector('a[href="#lenta-info"]').addEventListener('click', function (e) {
	e.preventDefault(); // Отменить переход по ссылке по умолчанию

	document.querySelector('#lenta-info').scrollIntoView({
		behavior: 'smooth' // Добавить плавность при прокрутке
	});
});

