import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/init-accordion';
import {initTabs} from './modules/init-tabs';
import {initSliders} from './modules/sliders/init-sliders';
import {initSubscriptionsCard} from './modules/subscriptions-cost';
import {initVideos} from './modules/init-videos';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initVideos();
    initSubscriptionsCard();
    initSliders();
    initTabs();
    initAccordions();
  });
});

// ---------------------------------
