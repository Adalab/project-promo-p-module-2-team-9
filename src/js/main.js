'use strict';

// console.log('>> Ready :)');

// CONSTANTS FOR DESIGN COLLAPSIBLE
const designLegend = document.querySelector('.js__design-legend');
const designColors = document.querySelector('.js__design-colors');
const arrowDown1 = document.querySelector('.js__arrowDown1');

// CONSTANTS FOR FILL COLLAPSIBLE
const fillLegend = document.querySelector('.js__fill-legend');
const fillForm = document.querySelector('.js__field');
const arrowDown2 = document.querySelector('.js__arrowDown2');

// CONSTANTS FOR SHARE COLLAPSIBLE
const shareLegend = document.querySelector('.js__share-legend');
const sharecontent = document.querySelector('.js__share');
const arrowDown3 = document.querySelector('.js__arrowDown3');

// DESIGN COLLAPSIBLE
designLegend.addEventListener('click', () => {
  designColors.classList.toggle('collapsed');
  arrowDown1.classList.toggle('rotate');
  arrowDown2.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  sharecontent.classList.add('collapsed');
  fillForm.classList.add('collapsed');
});

// FILL COLLAPSIBLE
fillLegend.addEventListener('click', () => {
  fillForm.classList.toggle('collapsed');
  arrowDown2.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  designColors.classList.add('collapsed');
  sharecontent.classList.add('collapsed');
});

// SHARE COLLAPSIBLE
shareLegend.addEventListener('click', () => {
  sharecontent.classList.toggle('collapsed');
  arrowDown3.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown2.classList.remove('rotate');
  designColors.classList.add('collapsed');
  fillForm.classList.add('collapsed');
});


// CONSTANTS FOR PROFILE COLOR CHANGE
// const profileName = document.querySelector(".js-profileName");
// const profileBorder = document.querySelector(".js-profileBorder");
// const profileIcon = document.querySelector(".js-profileIcon");
// const radioButton1 = document.querySelector(".js-radioButton1");
// const radioButton2 = document.querySelector(".js-radioButton2");
// const radioButton3 = document.querySelector(".js-radioButton3");