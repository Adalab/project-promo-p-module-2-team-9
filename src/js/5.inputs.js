// 'use strict';

// const inputs = document.querySelector('.js__inputs');
// const previewNameElement = document.querySelector('.js_name');
// const previewJobElement = document.querySelector('.js_job');
// const previewEmailElement = document.querySelector('.js_email');
// const previewPhoneElement = document.querySelector('.js_phone');
// const previewLinkedinElement = document.querySelector('.js_linkedin');
// const previewGithubElement = document.querySelector('.js_github');

// let data = {
//   palette: 1,
//   name: '',
//   job: '',
//   email: '',
//   phone: '',
//   linkedin: '',
//   github: '',
//   photo: '',
// };

// function renderPreview() {
//   //previewNameElement.innerHTML = data.name;
//   //previewJobElement.innerHTML = data.job;
//   previewEmailElement.href = `mailto: ${data.email}`;
//   previewPhoneElement.href = `tel: ${data.phone}`;
//   previewLinkedinElement.href = data.linkedin;
//   previewGithubElement.href = data.github;
//   if (data.name === '') {
//     previewNameElement.innerHTML = 'Nombre Apellido';
//   } else {
//     previewNameElement.innerHTML = data.name;
//   }
//   if (data.job === '') {
//     previewJobElement.innerHTML = 'Front-end developer';
//   } else {
//     previewJobElement.innerHTML = data.job;
//   }
// }

// function handleKeyupInputs(event) {
//   event.preventDefault();
//   const elementWhereUserIsTyping = event.target;
//   if (elementWhereUserIsTyping.name === 'name') {
//     data.name = elementWhereUserIsTyping.value;
//   } else if (elementWhereUserIsTyping.name === 'job') {
//     data.job = elementWhereUserIsTyping.value;
//   } else if (elementWhereUserIsTyping.name === 'email') {
//     data.email = elementWhereUserIsTyping.value;
//   } else if (elementWhereUserIsTyping.name === 'phone') {
//     data.phone = elementWhereUserIsTyping.value;
//   } else if (elementWhereUserIsTyping.name === 'linkedin') {
//     data.linkedin = elementWhereUserIsTyping.value;
//   } else if (elementWhereUserIsTyping.name === 'github') {
//     data.github = elementWhereUserIsTyping.value;
//   }
//   renderPreview();
// }

// inputs.addEventListener('keyup', handleKeyupInputs);

// //6.reset
// // buttonCancelForm.addEventListener('click', (event) => {
// //   event.preventDefault();
// //   const allResetInputs = document.querySelectorAll('.js-reset');
// //   for (const eachResetInput of allResetInputs) {
// //     eachResetInput.value = '';
// //     previewNameElement.innerHTML = 'Nombre Apellido';
// //     previewJobElement.innerHTML = 'Front-end developer';
// //     previewEmailElement.href = `mailto: ${''}`;
// //     previewPhoneElement.href = `tel: ${''}`;
// //     previewLinkedinElement.href = '';
// //     previewGithubElement.href = '';
// //     profileImage.style.backgroundImage = '';
// //     profilePreview.style.backgroundImage = '';
// //   }
// // });
// //7.share
// const btnShare = document.querySelector('.js-share-btn');
// const twitterBtn = document.querySelector('.js-twitter-button');
// let msg = document.querySelector('.js-message');
// const urlTwitter = document.querySelector('.js-url');
// const textCard = document.querySelector('.js-create');

// function handleClickCreateBtn(event) {
//   event.preventDefault();
//   // twitterBtn.addEventListener('click', () => {
//   //   const urlCard = `https://twitter.com/${url.href}`;
//   // });

//   fetch('https://awesome-profile-cards.herokuapp.com/card', {
//     method: 'POST', // enviar datos a la API
//     headers: { 'Content-Type': 'application/json' }, //tipo de dato
//     body: JSON.stringify(data), //datos que de quiero enviar, en este caso es data, pasandolo a string
//   })
//     .then((response) => response.json())
//     .then((serverResp) => {
//       msg.classList.remove('hidden');
//       if (serverResp.success === false) {
//         textCard.innerHTML = 'Ha habido un error. Rellena todos los campos.';
//         urlTwitter.classList.add('hidden');
//         console.log(data);
//       } else {
//         textCard.innerHTML = 'La tarjeta ha sido creada';
//         urlTwitter.innerHTML = serverResp.urlCard;
//         urlTwitter.href = serverResp.urlCard;
//       }
//     });
// }

// // function twitterUrl(event) {
// //   event.preventDefault();
// //   const urlCard = `https://twitter.com/${url.href}`;
// // }

// //twitterBtn.addEventListener('click', twitterUrl);
// btnShare.addEventListener('click', handleClickCreateBtn);
