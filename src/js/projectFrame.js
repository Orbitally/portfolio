// get the element with the id project-frame
const frame = document.getElementById('frame');
// Select all the elements with the class "tile" and add an event listener to each one
const tiles = document.querySelectorAll('.tile');

const closeBtn = document.getElementById('closeFrame');

function closeFrame() {
  // unlock background scrolling
  document.documentElement.style.overflow = 'auto';
  frame.classList.add('slide-out-bck-center');
  setTimeout(() => {
    frame.style.display = 'none';
    frame.classList.remove('slide-out-bck-center');
  }, 400);
}

function closeFrameByBtn() {
  // unlock background scrolling
  document.documentElement.style.overflow = 'auto';
  window.parent.document
    .getElementById('frame')
    .classList.add('slide-out-bck-center');
  setTimeout(() => {
    window.parent.document.getElementById('frame').style.display = 'none';
    window.parent.document
      .getElementById('frame')
      .classList.remove('slide-out-bck-center');
  }, 400);
}

function openFrame() {
  // lock background scrolling
  document.documentElement.style.overflow = 'hidden';
  frame.style.display = 'flex';
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

closeBtn.addEventListener('click', closeFrameByBtn);
