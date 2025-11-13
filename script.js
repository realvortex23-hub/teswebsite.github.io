// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

// Simulate form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const statusEl = document.getElementById("formStatus");

  if (name && email && message) {
    statusEl.textContent = "✅ Message sent successfully (RP simulation).";
    // Optional: Clear form
    e.target.reset();
  } else {
    statusEl.textContent = "⚠️ Please fill out all fields.";
  }
});

// Scroll animation for sections
const sections = document.querySelectorAll(".info-section, .site-footer");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
});

// Change header color on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});
