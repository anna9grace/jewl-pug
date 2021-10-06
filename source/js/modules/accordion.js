const accordion = () => {
  const questionsToggles = document.querySelectorAll('.questions__item b');
  const filtersToggles = document.querySelectorAll('.filters__form h3');

  const accordionToggleHandler = (parentClass, evt) => {
    const currentItem = evt.target.parentElement;
    if (!currentItem) {
      return;
    }
    currentItem.classList.toggle(`${parentClass}__closed`);
  };

  const accordionKeydownHandler = (parentClass, evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      accordionToggleHandler(parentClass, evt);
    }
  };

  const setAccordionActive = (toggles, parentClass) => {
    for (const toggle of toggles) {
      const accordionItem = toggle.parentElement;
      if (accordionItem) {
        accordionItem.classList.add(`${parentClass}__closed`);
        toggle.addEventListener('click', accordionToggleHandler.bind(null, parentClass));
        toggle.addEventListener('keydown', accordionKeydownHandler.bind(null, parentClass));
      }
    }
  };

  setAccordionActive(questionsToggles, 'questions');
  setAccordionActive(filtersToggles, 'filters');
};

export {accordion};
