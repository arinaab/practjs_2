const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n < 1) {
            slideIndex = items.length;
        }

        if (n > items.length) {
            slideIndex = 1;
        }

        items.forEach(item => {
            item.classList.add('animate__animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('animate__slideInLeft');
            items[slideIndex - 1].classList.add('animate__slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('animate__slideInRight');
            items[slideIndex - 1].classList.add('animate__slideInLeft');
        });

    } catch(e) {

    }

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval( () => {
                plusSlides(1);
                items[slideIndex - 1].classList.add('animate__slideInDown');
            }, 3000);
        } else {
            paused = setInterval( () => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('animate__slideInRight');
                items[slideIndex - 1].classList.add('animate__slideInLeft');
            }, 3000);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;