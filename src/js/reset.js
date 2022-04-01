'use strict';

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