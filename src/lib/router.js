import { login } from './view/templateLogin.js'
import { register } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'
import { createUserWithPassword, signInWithPassword, signInWithGoogle } from './auth/authetication.js';

export const changeRoute = (hash) => {
    return showTemplate(hash);

}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root')
    switch (hash) {
        //asignamos un caso distinto para cada template
        case "":
        case '#/login':
            containerRoot.style.height = '75vh'
            containerRoot.style.display = 'flex'
            containerRoot.style.justifyContent = 'space-around'
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
                signInWithGoogle();
            });
            


            iniciarConGoogle

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
            containerRoot.innerHTML = timeLine().innerHTML;
            break;

    }
}