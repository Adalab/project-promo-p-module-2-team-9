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
// const arrowUp = document.querySelector('.js__arrowUp');
// const arrowDown = document.querySelector('.js__arrowDown');

fillLegend.addEventListener('click', () => {
  fillForm.classList.toggle('collapsed');
});


// function collapsedArrow(event) {
//   fillLegend.addEventListener('click', () => {
//     fillForm.classList.toggle('collapsed');
//   });
//   arrowDown.addEventListener('click',() => {
//     arrowDown.classList.toggle('rotate');
//   });
// }

// for (const document of legend) {
//   collapsedArrow(event);
// }

// function showArrowUp () {
//   arrowUp.classList.remove('collapsed');
// }


// function showArrowDown () {
//   arrowDown.classList.add('collapsed');
// }


//COLAPSABLE SHARE

const shareLegend = document.querySelector('.js__share-legend');
const sharecontent = document.querySelector('.js__share');

shareLegend.addEventListener('click', () => {
  sharecontent.classList.toggle('collapsed');
});