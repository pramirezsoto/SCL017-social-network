export const timeLine = () => {
    const posting = document.createElement('div');

    const viewPosting =  `
    <div class="time-line">
      <div class="banner-left">
        <a href="" class="icon-users">Amigos</a>
        <a href="" class="icon-mobile">FAQ</a> 
        <a href="" class="icon-lock">Politicas de privacidad</a>
        <a href=""class="icon-pencil">Normativas</a>
      </div>
      <div class="banner-right">
        <a href="" class="icon-users">Amigos</a>
        <a href="" class="icon-mobile">FAQ</a> 
        <a href="" class="icon-lock">Politicas de privacidad</a>
        <a href=""class="icon-pencil">Normativas</a>
      </div>
    </div>
    <ul>
      <a href="#/posting"><input type="button"></a>
      <p>Hola mundo soy la pagina</p>
    </ul>`;

   posting.innerHTML = viewPosting;
    return posting;
}