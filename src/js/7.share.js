// 'use strict';

// const btnShare = document.querySelector('.js-share-btn');
// const twitterBtn = document.querySelector('.js-twitter-button');
// let msg = document.querySelector('.js-message');

// function handleClickCreateBtn(event) {
//   event.preventDefault();
//   fetch('https://awesome-profile-cards.herokuapp.com/card', {
//     method: 'POST', // enviar datos a la API
//     headers: { 'Content-Type': 'application/json' }, //tipo de dato
//     body: JSON.stringify(data), //datos que de quiero enviar, en este caso es data, pasandolo a string
//   })
//     .then((response) => response.json())
//     .then((serverResp) => {
//       if (serverResp.success === false) {
//         msg.innerHTML += 'Ha habido un error. Rellena todos los campos.';
//       } else {
//         msg.innerHTML = serverResp.urlCard;
//         urlCard.href = serverResp.urlCard;
//       }
//     });
// }

// function twitterUrl(event) {
//   event.preventDefault();
//   const urlCard = `https://twitter.com/${url.href}`;
// }

// twitterBtn.addEventListener('click', twitterUrl);
// btnShare.addEventListener('click', handleClickCreateBtn);
