document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  const modalImage = modal.querySelector(".modal-image");

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  const openImageModal = (src, alt) => {
    if (!src || !modalImage) return;

    modalImage.src = src;
    modalImage.alt = alt || "Enlarged image preview";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  document.addEventListener("click", (ev) => {
    const closeButton = ev.target.closest("[data-modal-close]");
    if (closeButton) {
      closeModal();
      return;
    }

    if (ev.target.closest(".modal-panel") || ev.target.closest("a[href]")) {
      return;
    }

    const directImg = ev.target.closest("img:not(.modal-image)");
    if (directImg) {
      openImageModal(directImg.getAttribute("src"), directImg.getAttribute("alt"));
      return;
    }

    const container = ev.target.closest(
      ".cert-card, .detailed-project-media, .card-image-wrap, .hero-avatar-container, .timeline-logo-wrap, [data-modal-type]"
    );
    const childImg = container?.querySelector("img");
    if (childImg) {
      openImageModal(childImg.getAttribute("src"), childImg.getAttribute("alt"));
    }
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
      return;
    }

    if (!["Enter", " "].includes(ev.key)) return;

    const container = ev.target.closest?.(".cert-card, [data-modal-type]");
    const childImg = container?.querySelector("img");
    if (!childImg) return;

    ev.preventDefault();
    openImageModal(childImg.getAttribute("src"), childImg.getAttribute("alt"));
  });
});
