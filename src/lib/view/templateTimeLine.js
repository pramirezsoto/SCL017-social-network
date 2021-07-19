export const timeLine = () => {
    const posting = document.createElement('div');

    const viewPosting =  `
    <ul>
      <a href="#/posting"><input type="button"></a>
      <p>Hola mundo soy la pagina</p>
    </ul>`;

   posting.innerHTML = viewPosting;
    return posting;
}