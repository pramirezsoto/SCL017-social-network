export const register = () => {
    const saludo = document.createElement('div');

    const viewSaludo =  `

  <form class="form">
    
    <h1>Ingresa Tus Datos</h1>
  <div class="contenedor-derecho"> 

    <div class="input-container">
      
      <input type="text" id="name"  placeholder="Nombre Completo">
    </div>

    <div class="input-container">
      
      <input type="text"  id="gmail"  placeholder="correo@example.com">
    </div>

    <div class="input-container">

      <input type="password"  id="contraseña"  placeholder="Contraseña">
    </div> 
    
    <input type="button"  class="btn" value="Registrarse" href="#/posting">
  
  <button class="registerWithGoogle" id="registerWithGoogle"><img src="img/google.png" alt="logo google"><p>iniciar sesion con google</p></button>

    


</div>
</form>


    


     

    `;
    


   saludo.innerHTML = viewSaludo;
    return saludo;
}