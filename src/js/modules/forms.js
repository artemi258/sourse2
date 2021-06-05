import {postData} from '../services/requests';
   function forms(product) {
        const form = document.querySelectorAll('form'),
              input = document.querySelectorAll('input'),
              upLoad = document.querySelectorAll('[name="upload"]');


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

       const clearInput = () => {
           input.forEach(item => {
               item.value = '';
           });
           upLoad.forEach(item => {
               item.previousElementSibling.textContent = 'Файл не выбран';
           });
       };

       upLoad.forEach(item => {
            item.addEventListener('input', () => {
                let dots;
                const arr = item.files[0].name.split('.');
                arr[0].length > 10 ? dots = '...' : dots = '.';
                const name = arr[0].substring(0, 11) + dots + arr[1];
                item.previousElementSibling.textContent = name ;
            });
       });

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

                let statusImg = document.createElement('img');   
                    statusImg.classList.add('imgFadeInUp');                                                                        
                    statusImg.setAttribute('src', message.spinner);
                    statusMessage.appendChild(statusImg);
    
                let textMessage = document.createElement('div');
                    textMessage.textContent = message.loading;
                    statusMessage.appendChild(textMessage);

                const formData = new FormData(item);

                

                let api;

                item.closest('.popup-design') || item.classList.contains('calc_form') ? api = 'http://localhost:3000/user' : api = 'http://localhost:3000/user';
                console.log(api);

             if (api == 'http://localhost:3000/user') {
               for (let key in product) {
                   formData.append(key, product[key]);
               }
             }

             const json = JSON.stringify(Object.fromEntries(formData.entries()));

                postData(api, json)
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