document.addEventListener('DOMContentLoaded', () => {
  // Desplegable tipo acordeón
  document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });

  // Modal para agrandar imagen
  window.openModal = function(src) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.style.display = "flex";
  }

  window.closeModal = function(event) {
    if (
      event.target.id === 'modalImage' || 
      event.target.classList.contains('close-btn')
    ) return;
    document.getElementById('imgModal').style.display = "none";
  }
});
