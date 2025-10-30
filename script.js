// Dynamic Date and Time
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    now.toLocaleDateString('en-GB', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }) + " | " + now.toLocaleTimeString('en-GB');
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Notice Data (fake for demo)
const notices = [
  {
    title: "AI in Data Science Workshop",
    message: "Join us for a hands-on session on Machine Learning on 3rd Nov 2025 at Lab 204.",
    dept: "Data Science",
    category: "events"
  },
  {
    title: "Mid-Sem Exam Schedule",
    message: "Mid-Sem exams begin on 5th Nov 2025. Check timetable on notice board.",
    dept: "Data Science",
    category: "exam"
  },
  {
    title: "Placement Orientation",
    message: "Mandatory session for final-year students on 7th Nov 2025 at Seminar Hall B.",
    dept: "Data Science",
    category: "general"
  },
  {
    title: "Hackathon 2025",
    message: "24-hour Data Science hackathon starting 10th Nov 2025. Register now!",
    dept: "Data Science",
    category: "events"
  }
];

// Render Notices
function renderNotices(filter = "all") {
  const container = document.getElementById("noticeList");
  container.innerHTML = "";
  notices
    .filter(n => filter === "all" || n.category === filter)
    .forEach(n => {
      const card = document.createElement("div");
      card.classList.add("notice-card");
      card.innerHTML = `
        <h4>${n.title}</h4>
        <small>${n.dept}</small>
      `;
      card.onclick = () => openModal(n);
      container.appendChild(card);
    });
}

// Filter tabs
function filterNotices(category) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab[onclick="filterNotices('${category}')"]`).classList.add("active");
  renderNotices(category);
}

// Modal
function openModal(notice) {
  document.getElementById("modalTitle").textContent = notice.title;
  document.getElementById("modalMsg").textContent = notice.message;
  document.getElementById("modalDept").textContent = "Department: " + notice.dept;
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Init
renderNotices();

// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#66fcf1" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: { enable: true, color: "#45a29e", opacity: 0.5 },
    move: { enable: true, speed: 2 }
  }
});
