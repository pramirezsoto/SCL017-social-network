import { login } from './view/templateLogin.js'
import { register } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'

export const changeRoute = (hash) =>{
    if (hash === '#/login'){
        return showTemplate(hash)
    } else if(hash === '#/register'){
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
}

const showTemplate = (hash) =>{ 
    const containerRoot = document.getElementById('root')
    switch(hash){
        //asignamos un caso distinto para cada template
        case '#/login' : 
            containerRoot.innerHTML = login().innerHTML;
        break; 
        case '#/register' : 
            containerRoot.innerHTML = register().innerHTML;
        break; 
        case '#/posting' : 
            containerRoot.innerHTML = timeLine().innerHTML;
        break;
    }
}