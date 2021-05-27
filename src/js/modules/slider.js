function slider(slides, direct, prev, next) {

    const items = document.querySelectorAll(slides);
          
          
        let  indexSlider = 1;
        
        function showSlider(n) {
            if (n > items.length) {
                indexSlider = 1;
            }
            if (n < 1) {
                indexSlider = items.length;
            }

            items.forEach(item => {
                item.style.display = 'none';
                item.classList.add('wow', 'animate__animated');
            });

            items[indexSlider - 1].style.display = 'block';
        }

        showSlider(indexSlider);


        

        function plusSlides(n) {
            showSlider(indexSlider += n);
        }

        try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[indexSlider - 1].classList.remove('animate__slideInLeft');
                items[indexSlider - 1].classList.add('animate__slideInRight');

            });
    
            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[indexSlider - 1].classList.remove('animate__slideInRight');
                items[indexSlider - 1].classList.add('animate__slideInLeft');
            });

            
        } catch (error) {
            
        }

     setInterval(function autoSlider() {
        if (direct === 'vertical') {
            items.forEach(item => {
                item.classList.add('animate__slideInDown', 'wow', 'animate__animated');
            });
            plusSlides(1);
        } else {
            plusSlides(1);
                items[indexSlider - 1].classList.remove('animate__slideInRight');
                items[indexSlider - 1].classList.add('animate__slideInLeft');
        }
     }, 3000);   

}

export default slider;