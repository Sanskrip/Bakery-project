const chef = document.querySelector('.mobile-menu');
const chefBtnOpen = document.querySelector('.chef-btn-open');
const chefBtnClose = document.querySelector('.chef-btn-close');

const toggleChef = () => chef.classList.toggle('is-open');

chefBtnOpen.addEventListener('click', toggleChef);
chefBtnClose.addEventListener('click', toggleChef);