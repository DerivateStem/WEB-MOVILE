document.addEventListener("DOMContentLoaded", () => {
  // 1. Slider (si existe)
  const slider = document.querySelector(".slider-box ul");
  const prevButton = document.querySelector(".slider-button.prev");
  const nextButton = document.querySelector(".slider-button.next");
  let currentSlide = 0;

  if (slider && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 50}%)`;
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentSlide < 1) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 50}%)`;
      }
    });
  }

  // 2. Menú móvil hamburguesa
  const icono = document.getElementById("open");
  const enlaces = document.getElementById("enlaces");

  if (icono && enlaces) {
    icono.addEventListener("click", () => {
      enlaces.classList.toggle("activo");
    });
  }

  // 3. Cambio de contenido con botón "Aplicar filtros"
  const btnAplicar = document.getElementById("btn-aplicar");
  const descripcion = document.getElementById("descripcion");
  const nuevoContenido = document.getElementById("nuevo-contenido");

  if (btnAplicar && descripcion && nuevoContenido) {
    btnAplicar.addEventListener("click", () => {
      descripcion.style.display = "none";
      nuevoContenido.style.display = "flex";
      nuevoContenido.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 4. Cambiar contenido si se modifican filtros
  const filtros = [
    document.getElementById("busqueda"),
    document.getElementById("area de estudio"),
    document.getElementById("integrantes"),
    document.getElementById("universidad"),
  ];

  filtros.forEach((filtro) => {
    if (filtro) {
      filtro.addEventListener("change", mostrarNuevoContenido);
    }
  });

  const busquedaInput = document.getElementById("busqueda");
  if (busquedaInput) {
    busquedaInput.addEventListener("input", mostrarNuevoContenido);
  }

  function mostrarNuevoContenido() {
    if (descripcion && nuevoContenido) {
      descripcion.style.display = "none";
      nuevoContenido.style.display = "flex";
    }
  }
});