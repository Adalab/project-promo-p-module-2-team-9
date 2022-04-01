'use strict';

//4. Cancelar formulario
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const reset = document.querySelector('.js-reset');

function handleClickResetBtn(event) {
    event.preventDefault();
    reset.value = '';
}

buttonCancelForm.addEventListener('click', (event) => {
    event.preventDefault();
    const allResetInputs = document.querySelectorAll('.js-reset');
    for(const eachResetInput of allResetInputs) {
    eachResetInput.value = '';
}
});