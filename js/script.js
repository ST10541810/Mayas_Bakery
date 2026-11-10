document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-links");

  if (menuButton && navigation) {
    const setMenuOpen = (isOpen) => {
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
      navigation.classList.toggle("is-open", isOpen);
    };

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isExpanded);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menuButton.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const answerId = button.getAttribute("aria-controls");
      const answer = answerId ? document.getElementById(answerId) : null;

      if (!answer) {
        return;
      }

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;

      const icon = button.querySelector(".faq-icon");
      if (icon) {
        icon.textContent = isExpanded ? "+" : "−";
      }
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

    if (searchInput && resultCount && emptyState) {
      const updateProducts = () => {
        const searchTerm = searchInput.value.trim().toLocaleLowerCase();
        let visibleCount = 0;

        products.forEach((product) => {
          const matchesCategory =
            activeCategory === "all" ||
            product.dataset.category === activeCategory;
          const matchesSearch = product.textContent
            .toLocaleLowerCase()
            .includes(searchTerm);
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
          activeCategory = button.dataset.filter || "all";

          filterButtons.forEach((filterButton) => {
            const isActive = filterButton === button;
            filterButton.classList.toggle("active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
          });

          updateProducts();
        });
      });

      updateProducts();
    }
  }

  document
    .querySelectorAll("[data-demo-form], #contactForm")
    .forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
          return;
        }

        const message = form.querySelector(".form-message");
        if (message) {
          message.textContent =
            form.id === "contactForm"
              ? "Thank you! Your message has been validated for this demo. It was not sent or stored."
              : "Thank you! Your enquiry has been validated for this demo. It was not sent or stored.";
        }

        form.reset();
      });
    });
});
