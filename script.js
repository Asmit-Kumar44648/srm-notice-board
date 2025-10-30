// Date & Time
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

// Particle Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00e5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00e5ff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2 },
  },
});

// Modal Logic
const modal = document.getElementById("notice-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalExtra = document.getElementById("modal-extra");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".notice-card").forEach((card) => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalBody.innerHTML = card.querySelector("p").innerHTML;
    const link = card.querySelector(".download-link");
    modalExtra.innerHTML = link
      ? `<a href="${link.href}" class="download-link">📎 ${link.textContent}</a>`
      : "";
  });
});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Filtering & Search
const filterBtns = document.querySelectorAll(".filter-btn");
const yearSelect = document.getElementById("year-select");
const deptSelect = document.getElementById("dept-select");
const searchInput = document.getElementById("search-input");

function filterNotices() {
  const category = document.querySelector(".filter-btn.active").dataset.category;
  const year = yearSelect.value;
  const dept = deptSelect.value;
  const query = searchInput.value.toLowerCase();

  document.querySelectorAll(".notice-card").forEach((card) => {
    const matchesCategory = category === "all" || card.dataset.category === category;
    const matchesYear = year === "all" || card.dataset.year === year;
    const matchesDept = dept === "all" || card.dataset.dept === dept;
    const matchesSearch =
      card.textContent.toLowerCase().includes(query) ||
      card.querySelector("h3").textContent.toLowerCase().includes(query);

    card.style.display =
      matchesCategory && matchesYear && matchesDept && matchesSearch ? "block" : "none";
  });
}

filterBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    filterNotices();
  })
);

[yearSelect, deptSelect, searchInput].forEach((el) =>
  el.addEventListener("input", filterNotices)
);
