export const timeLine = () => {
  const posting = document.createElement('div');
  
  const viewPosting =  `
  <div class="time-line">
    <div class="banner-left">
      <a class="icon-home" href="">Inicio</a>
      <a class="icon-newspaper" href="">Muro</a>
      <a class="icon-user" href="">Perfil</a>
      <a class="icon-exit" href="">Cerra sesión</a>
  
  </div>
    <div class="shared-today">
      <input id="post" type="text" placeholder="Que te gustaria compartir hoy?">
     
      <button id="shared" class="shared" onclick="window.location='#/savePost'">Publicar</button>
    
        <div id="container-posts">
            
       </div>
    </div>
    
    <div class="banner-right">
      <h2>Intereses</h2>
      <a href="">Tips de viaje</a>
      <a href="">Destinos turisticos</a>
      <a href="">Trekking</a>
      <a href="">Senderismo</a>
    
    </div>
  </div>
  `;
  
  posting.innerHTML = viewPosting;
  return posting;
}