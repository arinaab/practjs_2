const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animate__animated', 'animate__fadeInUp');
            upElem.classList.remove('animate__fadeOut');
        } else {
            upElem.classList.remove('animate__fadeInUp');
            upElem.classList.add('animate__fadeOut');
        }
    });

    //scrolling with RAF

    let links = document.querySelectorAll('[href^="#"]'), //ищем все локальные ссылки
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

    //pure JS scrolling

    // const element = document.documentElement, //чтобы не прописывать каждый раз такую структуру
    //       body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(e) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (this.hash !== '') {
    //             e.preventDefault(); //отменяем, т.к. у нас элемент - это ссылка

    //             let hashElem = document.querySelector(this.hash),
    //                 hashElemTop = 0;
            
    //             while (hashElem.offsetParent) { //перебираем всех родителей элемента
    //                 hashElemTop += hashElem.offsetTop; //и узнаем, сколько пикселей нужно будет долистать
    //                 hashElem = hashElem.offsetParent;
    //             }

    //             hashElemTop = Math.round(hashElemTop);
    //             smoothScroll(scrollTop, hashElemTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;
        
    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function() { //функция с анимацией
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (prevScrollTop === scrollTop || (to > from && scrollTop >= to) || to < from && scrollTop <= to) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();
};

export default scrolling;