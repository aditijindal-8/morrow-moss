// Small interactions for the Morrow & Moss website
document.addEventListener("DOMContentLoaded", function () {
  // Keep the demo bag count when the visitor moves between pages.
  let bagCount = Number(localStorage.getItem("morrowBag") || 0);
  document.querySelectorAll("#bag-count").forEach(function (item) {
    item.textContent = bagCount;
  });

  // Add buttons on the shop page.
  document.querySelectorAll(".add-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      bagCount++;
      localStorage.setItem("morrowBag", bagCount);
      document.querySelectorAll("#bag-count").forEach(function (item) {
        item.textContent = bagCount;
      });
      button.textContent = "Added ✓";
      setTimeout(function () { button.textContent = "Add +"; }, 900);
    });
  });

  // Simple category filter for shop products.
  const filterButtons = document.querySelectorAll(".filter");
  const products = document.querySelectorAll(".shop-card");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (item) { item.classList.remove("active"); });
      button.classList.add("active");
      const category = button.dataset.filter;
      let visible = 0;
      products.forEach(function (product) {
        const show = category === "all" || product.dataset.category === category;
        product.style.display = show ? "block" : "none";
        if (show) visible++;
      });
      const countText = document.getElementById("product-count");
      if (countText) countText.textContent = visible + " lovely things";
    });
  });

  // Demo form feedback: no real message is sent.
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("contact-message").textContent =
        "Thank you! Your demo message is ready. (No message was actually sent.)";
      contactForm.reset();
    });
  }

  const customForm = document.getElementById("custom-form");
  if (customForm) {
    customForm.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("custom-message").textContent =
        "Lovely idea! Your demo request has been noted on this page.";
      customForm.reset();
    });
  }
});