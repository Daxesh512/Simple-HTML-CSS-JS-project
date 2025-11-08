const d =  document.querySelector('div');

setTimeout(() => {
 d.classList.add('loaded');
}, 500);
// KrishnaCodeCorner

document.body.addEventListener('click', () => {
  d.classList.toggle('loaded');
});