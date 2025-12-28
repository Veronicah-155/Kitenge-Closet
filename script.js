/* ============ PRODUCT DATA ============ */
const productsData = [
  {
    id: 1,
    name: "Savanna Maxi Skirt Set",
    category: "clothes",
    price: 5500,
    image: "assets/cloth2.jpg",
    description:
      "Flowing maxi skirt with a matching crop top in a bold geometric print.",
  },
  {
    id: 2,
    name: "Teardrop Jewelry Set",
    category: "accessories",
    price: 2500,
    image: "assets/access1.jpg",
    description:
      "Matching necklace and earring set featuring a black and orange tear-drop pendant.",
  },
  {
    id: 3,
    name: "Blue Kicks Sneakers",
    category: "shoes",
    price: 3500,
    image: "assets/shoe1.jpg",
    description:
      "Casual lace-up sneakers with blue and white African print panels.",
  },
  {
    id: 4,
    name: "Earth Tone Gown",
    category: "clothes",
    price: 6000,
    image: "assets/cloth3.jpg",
    description: "Elegant floor-length dress in earthy brown and green tones.",
  },
  {
    id: 5,
    name: "Blue Flare Mini",
    category: "clothes",
    price: 4500,
    image: "assets/cloth4.jpg",
    description: "Short, flared dress with a playful blue and white pattern.",
  },
  {
    id: 6,
    name: "Peplum Green Dress",
    category: "clothes",
    price: 4800,
    image: "assets/cloth5.jpg",
    description: "Structured peplum dress in vibrant green Kitenge fabric.",
  },
  {
    id: 7,
    name: "Azure Men's Shirt",
    category: "clothes",
    price: 3200,
    image: "assets/cloth6.jpg",
    description:
      "Short-sleeved men's shirt with a classic blue dashiki-style print.",
  },
  {
    id: 8,
    name: "Crimson Casual Shirt",
    category: "clothes",
    price: 3000,
    image: "assets/cloth7.jpg",
    description:
      "Relaxed fit button-down shirt featuring red and black motifs.",
  },
  {
    id: 9,
    name: "Red Geometric Set",
    category: "clothes",
    price: 5000,
    image: "assets/cloth8.jpg",
    description:
      "Men's matching shirt and shorts set in a striking red pattern.",
  },
  {
    id: 10,
    name: "Double Strand Necklace",
    category: "accessories",
    price: 1800,
    image: "assets/access2.jpg",
    description:
      "Chunky beaded necklace with multiple strands of red and gold.",
  },
  {
    id: 11,
    name: "Folding Hand Fan",
    category: "accessories",
    price: 1500,
    image: "assets/access3.jpg",
    description:
      "Leather-handled folding fan with a bright orange traditional print.",
  },
  {
    id: 12,
    name: "Kente Bow Headband",
    category: "accessories",
    price: 1200,
    image: "assets/access4.jpg",
    description: "Structured hair bow/headband made from colorful Kente cloth.",
  },
  {
    id: 13,
    name: "Gentleman's Tie Set",
    category: "accessories",
    price: 2000,
    image: "assets/access5.jpg",
    description:
      "Set of three neckties in assorted green and red Ankara prints.",
  },
  {
    id: 14,
    name: "Urban Waist Bag",
    category: "accessories",
    price: 2200,
    image: "assets/access7.jpg",
    description: "Trendy fanny pack featuring a bright blue and pink pattern.",
  },
  {
    id: 15,
    name: "Maasai Bib Necklace",
    category: "accessories",
    price: 2800,
    image: "assets/access8.jpg",
    description: "Wide collar-style necklace inspired by traditional beadwork.",
  },

  {
    id: 16,
    name: "Sky High Heels",
    category: "shoes",
    price: 5500,
    image: "assets/shoe2.jpg",
    description: "Stilettos wrapped in a sleek blue and purple wax print.",
  },
  {
    id: 17,
    name: "Sunset Pumps",
    category: "shoes",
    price: 5500,
    image: "assets/shoe3.jpg",
    description: "Classic pumps covered in warm yellow and orange fabric.",
  },
  {
    id: 18,
    name: "Canvas Slip-Ons",
    category: "shoes",
    price: 3000,
    image: "assets/shoe4.jpg",
    description: "Easy-wear slip-on shoes with a dark green leafy pattern.",
  },
  {
    id: 19,
    name: "Safari High-Tops",
    category: "shoes",
    price: 4500,
    image: "assets/shoe5.jpg",
    description: "High-top sneakers featuring a black base with green accents.",
  },
  {
    id: 20,
    name: "Mosaic Flats",
    category: "shoes",
    price: 2800,
    image: "assets/shoe6.jpg",
    description: "Comfortable flat shoes with a detailed mosaic fabric design.",
  },
  {
    id: 21,
    name: "Print Loafers",
    category: "shoes",
    price: 3800,
    image: "assets/shoe7.jpg",
    description: "Stylish loafers with a yellow and black abstract print.",
  },
  {
    id: 22,
    name: "Urban Low Sneakers",
    category: "shoes",
    price: 3500,
    image: "assets/shoe8.jpg",
    description: "Low-cut sneakers featuring a graffiti-style African print.",
  },
  {
    id: 23,
    name: "Obsidian Trim Shirt",
    category: "clothes",
    price: 3500,
    image: "assets/product4.jpg",
    description:
      "Black long-sleeve shirt with colorful Ankara accents on the pocket and cuffs.",
  },
  {
    id: 24,
    name: "Mermaid Hem Dress",
    category: "clothes",
    price: 6500,
    image: "assets/product2.jpg",
    description:
      "Black fitted dress with a flared mermaid hem in patterned fabric.",
  },
  {
    id: 25,
    name: "Ivory Accent Shirt",
    category: "clothes",
    price: 3500,
    image: "assets/product3.jpg",
    description:
      "Crisp white shirt with a vertical strip of Kitenge fabric down the buttons.",
  },
  {
    id: 26,
    name: "Scrunchie Trio (Blue)",
    category: "accessories",
    price: 800,
    image: "assets/access9.jpg",
    description: "Set of three hair scrunchies in cool blue tones.",
  },
  {
    id: 27,
    name: "Scrunchie Trio (Mix)",
    category: "accessories",
    price: 800,
    image: "assets/access6.jpg",
    description: "Set of three hair scrunchies in mixed warm tones.",
  },
  {
    id: 28,
    name: "Ankara House Slippers",
    category: "shoes",
    price: 2000,
    image: "assets/shoe9.jpg",
    description:
      "Soft-soled indoor slippers made from folded patterned fabric.",
  },
  {
    id: 29,
    name: "Royal Blue Loafers",
    category: "shoes",
    price: 4000,
    image: "assets/shoe10.jpg",
    description: "Premium loafers featuring a deep royal blue and gold print.",
  },
  {
    id: 30,
    name: "Patchwork Tote Bag",
    category: "accessories",
    price: 3000,
    image: "assets/access10.jpg",
    description:
      "Spacious tote bag made from squares of various leftover fabrics.",
  },
];

let currentSlide = 0;
let slideInterval;
let totalSlides = 0;

document.addEventListener("DOMContentLoaded", () => {
  initBannerSlider();
  initTouchSupport();
});

function initBannerSlider() {
  const slides = document.querySelectorAll(".slide");
  if (!slides || slides.length === 0) return;

  totalSlides = slides.length;

  createNavigationDots();
  startAutoSlide();

  const banner = document.querySelector(".banner");
  banner.addEventListener("mouseenter", stopAutoSlide);
  banner.addEventListener("mouseleave", startAutoSlide);
}

function createNavigationDots() {
  const banner = document.querySelector(".banner");
  const oldDots = document.querySelector(".banner-dots");
  if (oldDots) oldDots.remove();

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "banner-dots";

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "banner-dot";
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }

  banner.appendChild(dotsContainer);
}

function showSlide(index) {
  const bannerSlides = document.querySelector(".banner-slides");
  const dots = document.querySelectorAll(".banner-dot");

  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  currentSlide = index;

  const offset = -currentSlide * 100;
  bannerSlides.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

function nextSlide() {
  showSlide(currentSlide + 1);
}
function goToSlide(i) {
  showSlide(i);
}

function startAutoSlide() {
  stopAutoSlide();
  slideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  if (slideInterval) clearInterval(slideInterval);
}

let touchStartX = 0;

function initTouchSupport() {
  const banner = document.querySelector(".banner");

  banner.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  banner.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) showSlide(currentSlide - 1);
  });
}

/* ============ SEARCH FUNCTIONALITY ============ */
function searchProducts() {
  const searchInput = document.getElementById("search");
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === "") {
    showSearchMessage("Please enter a search term", "warning");
    return;
  }

  const results = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  sessionStorage.setItem("searchResults", JSON.stringify(results));
  sessionStorage.setItem("searchTerm", searchTerm);

  if (!window.location.pathname.includes("products.html")) {
    window.location.href = "products.html";
  } else {
    displaySearchResults(results, searchTerm);
  }
}

function displaySearchResults(results, searchTerm) {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  const searchHeader = document.createElement("div");
  searchHeader.className = "search-header";
  searchHeader.innerHTML = `
    <h2>Search Results for "${searchTerm}"</h2>
    <p>${results.length} product${results.length !== 1 ? "s" : ""} found</p>
    <button onclick="clearSearch()" class="btn-clear-search">Clear Search</button>
  `;

  container.parentElement.insertBefore(searchHeader, container);

  if (results.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
        <h3>No products found</h3>
        <p>Try searching with different keywords</p>
      </div>
    `;
    return;
  }

  results.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Ksh ${product.price}</p>
      <div class="product-buttons">
        <button onclick="viewProduct(${product.id})">View Details</button>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function clearSearch() {
  sessionStorage.removeItem("searchResults");
  sessionStorage.removeItem("searchTerm");

  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.value = "";
  }

  const searchHeader = document.querySelector(".search-header");
  if (searchHeader) {
    searchHeader.remove();
  }

  const suggestionsDiv = document.getElementById("search-suggestions");
  if (suggestionsDiv) {
    suggestionsDiv.style.display = "none";
  }

  renderProducts();
}

function showSearchMessage(message, type = "info") {
  const existingMessage = document.querySelector(".search-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `search-message ${type}`;
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

function showSearchSuggestions(searchTerm) {
  if (searchTerm.length < 2) {
    hideSearchSuggestions();
    return;
  }

  const suggestions = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5)
    .map((product) => product.name);

  if (suggestions.length === 0) {
    hideSearchSuggestions();
    return;
  }

  let suggestionsDiv = document.getElementById("search-suggestions");
  if (!suggestionsDiv) {
    suggestionsDiv = document.createElement("div");
    suggestionsDiv.id = "search-suggestions";
    suggestionsDiv.className = "search-suggestions";
    document.querySelector(".search-bar").appendChild(suggestionsDiv);
  }

  suggestionsDiv.innerHTML = suggestions
    .map((suggestion) => `<div class="suggestion-item">${suggestion}</div>`)
    .join("");
  suggestionsDiv.style.display = "block";

  document.querySelectorAll(".suggestion-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("search").value = item.textContent;
      hideSearchSuggestions();
      searchProducts();
    });
  });
}

function hideSearchSuggestions() {
  const suggestionsDiv = document.getElementById("search-suggestions");
  if (suggestionsDiv) {
    suggestionsDiv.style.display = "none";
  }
}

function initializeSearch() {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchProducts();
    }
  });

  searchInput.addEventListener("input", (e) => {
    showSearchSuggestions(e.target.value.trim());
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-bar")) {
      hideSearchSuggestions();
    }
  });

  checkSearchResults();
}

function checkSearchResults() {
  const searchResults = sessionStorage.getItem("searchResults");
  const searchTerm = sessionStorage.getItem("searchTerm");
  if (
    searchResults &&
    searchTerm &&
    window.location.pathname.includes("products.html")
  ) {
    const results = JSON.parse(searchResults);
    displaySearchResults(results, searchTerm);
    const searchInput = document.getElementById("search");
    if (searchInput) {
      searchInput.value = searchTerm;
    }
  }
}

const originalRenderProducts = renderProducts;
renderProducts = function (category = "all") {
  const searchResults = sessionStorage.getItem("searchResults");
  const searchTerm = sessionStorage.getItem("searchTerm");

  if (searchResults && searchTerm && !category) {
    const results = JSON.parse(searchResults);
    displaySearchResults(results, searchTerm);
    return;
  }

  originalRenderProducts(category);
};

/* ============ GLOBAL HANDLING ============ */
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((t, item) => t + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = count;
}

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: productId, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart!");
}

/* ============ PRODUCT DETAILS ============ */
function viewProduct(productId) {
  window.location.href = `product-details.html?id=${productId}`;
}

/* ============ PRODUCT LIST ============ */
function renderProducts(category = "all") {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";
  let filtered = productsData;
  if (category !== "all") {
    filtered = productsData.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Ksh ${product.price}</p>
      <div class="product-buttons">
        <button onclick="viewProduct(${product.id})">View Details</button>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function setupCategoryFilters() {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      renderProducts(btn.dataset.category);
    });
  });
}

/* ============ PRODUCT DETAILS ============ */
function loadProductDetails() {
  if (!window.location.pathname.includes("product-details.html")) return;

  const container = document.querySelector(".product-details-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = productsData.find((p) => p.id === id);
  if (!product) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="product-detail-wrapper">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="product-price">Ksh ${product.price}</p>
        <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        <div id="feedback-container"></div>
      </div>
    </div>
  `;

  initProductFeedback(id);
}

/* ============ FEEDBACK FORM ============ */
function createFeedbackSection(productId) {
  const container = document.getElementById("feedback-container");
  if (!container) return;

  container.innerHTML = `
    <div class="feedback-section">
      <h3>Leave a Review</h3>
      <form id="feedback-form">
        <input type="text" id="feedback-name" placeholder="Your Name" required />
        <div class="star-rating">
          ${[1, 2, 3, 4, 5]
            .map(
              (n) => `
            <label class="star-label">
              <input type="radio" name="rating" value="${n}" />
              <span>⭐</span>
            </label>
          `
            )
            .join("")}
        </div>
        <textarea id="feedback-comment" placeholder="Write your comment" required></textarea>
        <button type="submit" class="btn-primary">Submit Review</button>
      </form>
      <div id="feedback-list" class="feedback-list"></div>
    </div>
  `;

  loadFeedback(productId);

  const form = document.getElementById("feedback-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("feedback-name").value.trim();
    const comment = document.getElementById("feedback-comment").value.trim();
    const rating = parseInt(
      document.querySelector('input[name="rating"]:checked')?.value || 0
    );

    if (!name || !comment || !rating) {
      alert("Please fill all fields and select a rating.");
      return;
    }

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || {};
    if (!feedbacks[productId]) feedbacks[productId] = [];
    feedbacks[productId].push({ name, comment, rating });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    try {
      await fetch("https://sheetdb.io/api/v1/qu500aytsrzqf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            productId,
            name,
            comment,
            rating,
            date: new Date().toISOString(),
          },
        }),
      });
    } catch (err) {
      console.error("Failed to send review to SheetDB:", err);
    }

    form.reset();
    loadFeedback(productId);
    alert("Thank you for your review!");
  });
}

function loadFeedback(productId) {
  const feedbackList = document.getElementById("feedback-list");
  if (!feedbackList) return;

  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || {};
  const productFeedbacks = feedbacks[productId] || [];

  feedbackList.innerHTML = productFeedbacks.length
    ? productFeedbacks
        .map(
          (fb) => `
        <div class="feedback-card">
          <p><strong>${fb.name}</strong> - ${"⭐".repeat(fb.rating)}</p>
          <p>${fb.comment}</p>
        </div>
      `
        )
        .join("")
    : "<p>No reviews yet. Be the first to review!</p>";
}

function initProductFeedback(productId) {
  createFeedbackSection(productId);
}

/* ============ CART SECTION ============ */
function renderCart() {
  if (!window.location.pathname.includes("cart.html")) return;

  const container = document.getElementById("cart-items");
  if (!container) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.length) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  container.innerHTML = "";

  cart.forEach((item) => {
    const product = productsData.find((p) => p.id === item.id);
    if (!product) return;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-name">${product.name}</h3>
        <p class="cart-item-price">Ksh ${product.price}</p>
        <div class="quantity-wrapper">
          <label for="qty-${item.id}">Quantity:</label>
          <input type="number" id="qty-${item.id}" min="1" value="${item.quantity}" />
        </div>
        <button class="btn-remove">Remove</button>
      </div>
    `;
    container.appendChild(div);

    div.querySelector(`#qty-${item.id}`).addEventListener("change", (e) => {
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 1) value = 1;
      item.quantity = value;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartTotal();
    });

    div.querySelector(".btn-remove").addEventListener("click", () => {
      cart = cart.filter((c) => c.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-total";
  totalDiv.innerHTML = `<h3>Total: Ksh <span id="cart-total-price">0</span></h3>
                        <button id="checkout-btn">Proceed to Checkout</button>`;
  container.appendChild(totalDiv);

  document.getElementById("checkout-btn").addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  updateCartTotal();

  function updateCartTotal() {
    const totalPrice = cart.reduce((sum, item) => {
      const product = productsData.find((p) => p.id === item.id);
      return sum + product.price * item.quantity;
    }, 0);
    const totalPriceEl = document.getElementById("cart-total-price");
    if (totalPriceEl) totalPriceEl.textContent = totalPrice.toLocaleString();
  }
}

/* ============ INITIALIZE ============ */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  initializeSearch();

  if (
    window.location.pathname.includes("index.html") ||
    window.location.pathname.includes("products.html")
  ) {
    renderProducts();
    setupCategoryFilters();
  }

  if (window.location.pathname.includes("product-details.html")) {
    loadProductDetails();
  }

  if (window.location.pathname.includes("cart.html")) {
    renderCart();
  }
});
