/// Function to update the current time
function updateTime() {
  // Select the time element only if it exists on the page
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  
  // Only update if the element is found
  if (timeElement) {
    const currentTime = Date.now();
    timeElement.textContent = `Current time (in ms): ${currentTime}`;
  }
}

// Update time every second if the element exists
setInterval(updateTime, 1000);

// Call once to initialize (only if the element exists)
updateTime();


// Form Validation for Contact Us Page
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let formIsValid = true;

  // Clear previous error messages
  clearErrors();

  // Full Name Validation
  const fullName = document.getElementById("contact-name").value;
  if (!fullName) {
    showError("error-name", "Full Name is required.");
    formIsValid = false;
  }

  // Email Validation
  const email = document.getElementById("contact-email").value;
  if (!email || !validateEmail(email)) {
    showError("error-email", "Please enter a valid email address.");
    formIsValid = false;
  }

  // Subject Validation
  const subject = document.getElementById("contact-subject").value;
  if (!subject) {
    showError("error-subject", "Subject is required.");
    formIsValid = false;
  }

  // Message Validation
  const message = document.getElementById("contact-message").value;
  if (message.length < 10) {
    showError("error-message", "Message must be at least 10 characters.");
    formIsValid = false;
  }

  // Show Success Message if form is valid
  if (formIsValid) {
    document.getElementById("success-message").style.display = "block";
    document.getElementById("contact-form").reset(); // Reset form
    // Optionally, disable the submit button after success
    document.querySelector("button[type='submit']").disabled = true;
  }
});

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to display error messages
function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
}

// Function to clear previous error messages
function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.textContent = "");
}
