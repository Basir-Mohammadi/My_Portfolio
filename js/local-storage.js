const name = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('text');
const button = document.getElementById('btn');

button.onclick = function () {
  const user = name.value;
  const mail = email.value;
  const sms = message.value;

  if (user && mail && sms) {
    localStorage.setItem(user, mail, sms);
  }
};