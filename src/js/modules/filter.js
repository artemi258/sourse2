function filter() {

    const menu = document.querySelector('.portfolio-menu'),
          menuTab = menu.querySelectorAll('li'),
          wrapperImg = document.querySelectorAll('.portfolio-wrapper .all'),
          portfNo = document.querySelector('.portfolio-no');

    function hideFilter(i, photo) {

        wrapperImg.forEach(item  => {

            item.classList.remove('imgFadeIn');
            item.style.display = 'none';
        });
        
        menuTab.forEach(item => {
            item.classList.remove('active');
        });  

        menuTab[i].classList.add('active');

        portfNo.classList.add('imgFadeIn');
                portfNo.style.display = 'block';

        wrapperImg.forEach(item => {
            if (item.classList.contains(photo)) {

                portfNo.classList.remove('imgFadeIn');
                portfNo.style.display = 'none';
                item.classList.add('imgFadeIn');
                item.style.display = 'block';
            }
        });
    }

   hideFilter(0, 'all');

        menu.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.tagName == 'LI') {

                menuTab.forEach((item, i) => {
                    
                    if (target == item) {
                        
                        hideFilter(i, item.getAttribute('data-portf'));
                    }
                   
                });
            }
        });
}

export default filter;