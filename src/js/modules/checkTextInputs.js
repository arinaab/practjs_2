const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(item => {
        let value = item.value;
        item.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
                item.value = value;
            } else {
                value = item.value;
            }
        });
    });
};

export default checkTextInputs;