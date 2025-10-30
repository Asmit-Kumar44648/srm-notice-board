// ✅ Display Current Date & Day
const dateDisplay = document.getElementById("date-display");
const now = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
dateDisplay.textContent = now.toLocaleDateString("en-US", options);

// ✅ Search Functionality
const searchInput = document.getElementById("search-input");
const notices = document.querySelectorAll(".notice-card");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  notices.forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(searchTerm) ? "block" : "none";
  });
});

// ✅ Category Filter
const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    notices.forEach((card) => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ✅ Subscribe Simulation
const subscribeBtn = document.getElementById("subscribe-btn");
const emailInput = document.getElementById("email-input");
const message = document.getElementById("subscribe-message");

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email === "") {
    message.style.color = "red";
    message.textContent = "⚠️ Please enter your email address.";
  } else if (!email.includes("@") || !email.endsWith(".com")) {
    message.style.color = "orange";
    message.textContent = "⚠️ Enter a valid email (e.g., name@srmist.edu.in)";
  } else {
    message.style.color = "#00e5ff";
    message.textContent = "✅ You’ve successfully subscribed for updates!";
    emailInput.value = "";
  }
});

// ✅ Particle Background
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00e5ff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: { enable: true, color: "#00e5ff", opacity: 0.2 },
    move: { enable: true, speed: 2 }
  }
});
