// Particles.js config
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('particles loaded');
});

// Date & Time
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}
updateDateTime();

// Modal logic
const modal = document.getElementById("noticeModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".read-more").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "flex";
    const card = link.parentElement;
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalBody.textContent = link.dataset.full;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Filter logic
const filterButtons = document.querySelectorAll(".filter-btn");
const notices = document.querySelectorAll(".notice-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    notices.forEach(n => {
      n.style.display = (category === "all" || n.dataset.category === category) ? "block" : "none";
    });
  });
});

// Search logic
document.getElementById("searchInput").addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  notices.forEach(n => {
    const text = n.textContent.toLowerCase();
    n.style.display = text.includes(term) ? "block" : "none";
  });
});
