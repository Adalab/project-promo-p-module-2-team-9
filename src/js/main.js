'use strict';

// console.log('>> Ready :)');

const designLegend = document.querySelector ('.js__design-legend');

const designFieldset = document.querySelector ('.js__design-fieldset');

designLegend.addEventListener ("click", (event) => {

    designFieldset.classList.toggle (".collapsed");
});

