import WOW from "wow.js";
import modals from "./modules/modal";
import slider from './modules/slider';

new WOW().init();

window.addEventListener('DOMContentLoaded', () => {
        'use strick';

        modals();
        slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
        slider('.main-slider-item', 'vertical');
});
