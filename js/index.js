// Выбор всех элементов с классом 'slide' и 'dot' и инициализация переменных
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let timer;

// Функция отображения определенного слайда
function showSlide(n) {
	// Удаление класса 'active' и анимации у всех слайдов и точек
	slides.forEach((slide, index) => {
		slide.classList.remove('active');
		dots[index].classList.remove('active');
		slide.style.animation = '';
	});

	// Добавление класса 'active' и применение анимации к указанному слайду
	slides[n].classList.add('active');
	dots[n].classList.add('active');
	slides[n].style.animation = 'slideInLeft 1s forwards';
}

// Функция активации конкретной точки
function activateDot(n) {
	// Удаление класса 'active' у всех точек и добавление его к указанной точке
	dots.forEach(dot => {
		dot.classList.remove('active');
	});
	dots[n].classList.add('active');
}

// Функция обработки клика по точке
function handleDotClick(index) {
	// Отображение слайда, соответствующего кликнутой точке, и обновление currentSlide
	showSlide(index);
	currentSlide = index;
}

// Функция обработки события наведения мыши на слайд
function handleMouseEnter() {
	// Приостановка слайдшоу при наведении мыши
	isMouseOverSlide = true;
	clearInterval(timer);
}

// Функция обработки события ухода мыши со слайда
function handleMouseLeave() {
	// Возобновление слайдшоу при уходе мыши
	isMouseOverSlide = false;
	timer = setInterval(nextSlide, 6000);
}

// Функция обработки плавного скроллинга к указанному разделу
function handleScrollTo(sectionId) {
	document.querySelector(`a[href="#${sectionId}"]`).addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(`#${sectionId}`).scrollIntoView({
			behavior: 'smooth'
		});
	});
}

// Добавление слушателей событий клика по точкам, активирующих соответствующий слайд
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => handleDotClick(index));
});

// Добавление слушателей событий наведения и ухода мыши со слайдов, приостанавливающих и возобновляющих слайдшоу
slides.forEach(slide => {
	slide.addEventListener('mouseenter', handleMouseEnter);
	slide.addEventListener('mouseleave', handleMouseLeave);
});

// Добавление функциональности плавного скроллинга к определенным разделам
handleScrollTo('slider-team');
handleScrollTo('abouts');
handleScrollTo('product-list');
handleScrollTo('lenta-info');

// Отображение начального слайда и настройка таймера для слайдшоу
showSlide(currentSlide);
timer = setInterval(nextSlide, 8000);

