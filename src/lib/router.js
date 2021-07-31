import { login } from './view/templateLogin.js'
import { register } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'
import { firestoreSave } from './database/firestore.js'
import { createUserWithPassword, signInWithPassword, signInWithGoogle } from './auth/authetication.js';

export const changeRoute = (hash) => {
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


                //aca validaremos los campos de enbtrada
                if (email.length == 0) {
                    alert("Por favor ingrese su email")
                } else if((password.length == 0)) {
                    alert("Por favor ingrese su contraseña")
                }else{
                    signInWithPassword(email, password);
                }
            });

            const loginWithGoogle = document.getElementById("iniciarConGoogle");
            loginWithGoogle.addEventListener("click", (event) => {
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
            break;
        case '#/savePost':
            const postData = { content: document.getElementById('post').value };
            const shared = { content: document.getElementById('shared') };
            shared.addEventListener("submit", (event) => {
                event.preventDefault()
                const email = registerForm['email'].value
                firestoreSave("posts", email, postData);

            });


    }
}