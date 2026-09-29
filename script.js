
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));


const callBar = document.querySelector('.callbar');
if (callBar) {
  const toggleCallBar = () => {
    if (window.scrollY > 180) callBar.classList.add('visible');
    else callBar.classList.remove('visible');
  };
  toggleCallBar();
  window.addEventListener('scroll', toggleCallBar, { passive: true });
}
