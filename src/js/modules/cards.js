import {getResourse} from '../services/requests';

function getCards(trigger, wrapper) {

    const btn = document.querySelector(trigger);

    btn.addEventListener('click', () => {
        getResourse('http://localhost:3000/styles')
        .then(item => {
            addCards(item);
        })
        .catch();

        btn.remove();
    });

    function addCards(resul) {

        resul.forEach(({src, title, link}) => {
            const div = document.createElement('div');

            div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'imgFadeInUp');

          div.innerHTML = `
            
					<div class="styles-block">
						<img src=${src} alt>
						<h4>${title}</h4>
						<a href="${link}">Подробнее</a>
					</div>
				`;

                document.querySelector(wrapper).appendChild(div);

        });
    }
}

export default getCards;