const drop = () => {
    const fileInputs = document.querySelectorAll('input[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) { //ф-я для подсвечивания нужной области при перетаскивании
        item.closest('.file_upload').style.border = '5px solid #f7e7e6';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .2)';
    }

    function unhighlight(item) { //ф-я для возвращения исходных стилей элементов
        item.closest('.file_upload').style.border = 'none';
        
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files; //dataTransfer это объект с файлом, который мы перетаскиваем

            let dots; //переменная для троеточия
            const arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.'; //одна точка для расширения
            const name = arr[0].substring(0, 6) + dots + arr[1];

            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;