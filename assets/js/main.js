const navLinks = document.querySelectorAll('ul li a');

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

let imagenes=[];
fetch('/assets/trabajos/proyectos.json')
  .then(response => response.json())
  .then(trabajos => {
    const trabajosHTML = trabajos.map(trabajo =>
     `
    <article class="trabajos-tarjeta">
      <main class="trabajos-tarjeta-contenedor">
        ${imagen(trabajo.imagen)}
        <h2>${trabajo.nombre}</h2>
        <p>${trabajo.descripcion}</p>
        <a href="${trabajo.link}" target="_blank"><button>Visitar</button></a>                    
      </main>
    </article>
    `).join('');
    
    document.querySelector('.contenedor-trabajos').innerHTML = trabajosHTML;
    // console.log(document.querySelectorAll(".trabajos-tarjeta").length);
    // console.log(imagenes);
    for (var i = 0; i < document.querySelectorAll(".trabajos-tarjeta").length ; i++) {
       document.querySelector(".trabajos-tarjeta:nth-child("+(i+1)+")").style.backgroundImage = "url('"+ imagenes[i] +"')";
    }
  });
  function imagen(a){
    imagenes.push(a)
    return ""
  }