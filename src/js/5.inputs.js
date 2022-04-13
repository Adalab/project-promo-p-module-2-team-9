'use strict';

const inputs = document.querySelector('.js__inputs');
const previewNameElement = document.querySelector('.js_name');
const previewJobElement = document.querySelector('.js_job');
const previewEmailElement = document.querySelector('.js_email');
const previewPhoneElement = document.querySelector('.js_phone');
const previewLinkedinElement = document.querySelector('.js_linkedin');
const previewGithubElement = document.querySelector('.js_github');

const data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

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

inputs.addEventListener('keyup', handleKeyupInputs);
