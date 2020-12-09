import templateMenuCard from '../templates/card.hbs';

// import { refs } from './variables.js';

// TODO: Створення розмітки
const createMenuMarkup = templateMenuCard(menuFood);

refs.menuList.insertAdjacentHTML('afterbegin', createMenuMarkup);
