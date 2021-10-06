import {setupModal} from '../utils/modal';

const filtersCloseBtn = document.querySelector('.filters__close-btn');
const modalFilters = document.querySelector('.catalog__filters');
const modalFiltersBtn = document.querySelectorAll('[data-modal="filters"]');
const modalFiltersOverlay = document.querySelector('.catalog__filters-overlay');
const smallScreen = window.matchMedia('(max-width: 1023px)');

const FiltersActions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

const initMobileFilters = () => {

  const handleFiltersViewChange = (action) => {
    switch (action) {
      case FiltersActions.ADD:
        modalFilters.classList.add('modal', 'catalog__filters--mobile');
        modalFiltersOverlay.classList.add('modal__overlay');
        filtersCloseBtn.classList.add('modal__close-btn', 'filters__close-btn--mobile');
        modalFiltersBtn[0].classList.add('catalog__filters-btn--mobile');
        setupModal(modalFilters, false, modalFiltersBtn, false, false);
        break;
      case FiltersActions.REMOVE:
        modalFilters.classList.remove('catalog__filters--mobile', 'modal');
        modalFiltersOverlay.classList.remove('modal__overlay');
        filtersCloseBtn.classList.remove('modal__close-btn', 'filters__close-btn--mobile');
        modalFiltersBtn[0].classList.remove('catalog__filters-btn--mobile');
        break;
    }
  };

  if (modalFilters && modalFiltersBtn.length > 0 && filtersCloseBtn) {
    if (smallScreen.matches) {
      handleFiltersViewChange('ADD');
    }

    const handleScreenChange = (evt) => {
      if (evt.matches) {
        handleFiltersViewChange('ADD');
      } else {
        handleFiltersViewChange('REMOVE');
      }
    };

    if (smallScreen.addEventListener) {
      smallScreen.addEventListener('change', (evt) => {
        handleScreenChange(evt);
      });
    } else {
      smallScreen.addListener((evt) => {
        handleScreenChange(evt);
      });
    }
  }
};

export {initMobileFilters};
