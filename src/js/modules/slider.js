function slider(slides, direct, prev, next) {

    const items = document.querySelectorAll(slides);
                  
          
        let  indexSlider = 1,
             paused = false;
        
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
                items[indexSlider - 1].classList.add('animate__fadeInRight');

            });
    
            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[indexSlider - 1].classList.remove('animate__slideInRight');
                items[indexSlider - 1].classList.add('animate__fadeInLeft');
            });

            
        } catch (error) {
            
        }

     function animations() {
        
            if (direct === 'vertical') {
        paused = setInterval(function() {
                    plusSlides(1);
                    items.forEach(item => {
                    item.classList.add('animate__slideInDown');
                });
             }, 3000);      
            } else {
        paused = setInterval(() => {
                    plusSlides(1);
                    items[indexSlider - 1].classList.remove('animate__slideInRight');
                    items[indexSlider - 1].classList.add('animate__slideInLeft');
                }, 3000);    
            }
         }

         animations();

         items[0].parentNode.addEventListener('mouseover', () => {
             clearInterval(paused);
         });
         items[0].parentNode.addEventListener('mouseout', () => {
            animations();
        });
     




}

export default slider;