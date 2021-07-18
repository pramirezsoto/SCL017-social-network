// aqui exportaras las funciones que necesites
import { login } from './view/templateLogin.js'
import { registro } from './view/templateRegister.js'
import { timeLine } from './view/templateTimeLine.js'

export const myFunction = () => {
  document.getElementById('root').appendChild(login());
  document.getElementById('root').appendChild(registro());
  document.getElementById('root').appendChild(timeLine());

};


