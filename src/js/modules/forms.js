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

                item.classList.add('wow', 'animate__animated', 'animate__fadeOutUp');
             setTimeout(() => {
                item.style.display = 'none';
             }, 400);   

                let statusImg = document.createElement('img');                                                                              
                    statusImg.setAttribute('src', message.spinner);
                    statusImg.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
                    statusMessage.appendChild(statusImg);

                    

                let textMessage = document.createElement('div');
                    textMessage.textContent = message.loading;
                    statusMessage.appendChild(textMessage);

                  

                const formData = new FormData(item);

                let api;

                item.closest('.popup-design') ? api = path.designer : api = path.question;
                console.log(api);

                postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                    
                })
                .catch(() => {
                    statusMessage.textContent = message.error;
                })
                .finally(() => {
                    clearInput();
                    item.classList.remove('animate__fadeOutUp');
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.add('animate__fadeInUp');
                    }, 5000);
                });

            });
        });
   }    

   export default forms;