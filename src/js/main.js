'use strict';

// console.log('>> Ready :)');

// COLAPSABLE DISEÑA

const designLegend = document.querySelector('.js__design-legend');
const designColors = document.querySelector('.js__design-colors');
const arrowDown1 = document.querySelector('.js__arrowDown1');

// designLegend.addEventListener('click', () => {
//   designColors.classList.toggle('collapsed');
//   arrowDown1.classList.toggle('rotate');
// });


// COLAPSABLE RELLENA

const fillLegend = document.querySelector('.js__fill-legend');
const fillForm = document.querySelector('.js__field');
const arrowDown2 = document.querySelector('.js__arrowDown2');

// fillLegend.addEventListener('click', () => {
//   fillForm.classList.toggle('collapsed');
//   arrowDown2.classList.toggle('rotate');
//   designColors.classList.add('hidden');

// });



//COLAPSABLE SHARE

const shareLegend = document.querySelector('.js__share-legend');
const sharecontent = document.querySelector('.js__share');
const arrowDown3 = document.querySelector('.js__arrowDown3');

designLegend.addEventListener('click', () => {
  designColors.classList.toggle('collapsed');
  arrowDown1.classList.toggle('rotate');
  arrowDown2.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  sharecontent.classList.add('collapsed');
  fillForm.classList.add('collapsed');
});


fillLegend.addEventListener('click', () => {
  fillForm.classList.toggle('collapsed');
  arrowDown2.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  designColors.classList.add('collapsed');
  sharecontent.classList.add('collapsed');
});


shareLegend.addEventListener('click', () => {
  sharecontent.classList.toggle('collapsed');
  arrowDown3.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown2.classList.remove('rotate');
  designColors.classList.add('collapsed');
  fillForm.classList.add('collapsed');
});
