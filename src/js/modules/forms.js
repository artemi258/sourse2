// import checkNumInputs from "./checkNumInputs";

   function forms() {
        const form = document.querySelectorAll('form'),
              input = document.querySelectorAll('input');

        // checkNumInputs('input[name="user_phone"]');

        const message = {
            loading: 'Загрузка...',
            success: 'Отправлено!',
            error: 'Ошибка',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png'
        };

        const path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'
        };

        const  postData = async (url, data) => {

        let statusImg = document.createElement('img');   
            statusImg.classList.add('imgFadeInUp');                                                                        
            statusImg.setAttribute('src', message.spinner);
            statusMessage.appendChild(statusImg);

        let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            // document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });

            return await res.text();
                  

        };

       const clearInput = () => {
           input.forEach(item => {
               item.value = '';
           });
       };

        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                    statusMessage.classList.add('status');
                    item.parentNode.appendChild(statusMessage);


                item.classList.remove('formStyleBottom');
                item.classList.add('formStyleUp');
                setTimeout(() => {
                   item.style.display = 'none';
                }, 500);   

                
               

               

                  

                const formData = new FormData(item);

                let api;

                item.closest('.popup-design') ? api = path.designer : api = path.question;
                console.log(api);

                postData(api, formData)
                .then(res => {
                    statusImg.setAttribute('src', message.ok);
                    console.log(res);
                    textMessage.textContent = message.success;
                    
                })
                .catch(() => {
                    statusMessage.textContent = message.error;
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('formStyleUp');
                        item.classList.add('formStyleBottom');
                    }, 5000);
                });

            });
        });
   }    

   export default forms;