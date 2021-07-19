export const login = () => {
  const first = document.createElement('div');

  const viewFirst = `    <div class="contenedor-izquierdo">
  <img src="img/mochileando.png" alt="imagen de mochileando">
  <p class="texto-izquierdo">
    Ha sido creada para los amantes de mochilear, trekking y destinos turisticos.
    <br />
    <br />
    En nuestra red social encontraras muchos usuarios con los mismos intereses
  </p>
</div>
<div class="contenedor-derecho">
  <p>Iniciar Sesion</p>
  <input type="email" id="email" placeholder="correo@example.com">
  <br />
  <input type="password" id="password" placeholder="contraseña">
  <button class="iniciarSesion" id="iniciar">iniciar sesion</button>
  <h3>Si aun no tienes cuenta <br />registrate <a style=color:red href="#/register">aqui</a></h3>
  <button class="iniciarConGoogle" id="iniciarConGoogle">iniciar sesion con google</button>
</div>
  `

  first.innerHTML = viewFirst;
  return first;
}