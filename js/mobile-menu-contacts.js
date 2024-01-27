const cont = document.querySelector('.mobile-menu');
const contBtnOpen = document.querySelector('.cont-btn-open');
const contBtnClose = document.querySelector('.cont-btn-close');

const toggleCont = () => cont.classList.toggle('is-open');

contBtnOpen.addEventListener('click', toggleCont);
contBtnClose.addEventListener('click', toggleCont);