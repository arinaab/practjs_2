const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'), //для очистки инпутов
          upload = document.querySelectorAll('input[name="upload"]'); //инпуты с выбором файлов

    const checkNumInputs = () => {
        const inputs = document.querySelectorAll('input[name="phone"]');
        inputs.forEach(input => { 
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/, '');
            });
        });
    };

    const clearInputs = () => {
        inputs.forEach(input => input.value = '');
        upload.forEach(item => item.previousElementSibling.textContent = 'Файл не выбран');
    };

    checkNumInputs();

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    };

    upload.forEach(item => { //выбор файлов
        item.addEventListener('input', () => {
            console.log(item.files[0]); //вывод файла
            let dots; //переменная для троеточия
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.'; //одна точка для расширения
            const name = arr[0].substring(0, 6) + dots + arr[1];

            item.previousElementSibling.textContent = name;
        });
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.append(statusMessage); //вставляем блок в родителя формы, чтобы блок был вместо формы

            item.classList.add('animate__animatid', 'animate__fadeOutUp');
            setTimeout( () => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img'), //добавляем картинку
                textMessage = document.createElement('div'); // добавляем оповещение
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animate__animated', 'animate__fadeInUp');
            textMessage.textContent = message.loading;
            statusMessage.append(statusImg, textMessage);

            const formData = new FormData(item);
            let api; //переменная для формирования пути на сервер
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.src = message.ok;
                    textMessage.textContent = message.success;
                })
                .catch( () => {
                    statusImg.src = message.fail;
                    textMessage.textContent = message.failure;
                })
                .finally( () => {
                    clearInputs();
                    setTimeout( () => {
                        statusMessage.remove();
                        item.style.display = 'block';
                    }, 3000);
                    // setTimeout( () => {
                    //     document.querySelectorAll('[data-modal]').forEach(item => item.style.display = 'none');
                    //     document.body.style.overflow = '';
                    // }, 5000);
                });
        });
    });
};

export default forms;