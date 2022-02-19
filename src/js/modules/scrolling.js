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

    const element = document.documentElement, //чтобы не прописывать каждый раз такую структуру
          body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function(e) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault(); //отменяем, т.к. у нас элемент - это ссылка

                let hashElem = document.querySelector(this.hash),
                    hashElemTop = 0;
            
                while (hashElem.offsetParent) { //перебираем всех родителей элемента
                    hashElemTop += hashElem.offsetTop; //и узнаем, сколько пикселей нужно будет долистать
                    hashElem = hashElem.offsetParent;
                }

                hashElemTop = Math.round(hashElemTop);
                smoothScroll(scrollTop, hashElemTop, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;
        
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }
    };
};

export default scrolling;