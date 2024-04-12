const colOne = document.querySelector('.col-1');

let toMove = colOne.firstElementChild;

let observer = new IntersectionObserver(function (tiles) {
  if (!tiles[0].isIntersecting) {
    console.log('not intersecting');
  }
});

observer.observe(toMove);
