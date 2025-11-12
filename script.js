// Change button color randomly when clicked
const btn = document.getElementById("colorBtn");
const colors = ["#ffcc00", "#00bcd4", "#4caf50", "#f44336", "#9c27b0"];

btn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
