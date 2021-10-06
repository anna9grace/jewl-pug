import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const initMobileMenu = () => {
  const menuContainer = document.querySelector('.page-header');
  const navigation = document.querySelector('.page-header__nav');
  const menuToggle = document.querySelector('.page-header__menu-btn');
  const smallScreen = window.matchMedia('(max-width: 1023px)');
  let isMenuOpened = false;

  if (!menuToggle || !menuContainer || !navigation) {
    return;
  }

  const renderMobileMenu = () => {
    menuToggle.classList.remove('hidden');
    menuContainer.classList.add('mobile-menu');
  };

  const renderDesktopMenu = () => {
    menuToggle.classList.add('hidden');
    menuContainer.classList.remove('mobile-menu');
    menuContainer.classList.remove('mobile-menu--opened');
    isMenuOpened = false;
  };

  const windowWidthChangeHandler = (evt) => {
    if (evt.matches) {
      renderMobileMenu();
    } else {
      renderDesktopMenu();
    }
    changeScroll();
  };

  const changeScroll = () => {
    if (isMenuOpened && smallScreen.matches) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  };

  const changeMenuOpenState = () => {
    if (!menuContainer.classList.contains('mobile-menu')) {
      return;
    }
    menuContainer.classList.toggle('mobile-menu--opened');
    isMenuOpened = menuContainer.classList.contains('mobile-menu--opened');
    changeScroll();
  };

  if (smallScreen.matches) {
    renderMobileMenu();
  }


  if (smallScreen.addEventListener) {
    smallScreen.addEventListener('change', windowWidthChangeHandler);
  } else {
    smallScreen.addListener(windowWidthChangeHandler);
  }

  menuToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    changeMenuOpenState();
  });

  navigation.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'A') {
      changeMenuOpenState();
    }
  });
};

export {initMobileMenu};
