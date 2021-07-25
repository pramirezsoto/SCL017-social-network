// Este es el punto de entrada de tu aplicacion

import { changeRoute } from './lib/router.js';

const init = () => {
    window.onload = changeRoute('#/login');
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        changeRoute(window.location.hash);
    });
};
import { myFunction } from './lib/index.js';
import { firebaseConfig } from './lib/config/configFirebase.js';


firebase.initializeApp(firebaseConfig);
firebase.analytics();

// signInWithPassword("quijadabnicolea@gmail.com", "123456");


init();
