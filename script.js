// Real-time Date + Time
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("datetime").textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Particles.js setup
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#00e5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 120, color: "#00e5ff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  }
});

// Modal setup
const modal = document.getElementById("notice-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".notice-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalBody.textContent = card.querySelector("p").textContent + " (Full notice details could go here...)";
  });
});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const category = btn.dataset.category;
    document.querySelectorAll(".notice-card").forEach(card => {
      card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
    });
  });
});
