// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Script untuk mengatur tahun secara otomatis
document.getElementById("year").textContent = new Date().getFullYear();

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageSrc;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  function setActiveLink(event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", setActiveLink);
  });
});
