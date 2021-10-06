import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalLogin = document.querySelector('.modal--login');
const modalLoginBtns = document.querySelectorAll('[data-modal="login"]');
const modalAddToCart = document.querySelector('.modal--add-to-cart');
const modalAddToCartBtns = document.querySelectorAll('[data-modal="add-to-cart"]');


const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalLogin && modalLoginBtns.length) {
    setupModal(modalLogin, false, modalLoginBtns, false, false);
  }
  if (modalAddToCart && modalAddToCartBtns.length) {
    setupModal(modalAddToCart, false, modalAddToCartBtns);
  }
};

export {initModals};
