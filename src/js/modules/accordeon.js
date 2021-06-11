function accordeon() {
    const text = document.querySelectorAll('.accordion-block'),
          header = document.querySelectorAll('.accordion-heading');

    function accordeonTextHide(i) {
        text.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animate__fadeOutUp', 'animate__animated', 'wow');
        });
        header.forEach(item => {
            item.classList.remove('active-block');
            item.firstChild.style.borderBottom = '';
        })
        if (!i) {
            text.forEach(item => {
                item.style.display = 'none';
            });
        } 
        if (i >= 0)  {
            
            text[i].classList.add('animate__fadeInDown', 'animate__animated', 'wow');
            text[i].style.display = 'block';
            header[i].classList.add('active-block');
            header[i].firstChild.style.borderBottom = 'none';
        }
    }

    accordeonTextHide();

    header.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('active-block')) {
                text[i].classList.remove('animate__fadeInDown', 'animate__animated', 'wow');
                text[i].classList.add('animate__fadeOutUp', 'animate__animated', 'wow');
               setTimeout(() => {
                text[i].style.display = 'none';
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