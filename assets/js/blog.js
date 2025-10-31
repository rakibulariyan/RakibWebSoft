// blog.js — Dynamically load blog posts
document.addEventListener("DOMContentLoaded", function () {
  fetch("data/blog.json")
    .then((res) => res.json())
    .then((posts) => {
      const container = document.getElementById("blog-container");
      container.innerHTML = posts.map(postTemplate).join("");
    })
    .catch((err) => console.error("Error loading blog data:", err));
});

function postTemplate(post) {
  return `
    <article class="blog-card">
      <img src="${post.image}" alt="${post.title}" class="blog-thumb" />
      <div class="blog-content">
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
          <span><i class="fa-regular fa-user"></i> ${post.author}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="${post.link}" class="read-more">Read More →</a>
      </div>
    </article>
  `;
}
