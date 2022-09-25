'use strict';

//toggle nav menu functionalities
const toggleContainer = document.querySelector('#toggle_container');
const togglebar = document.querySelector('.nav__toggle');
const toggleCloseBar = document.querySelector('.nav__close');

togglebar.addEventListener('click', () => {
  console.log('clicked');
  if (toggleContainer.classList.contains('active')) {
    toggleContainer.classList.remove('active');
  }
});

toggleCloseBar.addEventListener('click', () => {
  toggleContainer.classList.add('active');
});
