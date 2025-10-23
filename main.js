// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form submit handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully! I'll get back to you soon.");
  this.reset();
});

// Hire Me button scrolls to contact section
document.getElementById("hireMeBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
