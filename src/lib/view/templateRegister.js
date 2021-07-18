export const register = () => {
    const saludo = document.createElement('div');

    const viewSaludo =  `
    <ul>
      <a href="#/posting"><input type="button"></a>
      <p>Hola mundo soy el registro</p>
    </ul>`;

   saludo.innerHTML = viewSaludo;
    return saludo;
}