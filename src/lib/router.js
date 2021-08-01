import { login } from './view/templateLogin.js'
import { register } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'
import { firestoreRead, firestoreSave } from './database/firestore.js'
import { createUserWithPassword, signInWithPassword, signInWithGoogle } from './auth/authetication.js';

const containerRoot = document.getElementById('root');
//Mostrar html correcto al recargar la pagina
if(window.location.pathname === '/register'){
    containerRoot.innerHTML = register().innerHTML;
}
else if(window.location.pathname === '/posting'){
    containerRoot.innerHTML = timeLine().innerHTML;
}
//cambiar la url para que no se vea el gatito
export const changeRoute = (hash) => {
    if(hash === '#/register'){
        window.history.replaceState({}, 'register' , '/register');
    }
    else if(hash === '#/posting'){
        window.history.replaceState({} , 'posting' , '/posting');
    }
    return showTemplate(hash);
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root')
    const footer = document.getElementById('footer');
    switch (hash) {
        //asignamos un caso distinto para cada template
        case "":
        case '#/login':
            containerRoot.classList.add('login');
            containerRoot.innerHTML = login().innerHTML;

            const loginForm = document.getElementById("login-form");
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault()
                // asignamos a variables los datos del formulario
                const email = loginForm['email'].value
                const password = loginForm['password'].value
                signInWithPassword(email, password);
            });

            const loginWithGoogle = document.getElementById("iniciarConGoogle");
            loginWithGoogle.addEventListener("click", (event) => {
                // window.location = '#/posting'
                signInWithGoogle();
            });
            break;
        case '#/register':
            containerRoot.innerHTML = register().innerHTML;
            const registerForm = document.getElementById("register-form");
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault()
                // asignamos a variables los datos del formulario
                const name = registerForm['name'].value
                const email = registerForm['email'].value
                const password = registerForm['password'].value
                createUserWithPassword(email, password, name);
            });
            const registerWithGoogle = document.getElementById("registerWithGoogle");
            registerWithGoogle.addEventListener("click", (event) => {
                signInWithGoogle();
            });
            break;
        case '#/posting':
            containerRoot.classList.remove('login');
            footer.classList.add('hide');
            containerRoot.classList.add('posting');
            containerRoot.innerHTML = timeLine().innerHTML;

            firestoreRead();

            break;
        case '#/savePost':
            const postData = { content: document.getElementById('post').value, email: 'paularamirezsot@gmail.com' };
            firestoreSave("posts", postData);

            firestoreRead();
    }
}
window.onpopstate = () => {
    if(window.location.pathname === '/register'){
        containerRoot.innerHTML = register().innerHTML;
    }
    else if(window.location.pathname === '/posting'){
        containerRoot.innerHTML = timeLine().innerHTML;
    }
       

}
