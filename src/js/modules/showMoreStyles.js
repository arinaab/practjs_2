import { getResourse} from "../services/requests";

const showMoreStyles = (triggerSelector, wrapperSelector) => {
    const trigger = document.querySelector(triggerSelector);

    trigger.addEventListener('click', function() {
        this.remove();

        getResourse('http://localhost:3000/styles')
        .then(res => createCards(res))
        .catch( () => {
            const er = document.createElement('div');
            er.classList.add('status', 'status_er');
            er.textContent = 'Что-то пошло не так... Сервер не отвечает';
            document.querySelector(wrapperSelector).append(er);
        });
    });
    
    function createCards(response) {
        response.forEach(({src, title, link}) => {

            const card = document.createElement('div');
            card.classList.add('animate__animated', 'animate__fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="styles">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapperSelector).append(card);
        });
    }
};

export default showMoreStyles;