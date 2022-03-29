'use strict';

// console.log('>> Ready :)');

// COLAPSABLE DISEÑA

const designLegend = document.querySelector('.js__design-legend');
const designColors = document.querySelector('.js__design-colors');

designLegend.addEventListener('click', () => {
  designColors.classList.toggle('collapsed');
});


// COLAPSABLE RELLENA

const fillLegend = document.querySelector('.js__fill-legend');
const fillForm = document.querySelector('.js__field');
const arrowDown = document.querySelector('.js__arrowDown2');

fillLegend.addEventListener('click', () => {
  fillForm.classList.toggle('collapsed');
  arrowDown.classList.toggle('rotate');
});



//COLAPSABLE SHARE

const shareLegend = document.querySelector('.js__share-legend');
const sharecontent = document.querySelector('.js__share');

shareLegend.addEventListener('click', () => {
  sharecontent.classList.toggle('collapsed');
});