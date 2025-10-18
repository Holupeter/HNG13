// Function to update the current time
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const currentTime = Date.now();
  timeElement.textContent = `Current time (in ms): ${currentTime}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Call once to initialize
updateTime();
