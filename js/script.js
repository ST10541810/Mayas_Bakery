document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
      );
      navigation.classList.toggle("is-open", !isExpanded);
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const answer = document.getElementById(button.getAttribute("aria-controls"));

      button.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;
      button.querySelector(".faq-icon").textContent = isExpanded ? "+" : "−";
    });
  });

  const productGrid = document.querySelector("#product-grid");

  if (productGrid) {
    const products = [...productGrid.querySelectorAll(".product-card")];
    const searchInput = document.querySelector("#product-search");
    const filterButtons = document.querySelectorAll(".filter-button");
    const resultCount = document.querySelector("#result-count");
    const emptyState = document.querySelector("#no-products");
    let activeCategory = "all";

    const updateProducts = () => {
      const searchTerm = searchInput.value.trim().toLocaleLowerCase();
      let visibleCount = 0;

      products.forEach((product) => {
        const matchesCategory =
          activeCategory === "all" || product.dataset.category === activeCategory;
        const matchesSearch = product.textContent.toLocaleLowerCase().includes(searchTerm);
        const isVisible = matchesCategory && matchesSearch;

        product.hidden = !isVisible;
        if (isVisible) {
          visibleCount += 1;
        }
      });

      resultCount.textContent =
        activeCategory === "all" && searchTerm === ""
          ? `Showing all ${visibleCount} products`
          : `Showing ${visibleCount} of ${products.length} products`;
      emptyState.hidden = visibleCount > 0;
    };

    searchInput.addEventListener("input", updateProducts);

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
          const isActive = filterButton === button;
          filterButton.classList.toggle("active", isActive);
          filterButton.setAttribute("aria-pressed", String(isActive));
        });

        updateProducts();
      });
    });
  }

  document.querySelectorAll("[data-demo-form], #contactForm").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const message = form.querySelector(".form-message");
      if (message) {
        message.textContent =
          "Thank you! Your message has been validated successfully. No details have been sent or stored.";
      }

      form.reset();
    });
  });
});
