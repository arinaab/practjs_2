const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus(); //установили фокус на элемент

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select(); //выделяем значение, сформировавшееся выше
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __', //маска, которую мы будем использовать
            i = 0, //счетчик
            def = matrix.replace(/\D/g, ''), //получаем из матрицы значения, не соответствующие числовым
            val = this.value.replace(/\D/g, ''); //получаем из того, что ввел пользователь

        if (def.length >= val.length) {
            val = def; //записываем стандартное значение def
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

export default mask;