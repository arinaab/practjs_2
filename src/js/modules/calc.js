const calc = (size, material, options, promocode, result, state, prop, ) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
            state[prop] = sum;
        } else {
            resultBlock.textContent = sum;
            state[prop] = sum;
        }

        console.log(state);
    };

    const toState = (block, selectProp, eventType) => {
        block.addEventListener(eventType, () => {
            state[selectProp] = block.value;
            console.log(state);
        });
    };

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);

    toState(sizeBlock, 'size', 'change');
    toState(materialBlock, 'material', 'change');
    toState(optionsBlock, 'options', 'change');
    toState(promocodeBlock, 'promocode', 'input');

    
};

export default calc;