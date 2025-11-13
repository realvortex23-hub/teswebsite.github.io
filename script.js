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
