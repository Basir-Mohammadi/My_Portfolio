
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

const name = document.querySelector('fname');
const email1 = document.querySelector('email');
const message = document.querySelector('textarea');

function storeValues(name, email1, message) {
  const dataObject = JSON.stringify({ name, email1, message });
  localStorage.setItem('dataObject', dataObject);
}

function populateStorage() {
  const formValues = JSON.parse(localStorage.getItem('dataObject'));
  if (formValues) {
    name.value = formValues.name;
    email1.value = formValues.email1;
    message.value = formValues.message;
  }
}

function getValues() {
  name.addEventListener('input', () => storeValues(name.value, email1.value, message.value));
  email1.addEventListener('input', () => storeValues(name.value, email1.value, message.value));
  message.addEventListener('input', () => storeValues(name.value, email1.value, message.value));
}

populateStorage();
getValues();





// const name = document.getElementById('fname');
// // const email = document.getElementById('email');
// const message = document.getElementById('text');
// const button = document.getElementById('btn');

// button.onclick = function () {
//   const user = name.value;
//   const mail = email.value;
//   const sms = message.value;

//   if (user && mail && sms) {
//     localStorage.setItem(user, mail, sms);
//   }
// };

// const firstName = document.querySelector('#fname');
//  const email = document.querySelector('#email');
// const message = document.querySelector('#text');
// function storeData() {
//   let Dataform = {
//     'fname': firstName.value,
//     'email': email.value,
//     'message': message.value
// }

//   localStorage.setItem('form-data', JSON.stringify(Dataform));
// }
// function fetchData(){
//   let data=localStorage.getItem('form-data');
//     if(data){
//         fetch=JSON.parse(data);
//         firstName.value = fetch.firstname;
//         email.value = fetch.email;
//         message.text = fetch.messsage;
//     }
// }

// window.onload = () => {
//   firstName.addEventListener('input', storeData());
//   email.addEventListener('input', storeData());
//   message.addEventListener('input', storeData());
//   fetchData();
// };

