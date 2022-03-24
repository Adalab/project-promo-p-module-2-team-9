'use strict';

// console.log('>> Ready :)');

// const designLegend = document.querySelector ('.js__design-legend');

// const designFieldset = document.querySelector ('.js__design-fieldset');

// designLegend.addEventListener ("click", (event) => {

//     designFieldset.classList.toggle (".collapsed");
// });


// COLAPSABLE DISEÑA

const designLegend = document.querySelector('.js__design-legend');
const designColors = document.querySelector('.js__design-colors');

designLegend.addEventListener('click', () => {
  designColors.classList.toggle('collapsed');
});


// COLAPSABLE RELLENA

const fillLegend = document.querySelector('.js__fill-legend');
const fillForm = document.querySelector('.js__field');
const arrowUp = document.querySelector('.js__arrowUp');
const arrowDown = document.querySelector('.js__arrowDown');



fillLegend.addEventListener('click', () => {
  if (fillForm.classList.toggle('collapsed')) {
    showArrowUp();
  } else {
    showArrowDown();
  }
});

function showArrowUp () {
  arrowUp.classList.remove('collapsed');
}


function showArrowDown () {
  arrowDown.classList.add('collapsed');
}


//COLAPSABLE SHARE

const shareLegend = document.querySelector('.js__share-legend');
const sharecontent = document.querySelector('.js__share');

shareLegend.addEventListener('click', () => {
  sharecontent.classList.toggle('collapsed');
});