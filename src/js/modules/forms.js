const forms = () => {
    const form = document.querySelectorAll('form'),
          upload = document.querySelectorAll('input[name="upload"]');

    const checkNumInputs = () => {
        const inputs = document.querySelectorAll('input[name="phone"]');
        inputs.forEach(input => { 
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/, '');
            });
        });
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

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
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
            item.parentNode.append(statusMessage);

            item.classList.add('animate__animatid', 'animate__fadeOutUp');
            setTimeout( () => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img'),
                textMessage = document.createElement('div');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animate__animated', 'animate__fadeInUp');
            textMessage.textContent = message.loading;
            statusMessage.append(statusImg, textMessage);

            const formData = new FormData(item);
            let api;
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
                    item.reset();
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