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
