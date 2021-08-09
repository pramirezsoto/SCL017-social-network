export const footer = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.className = 'footer';
  const content = `<p>Desarrollado por Nicole Quijada, Paula Ramirez & Nataly Farias</p>`
  footer.innerHTML = content;
  
  return footer;
}