const burger = () => {
    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.burger-menu');

    menu.classList.add('animate__animated', 'animate__fadeInLeft');
    menu.style.display = 'none'; //скроем меню

    
    burger.addEventListener('click', () => {
        if (menu.style.display == 'none' && window.screen.availWidth <= 992) {
            menu.style.display = 'block';
            // menu.classList.remove('animate__fadeInLeft');
            
        } else {
            // menu.classList.add('animate__fadeInRight');
            menu.style.display = 'none';
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });
    
};

export default burger;