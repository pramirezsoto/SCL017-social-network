export const login = () => {
  const first = document.createElement('div');

  const viewFirst = `
    <p>Hola mundo soy el login</p>
    <ul>
      <a href="#/register"><input type="button" value="Registro"></a>
    </ul>`;

  first.innerHTML = viewFirst;
  return first;
}