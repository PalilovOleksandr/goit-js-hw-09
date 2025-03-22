const form = document.querySelector('.feedback-form');
const label = form.querySelectorAll('label');
const formData = { email: '', message: '' };
const LOCALSTORAGE_KEY = 'feedback-form-state';
const btn = form.querySelector('button');

for (const item of label) {
  item.classList.add('label-form');
}
btn.classList.add('btn-form');

form.addEventListener('input', saveHandleInput);
function saveHandleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    try {
      const storageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      form.elements.email.value = storageData.email;
      form.elements.message.value = storageData.message;
      formData.email = storageData.email;
      formData.message = storageData.message;
    } catch (error) {
      console.log(error);
    }
  }
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeIte(LOCALSTORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
    return;
  }
  alert('Fill please all fields');
}
