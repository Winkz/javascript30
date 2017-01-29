const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

links.forEach(link => link.addEventListener('mouseenter', highlightLink));

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highlight.style.height = `${coords.height}px` ;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}