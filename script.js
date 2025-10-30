/* ------------------------ Date & Time ------------------------ */
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
  const dt = document.getElementById("datetime");
  if (dt) dt.textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

/* ------------------------ Particles ------------------------ */
/* particlesJS is loaded via CDN in index.html. This attaches a canvas inside #particles-js */
particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    color: { value: "#00e5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00e5ff",
      opacity: 0.35,
      width: 1,
    },
    move: { enable: true, speed: 3.5 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});

/* ------------------------ Modal (click to open notice) ------------------------ */
const modal = document.getElementById("notice-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalExtra = document.getElementById("modal-extra");
const closeBtn = document.querySelector(".close");

function openModalFromCard(card) {
  if (!modal) return;
  const title = card.querySelector("h3")?.textContent || "Notice";
  const body = card.querySelector("p")?.innerHTML || "";
  modalTitle.textContent = title;
  modalBody.innerHTML = body;

  // If card has a download link, show it inside modal-extra
  const download = card.querySelector(".download-link");
  if (download) {
    modalExtra.innerHTML = `<p><a href="${download.href}" class="download-link" download>${download.textContent}</a></p>`;
  } else {
    modalExtra.innerHTML = "";
  }

  // ✅ Add extra notice info (category, year, dept, section)
  const extraInfo = `
    <p><strong>Category:</strong> ${card.dataset.category}</p>
    <p><strong>Year:</strong> ${card.dataset.year}</p>
    <p><strong>Department:</strong> ${card.dataset.dept}</p>
    <p><strong>Section:</strong> ${card.dataset.section}</p>
  `;
  modalExtra.insertAdjacentHTML("beforeend", extraInfo);

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".notice-card").forEach((card) => {
  card.addEventListener("click", () => openModalFromCard(card));
});

if (closeBtn)
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  });

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});

// ✅ ESC key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});

/* ------------------------ Filtering & Search ------------------------ */
const filterBtns = document.querySelectorAll(".filter-btn");
const yearSelect = document.getElementById("year-select");
const deptSelect = document.getElementById("dept-select");
const sectionSelect = document.getElementById("section-select");
const searchInput = document.getElementById("search-input");

function filterNotices() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const category = activeBtn ? activeBtn.dataset.category : "all";
  const year = yearSelect ? yearSelect.value : "all";
  const dept = deptSelect ? deptSelect.value : "all";
  const section = sectionSelect ? sectionSelect.value : "all";
  const term = searchInput ? searchInput.value.trim().toLowerCase() : "";

  document.querySelectorAll(".notice-card").forEach((card) => {
    const catMatch = category === "all" || card.dataset.category === category;
    const yearMatch = year === "all" || card.dataset.year === year;
    const deptMatch = dept === "all" || card.dataset.dept === dept;
    const sectionMatch = section === "all" || card.dataset.section === section;
    const text = (card.textContent || "").toLowerCase();
    const searchMatch = term === "" || text.includes(term);

    card.style.display =
      catMatch && yearMatch && deptMatch && sectionMatch && searchMatch
        ? "block"
        : "none";
  });
}

/* wire filter buttons */
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterNotices();
  });
});

/* wire selects & search */
[yearSelect, deptSelect, sectionSelect].forEach((sel) => {
  if (sel) sel.addEventListener("change", filterNotices);
});
if (searchInput) searchInput.addEventListener("input", fi
