// get the element with the id project-frame
const frame = document.getElementById('frame');
// Select all the elements with the class "tile" and add an event listener to each one
const tiles = document.querySelectorAll('.tile');

// loop through each tile and add an event listener to each one
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    frame.style.display = 'flex';
    // add the slide-in-fwd-center class to the frame
    frame.classList.add('slide-in-fwd-center');
    setTimeout(() => {
      frame.classList.remove('slide-in-fwd-center');
    }, 400);
  });
});

// If the user clicks outside the frame, close the frame
window.addEventListener('click', (event) => {
  if (event.target === frame) {
    frame.classList.add('slide-out-bck-center');
    setTimeout(() => {
      frame.style.display = 'none';
      frame.classList.remove('slide-out-bck-center');
    }, 400);
  }
});
