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

const text = `Informatics Engineering graduate passionate about UI/UX with a strong foundation in both design and development. Experienced in designing responsive and user-friendly web interfaces through academic research, organizational activities, and real-world projects.

Proficient in Figma, Illustrator, Photoshop, Canva, and front-end tools such as HTML, CSS, Tailwind CSS, and React. Skilled in user research, design systems, and cross-functional collaboration.

Motivated to create meaningful digital experiences that bridge human needs and technology. Currently seeking opportunities to contribute impactful UI/UX solutions and continue growing within a creative and collaborative environment.`;

const typingElement = document.getElementById("typing-text");
let index = 0;

function typeCharacter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeCharacter, 20); // Ubah angka ini untuk mengatur kecepatan
  }
}

// Mulai efek ketika elemen terlihat di layar
window.addEventListener("scroll", () => {
  const rect = typingElement.getBoundingClientRect();
  if (rect.top < window.innerHeight && index === 0) {
    typeCharacter();
  }
});
