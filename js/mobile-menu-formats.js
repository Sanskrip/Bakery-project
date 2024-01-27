const form = document.querySelector('.mobile-menu');
const formBtnOpen = document.querySelector('.form-btn-open');
const formBtnClose = document.querySelector('.form-btn-close');

const toggleForm = () => form.classList.toggle('is-open');

formBtnOpen.addEventListener('click', toggleForm);
formBtnClose.addEventListener('click', toggleForm);