const trad = document.querySelector('.mobile-menu');
const tradBtnOpen = document.querySelector('.trad-btn-open');
const tradBtnClose = document.querySelector('.trad-btn-close');

const toggleTrad = () => trad.classList.toggle('is-open');

tradBtnOpen.addEventListener('click', toggleTrad);
tradBtnClose.addEventListener('click', toggleTrad);