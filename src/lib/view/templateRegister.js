export const register = () => {
    const saludo = document.createElement('div');

    const viewSaludo =  `

  <form class="form">
    
    <h1>Ingresa Tus Datos</h1>
  <div class="contenedor-derecho"> 

    <div class="input-container">
      <i></i>
      <input type="text" id="name"  placeholder="Nombre Completo">
    </div>

    <div class="input-container">
      <i></i>
      <input type="text"  id="gmail"  placeholder="correo@example.com">
    </div>

    <div class="input-container">
      <i></i>
      <input type="password"  id="contraseña"  placeholder="Contraseña">
    </div> 
    <div>
    <input type="button"  class="btn" value="Registrarse" href="#/posting">
  </div>
  <button class="iniciarConGoogle" id="iniciarConGoogle">iniciar sesion con google</button>

    


</div>
</form>


    


     

    `;
    


   saludo.innerHTML = viewSaludo;
    return saludo;
}