// get the element with the id project-frame
const frame = document.getElementById('frame');

// get the element with the id frameBackground
const frameBackground = document.getElementById('frameBackground');

// Select all the elements with the class "tile" and add an event listener to each one
const tiles = document.querySelectorAll('.tile');

const closeBtn = document.getElementById('closeFrame');

// Close frame method just taking into account that it needs to address the parent window to style the frame to make it hide
function closeFrame() {
  window.parent.document.documentElement.style.overflow = 'auto';
  // unlock background scrolling
  window.parent.frame.classList.add('slide-out-bck-center');
  window.parent.frameBackground.classList.add('slide-out-bck-center');
  setTimeout(() => {
    window.parent.frame.style.display = 'none';
    window.parent.frameBackground.style.display = 'none';
    window.parent.document
      .getElementById('frame')
      .classList.remove('slide-out-bck-center');
    window.parent.document
      .getElementById('frameBackground')
      .classList.remove('slide-out-bck-center');
  }, 400);
}

function openFrame() {
  // lock background scrolling
  document.documentElement.style.overflow = 'hidden';
  frame.style.display = 'flex';
  frameBackground.style.display = 'block';
  // add the slide-in-fwd-center class to the frame
  frame.classList.add('slide-in-fwd-center');
  setTimeout(() => {
    frame.classList.remove('slide-in-fwd-center');
  }, 400);
}

// loop through each tile and add an event listener to each one
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    openFrame();
  });
});

// If the user presses the escape key, close the frame
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeFrame();
  }
});

// If the user clicks outside the frame, close the frame
window.addEventListener('click', (event) => {
  if (event.target === frame) {
    closeFrame();
  }
});

// If the user clicks the close button and the element exists (isn't null thus the '?'), close the frame
closeBtn?.addEventListener('click', closeFrame);
