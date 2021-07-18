// Este es el punto de entrada de tu aplicacion

import { changeRoute } from './lib/router.js';
 
const init = () => {
    window.onload = changeRoute('#/login');
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        changeRoute(window.location.hash);
    });
};

init();
