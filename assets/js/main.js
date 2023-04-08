const navLinks = document.querySelectorAll('nav ul li a');

// Agrega un listener de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href'); // Obtiene el valor del atributo href
    if (href.includes("#")){
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const target = document.querySelector(href); // Obtiene el elemento de destino

    if (target) {
      // Calcula la posición actual del scroll y la posición del destino
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = target.getBoundingClientRect().top + scrollTop;

      // Realiza el desplazamiento
      window.scrollTo({
        top: targetTop - 60, // Ajusta este valor según lo necesites
        behavior: 'smooth' // Hace que el desplazamiento sea suave
      });
    }
  }});
});