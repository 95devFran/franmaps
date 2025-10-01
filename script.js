// --- Función Accordion: funciona para todos los apartados ---
document.querySelectorAll('.accordion').forEach(accordion => {
  const toggle = accordion.querySelector('.accordion-toggle');
  const content = accordion.querySelector('.accordion-content');

  toggle.addEventListener('click', () => {
    // Cierra si está abierto
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Abre la sección
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// --- Modal para mapas estáticos ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

// Solo agregar evento de clic a imágenes que **no** están dentro de un <a>
document.querySelectorAll(".map-gallery .map-card img").forEach(img => {
  if (!img.closest('a')) {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  }
});

// Función para cerrar modal
function closeModal() {
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeModal();
});
