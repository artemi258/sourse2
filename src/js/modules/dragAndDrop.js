import {postData} from '../services/requests';

function drop() {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(fileName => {
        fileInputs.forEach(input => {
            input.addEventListener(fileName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        // e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.boxShadow = '0px 0px 30px 5px #c51abb';
    }
    function unHighLight(item) {
        item.closest('.file_upload').style.boxShadow = 'none';
    }
    ['dragenter','dragover'].forEach(fileName => {
        fileInputs.forEach(input => {
            input.addEventListener(fileName, () => highLight(input), false);
        });
    });
    ['dragleave', 'drop'].forEach(fileName => {
        fileInputs.forEach(input => {
            input.addEventListener(fileName, () => unHighLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
                const arr = input.files[0].name.split('.');
                arr[0].length > 7 ? dots = '...' : dots = '.';
                const name = arr[0].substring(0, 8) + dots + arr[1];
                input.previousElementSibling.textContent = name ;

                const fromData = new FormData();
                fromData.append('Files', input.files[0]);

                let statusMessage = document.createElement('div');

                postData('assets/server.php', fromData)
                .then(item => {

                    statusMessage.classList.add('status');
                    statusMessage.textContent = 'Отправлено!';
                    input.parentNode.appendChild(statusMessage);
                    console.log(item);
                })
                .catch()
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                        fileInputs.forEach(item => {
                            item.previousElementSibling.textContent = 'Файл не выбран';
                    });
                    }, 5000);
                    
                });
        });
    });

}

export default drop;