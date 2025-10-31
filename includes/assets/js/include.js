// include.js - Load header & footer dynamically across all pages
document.addEventListener("DOMContentLoaded", function () {
  // Function to load HTML includes
  function loadHTML(id, file) {
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then((data) => {
        document.getElementById(id).innerHTML = data;

        // Activate scripts only after loading header/footer
        if (id === "header") initMenuToggle();
        if (id === "footer") updateYear();
      })
      .catch((err) => console.error(err));
  }

  // Inject header and footer
  loadHTML("header", "includes/header.html");
  loadHTML("footer", "includes/footer.html");

  // Function to toggle hamburger menu
  function initMenuToggle() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
    }
  }

  // Footer copyright year
  function updateYear() {
    const year = new Date().getFullYear();
    const el = document.getElementById("year");
    if (el) el.textContent = year;
  }
});
