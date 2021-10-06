import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initMobileMenu} from './modules/init-mobile-menu';
import {accordion} from './modules/accordion';
import {saveFormData} from './modules/save-form-data';
import {initMobileFilters} from './modules/init-mobile-filters';
import {initSliders} from './modules/init-sliders';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
accordion();
initMobileMenu();
saveFormData();
initMobileFilters();
initSliders();
