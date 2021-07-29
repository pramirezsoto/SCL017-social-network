export const createUserWithPassword = (email, password, names) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            user.updateProfile({
                displayName: names
            })
            let actionCodeSettings = {
                url: 'http://localhost:5000/'
            }

            user.sendEmailVerification(actionCodeSettings)
                .then(() => {
                    console.log('se envio el correo de verificacion')

                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    alert(`Se produjo un error al verificar email. Error: ${errorMessage} ${errorCode}`);


                })
            // una vez creada la cuenta con el signOut se cierra la sesion y hay que iniciar
            // con email y clave
            firebase.auth().signOut();

            alert(`la cuenta fue creada, verifica el correo que te hemos enviado`)
            console.log("usuario creado exitosamente");
            console.log(user);
            //aqui redirecciono a pagina login
            window.location = '#/login'

        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(`Se produjo un error al crear cuenta. Error: ${errorMessage} ${errorCode}`);

        });
}

export const signInWithPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user
            console.log(user)
            if (user.emailVerified) {
                alert(`bienvenido ${user.displayName}`);
                window.location = '#/posting'

            } else {
                alert('debes verificar tu cuenta antes de continuar');
                firebase.auth().signOut();
            }
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message
            alert(`no se ha podido iniciar sesion error:${errorCode} ${errorMessage}`);

        })
}

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result=>{
        window.location = '#/posting'
    }).catch(err=>{
        console.log(err)
    })
}