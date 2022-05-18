const Form = document.getElementById('forms');
const email = document.getElementById('email');

const validation = (event) => {
  const emailError = document.querySelector('.error');

  if (email.validity.patternMismatch) {
    email.setCustomValidity('');
    emailError.textContent = 'Enter email in lowercase';
    emailError.classList.add('show');
    event.preventDefault();
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('');
    emailError.textContent = 'Kindly enter email';
    emailError.classList.add('show');
    event.preventDefault();
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('');
    emailError.textContent = 'Kindly enter proper email';
    emailError.classList.add('show');
    event.preventDefault();
  } else {
    email.setCustomValidity('');
    emailError.classList.remove('show');
    event.preventDefault();
  }
};
Form.addEventListener('input', validation);
