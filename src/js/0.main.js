'use strict';

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
// CONSTANTS FOR PALETTES
const allRadioButtons = document.querySelectorAll('.js-radio');
const previewContainer = document.querySelector('.js-preview');
//4. RESET BUTTON
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const reset = document.querySelector('.js-reset');
// 5. Variables avatar
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
//
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputProfileImage = document.querySelector('.js-input-profile-image');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');

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
// DESIGN COLLAPSIBLE
designLegend.addEventListener('click', () => {
  designColors.classList.toggle('collapsed');
  arrowDown1.classList.toggle('rotate');
  arrowDown2.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  sharecontent.classList.add('collapsed');
  fillForm.classList.add('collapsed');

  //Cuando falta algun dato en el formulario, volvemos a esconder la seccion del boton para que aparezcan los estilos por defecto
  textCard.innerHTML = '';
  msg.classList.add('hidden');
  btnShare.classList.remove('white');
});

// FILL COLLAPSIBLE
fillLegend.addEventListener('click', () => {
  fillForm.classList.toggle('collapsed');
  arrowDown2.classList.toggle('rotate');
  arrowDown1.classList.remove('rotate');
  arrowDown3.classList.remove('rotate');
  designColors.classList.add('collapsed');
  sharecontent.classList.add('collapsed');

  //Cuando falta algun dato en el formulario, volvemos a esconder la seccion del boton para que aparezcan los estilos por defecto
  textCard.innerHTML = '';
  msg.classList.add('hidden');
  btnShare.classList.remove('white');
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

// HANDLING FUNCTION
function handleClickRadioUnique(event) {
  const paletteClassToAdd = `palette-${event.currentTarget.value}`;
  data.palette = event.currentTarget.value;
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.remove('palette-4');
  previewContainer.classList.add(paletteClassToAdd);
}

// LOOP
for (const eachRadioButton of allRadioButtons) {
  eachRadioButton.addEventListener('click', handleClickRadioUnique);
}

function renderPreview() {
  //previewNameElement.innerHTML = data.name;
  //previewJobElement.innerHTML = data.job;
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

//6.reset
buttonCancelForm.addEventListener('click', (event) => {
  event.preventDefault();
  previewContainer.classList.add('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.remove('palette-4');
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
//7.share

function handleClickCreateBtn(event) {
  event.preventDefault();

  textCard.innerHTML = '';
  msg.classList.remove('hidden');
  btnShare.classList.add('white');
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST', // enviar datos a la API
    headers: { 'Content-Type': 'application/json' }, //tipo de dato
    body: JSON.stringify(data), //datos que de quiero enviar, en este caso es data, pasandolo a string
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
        setLocalStorage();
      }
    });

  twitterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20¡Conóceme!%20&url=${urlTwitter.href}`;
    window.location.href = url;
  });
}

//Eventos
inputs.addEventListener('keyup', handleKeyupInputs);
btnShare.addEventListener('click', handleClickCreateBtn);

//Incluir foto de avatar

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}
/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
//
// LOCALSTORAGE
//
//
// Añade el objeto "data" a localStorage.
//
function setLocalStorage() {
  // Convierto a "string" el objeto data.
  const locStoData = JSON.stringify(data);
  localStorage.setItem('localData', locStoData);
}
//
// Obtiene la información del objeto "data" de localStorage.
//
function getLocalStorage() {
  let locStoData = localStorage.getItem('localData');

  if (locStoData !== null) {
    const parseLocStoData = JSON.parse(locStoData);
    data = parseLocStoData;
    inputName.value = data.name;
    inputJob.value = data.job;
    inputEmail.value = data.email;
    inputPhone.value = data.phone;
    inputLinkedin.value = data.linkedin;
    inputGithub.value = data.github;
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;

    previewNameElement.innerHTML = data.name;
    previewJobElement.innerHTML = data.job;
    previewEmailElement.href = `mailto:${data.email}`;
    previewPhoneElement.href = `tel:${data.phone}`;
    previewLinkedinElement.href = data.linkedin;
    previewGithubElement.href = data.github;
  }
}

getLocalStorage();
