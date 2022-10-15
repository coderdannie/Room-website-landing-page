'use strict';

//toggle nav menu functionalities
const toggleContainer = document.querySelector('#toggle_container');
const togglebar = document.querySelector('.nav__toggle');
const toggleCloseBar = document.querySelector('.nav__close');
const overlay = document.querySelector('.overlay');
const body = document.body;
togglebar.addEventListener('click', () => {
  console.log('clicked');
  if (toggleContainer.classList.contains('hidden'))
    toggleContainer.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.classList.add('noscroll');
});

toggleCloseBar.addEventListener('click', () => {
  toggleContainer.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('noscroll');
});

//carousel
const container = document.querySelector('.carousel__track');
const slides = document.querySelectorAll('.carousel__slide');
const rightBtn = document.querySelector('#rightbtn');
const leftBtn = document.querySelector('#leftbtn');
const contentSlides = document.querySelectorAll('.hero__content--slide');
let curSlide = 0;
let maxSlide = slides.length;

const gotoContentSlide = function (contentSlide) {
  contentSlides.forEach((c, i) => {
    c.style.transform = `translateX(${100 * (i - contentSlide)}%)`;
  });
};
gotoContentSlide(0);
const gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
gotoSlide(0);
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
  gotoContentSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
  gotoContentSlide(curSlide);
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', function () {
  prevSlide();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
  e.key === 'ArrowRight' && nextSlide();
});

// setInterval(() => {
//   nextSlide();
// }, 3000);
