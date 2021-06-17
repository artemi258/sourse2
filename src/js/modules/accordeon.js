function accordeon() {
    const header = document.querySelectorAll('.accordion-heading');

    function accordeonTextHide() {
        header.forEach(item => {
            item.addEventListener('click', function() {
                
                if (this.classList.contains('header-active')) {
                    this.classList.remove('header-active');
                    this.nextElementSibling.classList.remove('active-text');
                    this.nextElementSibling.style.maxHeight = '0px';
                } else if (!this.classList.contains('header-active')) {
                    header.forEach(item => {
                        item.classList.remove('header-active');
                        item.nextElementSibling.classList.remove('active-text');
                        item.nextElementSibling.style.maxHeight = '0px';
                    });
                    this.classList.add('header-active');
                    this.nextElementSibling.classList.add('active-text');
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 60 + 'px';
                }
            });
        });
    }
    accordeonTextHide();
}

export default accordeon;