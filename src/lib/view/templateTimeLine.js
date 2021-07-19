export const timeLine = () => {
    const posting = document.createElement('div');

    const viewPosting =  `
    <div class="time-line">
      <div class="banner-left">
        <a href="" class="icon-home">Inicio</a>
        <a href="" class="icon-mobile">FAQ</a> 
        <a href="" class="icon-lock">Politicas de privacidad</a>
        <a href=""class="icon-pencil">Normativas</a>
      </div>
      <div class="banner-right">
        <h3> Intereses </h3>
        <a href="">Tips de viaje</a>
        <a href="">Destinos turisticos</a> 
        <a href="">Trekking</a>
        <a href="">Senderismo</a>
      </div>
    </div>`;

   posting.innerHTML = viewPosting;
    return posting;
}