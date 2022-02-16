const accordion = (headersSelector, blocksSelector) => {
    const headers = document.querySelectorAll(headersSelector);
        //   blocks = document.querySelectorAll(blocksSelector);

    headers.forEach(item => {
        item.addEventListener('click', function() {
            hideBlocks();
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';

            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    const hideBlocks = () => {
        headers.forEach(item => {
            const nextSibl = item.nextElementSibling;
            item.classList.remove('active-style');
            nextSibl.classList.remove('active-content');
        });
    };

    // blocks.forEach(block => {
    //     block.classList.add('animate__animated', 'animate__flipInX');
    // });

    // headers.forEach(header => {
    //     header.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             headers.forEach(btn => btn.classList.remove('active', 'active-style'));
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });


};

export default accordion;