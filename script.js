// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

// Simulate form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("formStatus").textContent =
      "✅ Message sent successfully (RP simulation).";
    e.target.reset();
  } else {
    document.getElementById("formStatus").textContent =
      "⚠️ Please fill out all fields.";
  }
});
