'use strict';
// Mejorar si eso
// function handleClickResetBtn(event) {
//     event.preventDefault();
//     reset.value = '';
//     console.log("holaaaa");
// }

buttonCancelForm.addEventListener('click', (event) => {
    event.preventDefault();
    const allResetInputs = document.querySelectorAll('.js-reset');
    for(const eachResetInput of allResetInputs) {
    eachResetInput.value = '';
    previewNameElement.innerHTML = "Nombre Apellido";
    previewJobElement.innerHTML = "Front-end developer";
    previewEmailElement.href = `mailto: ${""}`;
    previewPhoneElement.href = `tel: ${""}`;
    previewLinkedinElement.href = "";
    previewGithubElement.href = "";
    profileImage.style.backgroundImage = "";
    profilePreview.style.backgroundImage = "";
}
});