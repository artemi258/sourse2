function burgerNav() {
    const burger = document.querySelector('.burger'),
          burgerMenu = document.querySelector('.burger-menu');

    burger.addEventListener('click', () => {

        if (burgerMenu.style.display == 'block') {
            burgerMenu.style.display = 'none';
        } else if (window.screen.availWidth < 993) {
            burgerMenu.style.display = 'block';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth >= 993) {
            burgerMenu.style.display = 'none';
        }
    });
}

export default burgerNav;