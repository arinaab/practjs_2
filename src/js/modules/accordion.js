const accordion = (headersSelector, blocksSelector) => {
    const headers = document.querySelectorAll(headersSelector),
          blocks = document.querySelectorAll(blocksSelector);

    blocks.forEach(block => {
        block.classList.add('animate__animated', 'animate__flipInX');
    });

    headers.forEach(header => {
        header.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                headers.forEach(btn => btn.classList.remove('active', 'active-style'));
                this.classList.add('active', 'active-style');
            }
        });
    });
};

export default accordion;