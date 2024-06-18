// get the y position of the tile and if it is in the middle of the screen remove the css filter property

// Check if it's a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  window.addEventListener('scroll', () => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
      const rect = tile.getBoundingClientRect();
      const y = rect.top;
      if (y < window.innerHeight / 2 && y > -window.innerHeight / 2) {
        tile.style.filter = 'none';
      } else {
        tile.style.filter = 'grayscale(100%)';
      }
    });
  });
}
