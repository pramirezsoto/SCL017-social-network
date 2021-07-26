import { login } from './view/templateLogin.js'
import { register } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'

export const changeRoute = (hash) => {
    return showTemplate(hash);
    
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root')
    const footer = document.getElementById('footer');
    switch (hash) {
        //asignamos un caso distinto para cada template
        case "" : 
        case '#/login':
            containerRoot.classList.add('login');
            containerRoot.innerHTML = login().innerHTML;
            break;
        case '#/register':
            
            containerRoot.innerHTML = register().innerHTML;
            break;
        case '#/posting':
            containerRoot.classList.remove('login');
            footer.classList.add('hide');
            containerRoot.classList.add('posting');
            containerRoot.innerHTML = timeLine().innerHTML;
            break;
        
}
}