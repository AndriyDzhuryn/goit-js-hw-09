'use strict';

let formData = {
  email: '',
  message: '',
};
const formFeedback = document.querySelector('.feedback-form');

function inputFromLocalStorage() {
  if (localStorage.getItem('feedback-form-state') !== null) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    for (const key in formData) {
      formFeedback.elements[key].value = formData[key];
    }
  }
  return;
}
inputFromLocalStorage();

formFeedback.addEventListener('input', onInputFeedback);
formFeedback.addEventListener('submit', onSubmitFeedback);

function onInputFeedback(evt) {
  formData.email = evt.currentTarget.elements.email.value.trim();
  formData.message = evt.currentTarget.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitFeedback(evt) {
  evt.preventDefault();
  if (
    evt.target.elements.email.value.trim() !== '' &&
    evt.target.elements.message.value.trim() !== ''
  ) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    evt.target.reset();
  } else {
    alert('Fill please all fields');
  }
}
