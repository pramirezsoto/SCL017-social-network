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
    <button class="btn"  type="button" id="botonRegistrarse" onclick="window.location='#/posting'">Registrarse</button>
  </div> 
  <button id="iniciarConGoogle"><img src="img/google.png" alt="logo google"><h5>iniciar sesión con google</h5></button>
  
    


</div>
</form>


 `;
 
  saludo.innerHTML = viewSaludo;
  return saludo;
}