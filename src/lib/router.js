import { login } from './view/templateLogin.js'
import { register } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'
import { footer } from './view/templateFooter.js'
import { firestoreRead, firestoreSave } from './database/firestore.js'
import { createUserWithPassword, signInWithPassword, signInWithGoogle, currentUser } from './auth/authetication.js';

//cambiar la url para que no se vea el gatito
export const changeRoute = (hash) => {
    // hash = '#/register
    hash = hash.replace('#', '');
    // hash = '/register'

    window.history.replaceState({}, hash.replace('/', ''), hash);
    // hash.replace('/', '') == 'register'
    // /register
    return showTemplate(hash);
}

export const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');

    // Aquí se carga el footer una sola vez
    if (!document.getElementById('footer')) {
        containerRoot.parentNode.insertBefore(footer(), containerRoot.nextSibling);
    }

    switch (hash) {
        //asignamos un caso distinto para cada template
        case '/':
        case '/login':
            containerRoot.classList.add('login');
            containerRoot.innerHTML = login().innerHTML;

            const loginForm = document.getElementById("login-form");
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault()
                // asignamos a variables los datos del formulario
                const email = loginForm['email'].value
                const password = loginForm['password'].value


                //aca validaremos los campos de entrada
                if (email.length == 0) {
                    alert("Por favor ingrese su email")
                } else if ((password.length == 0)) {
                    alert("Por favor ingrese su contraseña")
                } else {
                    signInWithPassword(email, password);
                }
            });

            const loginWithGoogle = document.getElementById("iniciarConGoogle");
            loginWithGoogle.addEventListener("click", (event) => {
                signInWithGoogle();
            });

            break;
        case '/register':
            containerRoot.innerHTML = register().innerHTML;
            const registerForm = document.getElementById("register-form");
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault()
                // asignamos a variables los datos del formulario
                const name = registerForm['name'].value
                const email = registerForm['email'].value
                const password = registerForm['password'].value

                 //aca validaremos los campos de entrada
                 if(name.length == 0) {
                     alert("Por favor ingrese su nombre")
                 }
                 if (email.length == 0) {
                    alert("Por favor ingrese su email")
                } else if ((password.length == 0)) {
                    alert("Por favor ingrese su contraseña")
                } else {

                createUserWithPassword(email, password, name);
                }
            });

            const registerWithGoogle = document.getElementById("registerWithGoogle");
            registerWithGoogle.addEventListener("click", (event) => {
                signInWithGoogle();
            });

            break;
        case '/posting':
            containerRoot.classList.remove('login');
            containerRoot.classList.add('posting');
   
            containerRoot.innerHTML = timeLine().innerHTML;
            firestoreRead();
            
        
            
            

            break;
        case '/savePost':
            const userActive = currentUser();
            const validation = document.getElementById('post').value;
            if(validation.length == 0){
                alert('ingresa un campo correcto');
            }
            const postData = {
                content: validation,
                email: userActive.email,
                uid: userActive.uid,
                timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
                displayname: userActive.displayName,
            

            };

            firestoreSave("posts", postData);
            firestoreRead(); 
            window.history.replaceState({}, 'posting', '/posting');
    }
}
