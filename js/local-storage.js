const formData = {};
const appForms = document.forms[0];
const userName = appForms.elements.username;
const userEmail = appForms.elements.email;
const userMessage = appForms.elements.message;

const localStorageSave = (itemKey, ItemValue) => {
  localStorage.setItem(itemKey, ItemValue);
};

const saveUserInfo = () => {
  formData.email = userEmail.value;
  formData.username = userName.value;
  formData.message = userMessage.value;
  localStorageSave('data', JSON.stringify(formData));
};

userEmail.addEventListener('blur', saveUserInfo);
userName.addEventListener('blur', saveUserInfo);
userMessage.addEventListener('blur', saveUserInfo);

const displayUserInfo = () => {
  if (localStorage.getItem('data')) {
    const userInfo = JSON.parse(localStorage.getItem('data'));
    userName.value = userInfo.username;
    userEmail.value = userInfo.email;
    userMessage.value = userInfo.message;
  }
};
// displayUserInfo();
