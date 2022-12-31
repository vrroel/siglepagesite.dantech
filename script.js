function initActiveMenu(){
  const header = document.querySelector('#header');
  const hero = document.querySelector('#hero');
  const heroAltura = hero.clientHeight * 0.72;
  
  if (header){
        function activeMenu(){
      if (window.scrollY >= heroAltura) {
        header.classList.add('active');
      } else {
        header.classList.remove('active')
      }
    }
    
    window.addEventListener('scroll', activeMenu);
  }
}
initActiveMenu();