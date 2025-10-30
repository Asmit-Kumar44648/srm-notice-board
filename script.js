// Display current date and time dynamically
function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const timeStr = now.toLocaleTimeString('en-GB');
  document.getElementById('datetime').textContent = `${dateStr} | ${timeStr}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Initialize particle animation
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@master/demo/particles.json', function() {
  console.log('Particles.js config loaded');
});
