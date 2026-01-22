document.addEventListener("DOMContentLoaded", () => {
  // --- Accordion ---
  document.querySelectorAll('.accordion').forEach(accordion => {
    const toggle = accordion.querySelector('.accordion-toggle');
    const content = accordion.querySelector('.accordion-content');
    toggle.addEventListener('click', () => {
      if (content.style.maxHeight) content.style.maxHeight = null;
      else content.style.maxHeight = content.scrollHeight + "px";
    });
  });

  // --- Modal mapas estáticos ---
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  document.querySelectorAll(".map-gallery .map-card img").forEach(img => {
    // Ignorar imágenes dentro de <a> (visores interactivos)
    if (!img.closest('a')) {
      if (img.alt === "Ciudad Neón") {
        img.addEventListener("click", openCityNeonGallery);
      } else {
        img.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImg.src = img.src;
          modalImg.alt = img.alt;
        });
      }
    }
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });
});

// --- Funciones modal normal ---
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// --- Galería Ciudad Neón ---
const cityNeonImages = [
  { src: "images/Madrid.jpg", caption: "Ciudad Neón - Madrid" },
  { src: "images/London.jpg", caption: "Ciudad Neón - Londres" },
  { src: "images/Toulouse.jpg", caption: "Ciudad Neón - Toulouse" },
  { src: "images/Frankfurt.jpg", caption: "Ciudad Neón - Frankfurt" },
  { src: "images/brno.jpg", caption: "Ciudad Neón - Brno"},
  { src: "images/zurich.jpg", caption: "Ciudad Neón - Zürich" },
  { src: "images/amsterdam.jpg", caption: "Ciudad Neón - Amsterdam" }
];

let currentImageIndex = 0;

function openCityNeonGallery() {
  currentImageIndex = 0;
  openGalleryModal();
}

function openGalleryModal() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "flex";
  showGalleryImage(currentImageIndex);
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = cityNeonImages.length - 1;
  if (currentImageIndex >= cityNeonImages.length) currentImageIndex = 0;
  showGalleryImage(currentImageIndex);
}

function showGalleryImage(index) {
  const img = document.getElementById("galleryImage");
  const caption = document.getElementById("galleryCaption");
  img.src = cityNeonImages[index].src;
  caption.textContent = cityNeonImages[index].caption;
}





