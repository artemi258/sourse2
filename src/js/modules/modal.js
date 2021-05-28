function modals() {
    let clickBtn;

    function bindModal(trigger, modal, close, destroy = false) {

        const     callEngineerBtn = document.querySelectorAll(trigger),
                  modalEngineer = document.querySelector(modal),
                  modalEngineerClose = document.querySelector(close),
                  windows = document.querySelectorAll('[data-modal]'),
                  width = calcScroll();



            callEngineerBtn.forEach(btn => {
               
                btn.addEventListener('click', (e) => {
                    document.body.style.marginRight = `${width}px`;

                    if (e.target) {
                        e.preventDefault();
                    }


                    windows.forEach(item => {
                        item.style.display = 'none';
                        item.classList.add('wow', 'animate__animated', 'animate__fadeIn');
                    });
        
                    modalEngineer.style.display = 'block';
                    // document.body.style.overflow = 'hidden';
                    if (destroy) {
                        btn.remove();
                    }

                    clickBtn = 'click';
                    
                    });
                    
                    
       
            });

            modalEngineerClose.addEventListener('click', () => {
                    
                   
                        modalEngineer.style.display = 'none';
                        document.body.style.overflow = '';
                        
                        document.body.style.marginRight = `0px`;
                        windows.forEach(item => {
                            item.style.display = 'none';
                        });
                     
            });

            modalEngineer.addEventListener('click', (e) => {
                      if (e.target === modalEngineer) {

                            document.body.style.marginRight = `0px`;
                            modalEngineer.style.display = 'none';
                            document.body.style.overflow = '';

                            windows.forEach(item => {
                                item.style.display = 'none';
                            });
                            
                        }
                    });
    }



    function TimeOpenModal(selector, time) {
                setTimeout(() => { 
                    let display;

                   document.querySelectorAll('[data-modal]').forEach(item => {
                       if (getComputedStyle(item).display !== 'none') {
                        display = 'block';
                       }
                   });

                   if (!display) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    let width = calcScroll();

                    document.body.style.marginRight = `${width}px`;
                   }

                    
                }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';



        document.body.appendChild(div);

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();


        return scrollWidth;
    }

 
    function showModalByScroll(selector) {
                    
       

            window.addEventListener('scroll', () => {
                let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // для старых браузеров

                if (!clickBtn && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                    document.querySelector(selector).click();
                }
            

            });
        
    }

    showModalByScroll('.fixed-gift');
    

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);


    TimeOpenModal('.popup-consultation', 1000000);
}

export default modals;