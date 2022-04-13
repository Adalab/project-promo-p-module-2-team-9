'use strict';

const designLegend = document.querySelector('.js__design-legend');
const designColors = document.querySelector('.js__design-colors');
const arrowDown1 = document.querySelector('.js__arrowDown1');
const fillLegend = document.querySelector('.js__fill-legend');
const fillForm = document.querySelector('.js__field');
const arrowDown2 = document.querySelector('.js__arrowDown2');
const shareLegend = document.querySelector('.js__share-legend');
const sharecontent = document.querySelector('.js__share');
const arrowDown3 = document.querySelector('.js__arrowDown3');
const allRadioButtons = document.querySelectorAll('.js-radio');
const previewContainer = document.querySelector('.js-preview');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const reset = document.querySelector('.js-reset');
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const inputs = document.querySelector('.js__inputs');
const previewNameElement = document.querySelector('.js_name');
const previewJobElement = document.querySelector('.js_job');
const previewEmailElement = document.querySelector('.js_email');
const previewPhoneElement = document.querySelector('.js_phone');
const previewLinkedinElement = document.querySelector('.js_linkedin');
const previewGithubElement = document.querySelector('.js_github');
const btnShare = document.querySelector('.js-share-btn');
const twitterBtn = document.querySelector('.js-twitter-button');
let msg = document.querySelector('.js-message');
const urlTwitter = document.querySelector('.js-url');
const textCard = document.querySelector('.js-create');
let data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

designLegend.addEventListener('click', () => {
  designColors.classList.toggle('collapsed');
  arrowDown1.classList.toggle('rotate');
  arrowDown2.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  sharecontent.classList.add('collapsed');
  fillForm.classList.add('collapsed');
  textCard.innerHTML = '';
  msg.classList.add('hidden');
  btnShare.classList.remove('white');
});

fillLegend.addEventListener('click', () => {
  fillForm.classList.toggle('collapsed');
  arrowDown2.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  designColors.classList.add('collapsed');
  sharecontent.classList.add('collapsed');
  textCard.innerHTML = '';
  msg.classList.add('hidden');
  btnShare.classList.remove('white');
});

shareLegend.addEventListener('click', () => {
  sharecontent.classList.toggle('collapsed');
  arrowDown3.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown2.classList.remove('rotate');
  designColors.classList.add('collapsed');
  fillForm.classList.add('collapsed');
});

function handleClickRadioUnique(event) {
  const paletteClassToAdd = `palette-${event.currentTarget.value}`;
  data.palette = event.currentTarget.value;
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.add(paletteClassToAdd);
}

for (const eachRadioButton of allRadioButtons) {
  eachRadioButton.addEventListener('click', handleClickRadioUnique);
}

function renderPreview() {
  previewEmailElement.href = `mailto: ${data.email}`;
  previewPhoneElement.href = `tel: ${data.phone}`;
  previewLinkedinElement.href = data.linkedin;
  previewGithubElement.href = data.github;
  if (data.name === '') {
    previewNameElement.innerHTML = 'Nombre Apellido';
  } else {
    previewNameElement.innerHTML = data.name;
  }
  if (data.job === '') {
    previewJobElement.innerHTML = 'Front-end developer';
  } else {
    previewJobElement.innerHTML = data.job;
  }
}

function handleKeyupInputs(event) {
  event.preventDefault();
  const elementWhereUserIsTyping = event.target;
  if (elementWhereUserIsTyping.name === 'name') {
    data.name = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === 'job') {
    data.job = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === 'email') {
    data.email = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === 'phone') {
    data.phone = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === 'linkedin') {
    data.linkedin = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === 'github') {
    data.github = elementWhereUserIsTyping.value;
  }
  renderPreview();
}

buttonCancelForm.addEventListener('click', (event) => {
  event.preventDefault();
  previewContainer.classList.add('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  const allResetInputs = document.querySelectorAll('.js-reset');
  for (const eachResetInput of allResetInputs) {
    eachResetInput.value = '';
    previewNameElement.innerHTML = 'Nombre Apellido';
    previewJobElement.innerHTML = 'Front-end developer';
    previewEmailElement.href = `mailto: ${''}`;
    previewPhoneElement.href = `tel: ${''}`;
    previewLinkedinElement.href = '';
    previewGithubElement.href = '';
    profileImage.style.backgroundImage = '';
    profilePreview.style.backgroundImage = '';
  }
});

function handleClickCreateBtn(event) {
  event.preventDefault();

  textCard.innerHTML = '';
  msg.classList.remove('hidden');
  btnShare.classList.add('white');
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((serverResp) => {
      if (serverResp.success === false) {
        textCard.innerHTML = 'Ha habido un error. Rellena todos los campos.';
        urlTwitter.classList.add('hidden');
      } else {
        textCard.innerHTML = 'La tarjeta ha sido creada';
        urlTwitter.innerHTML = serverResp.cardURL;
        urlTwitter.href = serverResp.cardURL;
        urlTwitter.classList.remove('hidden');
      }
    });

  twitterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20Conóceme!%20&url=${urlTwitter.href}`;
    window.location.href = url;
  });
}

inputs.addEventListener('keyup', handleKeyupInputs);
btnShare.addEventListener('click', handleClickCreateBtn);

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
