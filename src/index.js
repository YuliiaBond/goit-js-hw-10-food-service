import menuItemsTemplate from './menu-item.hbs';
import menuItems from './menu.json';
import './styles.css';

// Тема
const themeInput = document.querySelector('.theme-switch__toggle');
themeInput.addEventListener('change', onCheckboxTheme);

const bodyBox = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', Theme.LIGHT);
};
bodyBox.classList = localStorage.getItem('theme');

if (localStorage.getItem('theme') === Theme.DARK) { 
    themeInput.checked = true; 
};

function onCheckboxTheme() {
    if (themeInput.checked === true) {
        
        if (bodyBox.classList.contains(Theme.LIGHT)) {
            bodyBox.classList.remove(Theme.LIGHT);
        };
        bodyBox.classList.add(Theme.DARK);
        themeInput.setAttribute('checked', true);
        localStorage.setItem('theme', bodyBox.classList);
    }
        
    else {
        if (bodyBox.classList.contains(Theme.DARK)) {
            bodyBox.classList.remove(Theme.DARK);
        };
        bodyBox.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', bodyBox.classList);
    };
};

// Шаблонизация
const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuItems(menuItems);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItems(menuItems) {
    return menuItemsTemplate(menuItems);
};