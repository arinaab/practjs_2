const showMoreStyles = (triggerSelector, contentSelector) => {
    const trigger = document.querySelector(triggerSelector),
          content = document.querySelectorAll(contentSelector);

    content.forEach(item => {
        item.classList.add('animate__animated', 'animate__fadeIn');
    });

    trigger.addEventListener('click', () => {
        trigger.remove();

        content.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
    });
};

export default showMoreStyles;