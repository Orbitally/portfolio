// Image and shadow wiggle on mouseover
export default function initializeMouseEffects() {
  const tiles = document.querySelectorAll('.tile');

  tiles.forEach((tile) => {
    const image = tile.querySelector('.tile-image');
    let isHovering = false;

    tile.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    tile.addEventListener('mouseleave', () => {
      isHovering = false;
      // Reset shadow and image position
      tile.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      if (image) {
        image.style.transform = 'translate(0, 0)';
      }
    });

    tile.addEventListener('mousemove', (e) => {
      if (!isHovering) return;

      const rect = tile.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to tile center
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Shadow effect
      const shadowX = mouseX * 0.03;
      const shadowY = mouseY * 0.03;

      // Calculate distance for intensity
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      const maxDistance =
        Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
      const intensity = Math.min(distance / maxDistance, 1);

      // Dynamic shadow
      const blur = 8 + intensity * 12;
      const opacity = 0.2 + intensity * 0.3;
      tile.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px 0px rgba(0, 0, 0, ${opacity})`;

      // Parallax effect on image
      if (image) {
        const parallaxX = mouseX * 0.01; // Subtle movement
        const parallaxY = mouseY * 0.01;
        image.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
        image.style.transition = 'none'; // Remove transition for smooth movement
      }
    });
  });
}
