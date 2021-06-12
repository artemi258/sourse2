function accordeon() {
    const text = document.querySelectorAll('.accordion-block'),
          header = document.querySelectorAll('.accordion-heading');

    function accordeonTextHide(i) {
        text.forEach(item => {
            // item.style.display = 'none';
            item.style.maxHeight = '0';
            item.classList.remove('active-text');
        });
        header.forEach(item => {
            item.classList.remove('active-block');
            item.firstChild.style.borderBottom = '';                //'animate__fadeOutUp', 'animate__animated', 'wow',
        })                                                              //'animate__fadeInDown', 'animate__animated', 'wow',
        if (!i) {
            text.forEach(item => {
                item.style.maxHeight = '0';
                // item.style.display = 'none';
            });
        } 
        if (i >= 0)  {
            
            text[i].classList.add('active-text');
            // text[i].style.display = 'block';
            text[i].style.maxHeight = `${text[i].firstChild.offsetHeight}px`;
            console.log(text[i].firstChild.offsetHeight);
            header[i].classList.add('active-block');
            header[i].firstChild.style.borderBottom = 'none';
        }
    }

    // accordeonTextHide();

    header.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('active-block')) {
                text[i].classList.remove( 'active-text');
                // text[i].classList.add('animate__fadeOutUp', 'animate__animated', 'wow');
               setTimeout(() => {
                // text[i].style.display = 'none';
                text[i].style.maxHeight = '0';
               }, 400);  
                header.forEach(item => {
                    item.classList.remove('active-block');
                    item.firstChild.style.borderBottom = '';
                });
                
            } else if (e.target.parentNode == item) {
                accordeonTextHide(i);
            }
        });
    });
}

export default accordeon;