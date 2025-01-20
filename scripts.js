document.addEventListener("DOMContentLoaded", () => {
  // Login form validation
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      validateForm(loginForm);
    });
  }

  // Registration form validation
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      validateForm(registerForm);
    });
  }

  // Validation logic
  function validateForm(form) {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (form.checkValidity()) {
      alert("Form submitted successfully!");
      form.reset();
    }
  }
});
