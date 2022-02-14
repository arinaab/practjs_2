const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItems = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markChef = wrapper.querySelectorAll('.chef'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markGuy = wrapper.querySelectorAll('.guy'),
          noPort = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(item => { //скрываем все элементы
            item.style.display = 'none';
            item.classList.remove('animate__animated', 'animate__fadeIn');
        });

        noPort.style.display = 'none';
        noPort.classList.remove('animate__animated', 'animate__fadeIn');

        if (markType) {
            markType.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animate__animated', 'animate__fadeIn');
            });
        } else {
            noPort.style.display = 'block';
            noPort.classList.add('animate__animated', 'animate__fadeIn');
        }
    };

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            switch (e.target.className) {
                case 'lovers':
                    typeFilter(markLovers);
                    break;
                case 'chef':
                    typeFilter(markChef);
                    break;
                case 'gir':
                    typeFilter(markGirl);
                    break;
                case 'guy':
                    typeFilter(markGuy);
                    break;
                case 'grandmother':
                    typeFilter();
                    break;
                case 'granddad':
                    typeFilter();
                    break;
            }
        });
    });

    menu.addEventListener('click', (e) => { //добавляем класс активности
        if (e.target && e.target.tagName == 'LI') {
            // console.log(e);
            menuItems.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
};

export default filter;