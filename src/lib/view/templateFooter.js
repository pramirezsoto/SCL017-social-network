export const footer = () => {
  const footerSection = document.createElement('footer');
  footerSection.id = 'footer';
  footerSection.className = 'footer';
  const content = '<p>Desarrollado por Nicole Quijada, Paula Ramirez & Nataly Farias</p>';
  footerSection.innerHTML = content;
  return footerSection;
};
