// contact.js — Handle form submission via PHP or API
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    message.textContent = "Sending...";

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      if (result.includes("success")) {
        message.textContent = "Message sent successfully ✅";
        form.reset();
      } else {
        message.textContent = "Something went wrong ❌";
      }
    } catch (error) {
      message.textContent = "Server error. Please try again later.";
    }
  });
});
