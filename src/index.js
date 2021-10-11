import './sass/main.scss';

import menuLayout from './templates/menu-card.hbs';
import menuItem from './menu.json'


const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', menuLayout(menuItem));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeToggleRef = document.querySelector('#theme-switch-toggle')

themeToggleRef.addEventListener('change', onClickToggle);

loadTheme()

function loadTheme() {
    const saveCheckToggle = localStorage.getItem('checked')    
    if (saveCheckToggle === 'true') {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        themeToggleRef.checked = saveCheckToggle;
    }
    bodyRef.classList.add(Theme.LIGHT);    
}

function onClickToggle(ev) {    
    if (ev.target.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);        
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
    }
    localStorage.setItem('checked', ev.target.checked)
}