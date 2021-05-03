import menuItemsTemplate from './menu-item.hbs';
import menuItems from './menu.json';
import './styles.css';

// Тема
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// Шаблонизация
const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuItems(menuItems);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItems(menuItems) {
    return menuItemsTemplate(menuItems);
}