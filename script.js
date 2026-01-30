// Dark / Light Mode
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("light");
};

// Scroll Animation
const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
