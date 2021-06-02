import WOW from "wow.js";
import modals from "./modules/modal";
import slider from './modules/slider';
import forms from './modules/forms';
import checkMask from './modules/checkMask';
import checkTextInputs from './modules/checkTextInputs';
import cards from './modules/cards';

new WOW().init();

window.addEventListener('DOMContentLoaded', () => {
        'use strick';

        modals();
        slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
        slider('.main-slider-item', 'vertical');
        forms();
        checkMask('[name="phone"]');
        checkTextInputs('[name="name"]');
        checkTextInputs('[name="message"]');
        cards('.button-styles', '.style_cards');
});
