// ===================== Products =====================
const products = [
  
];

/****************************************************
 * GLOBAL CART HANDLING
 ****************************************************/
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((t, item) => t + item.quantity, 0);

  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = count;
}

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart!");
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

/****************************************************
 * SEARCH FUNCTIONALITY
 ****************************************************/
function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const productCards = document.querySelectorAll(".product-card, .category-card");

  productCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

/****************************************************
 * PRODUCT LIST & FILTERING
 ****************************************************/
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

function renderProducts(category = "all") {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  let filtered = productsData;
  if (category !== "all") {
    filtered = productsData.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  filtered.forEach(product => {
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
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      renderProducts(category);
    });
  });
}

/****************************************************
 * PRODUCT DETAILS PAGE
 ****************************************************/
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

  // Create a flex layout: image on left, info + feedback on right
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

  initProductFeedback(id); // render feedback inside #feedback-container
}

/****************************************************
 * PRODUCT FEEDBACK FORM DYNAMICALLY
 ****************************************************/
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
              (n) =>
                `<label class="star-label">
                  <input type="radio" name="rating" value="${n}" />
                  <span>⭐</span>
                </label>`
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
  form.addEventListener("submit", function (e) {
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

    form.reset();
    loadFeedback(productId);
  });
}

function loadFeedback(productId) {
  const feedbackList = document.getElementById("feedback-list");
  if (!feedbackList) return;

  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || {};
  const productFeedbacks = feedbacks[productId] || [];

  feedbackList.innerHTML = "";

  if (!productFeedbacks.length) {
    feedbackList.innerHTML =
      "<p>No reviews yet. Be the first to review!</p>";
    return;
  }

  productFeedbacks.forEach((fb) => {
    const div = document.createElement("div");
    div.className = "feedback-card";
    div.innerHTML = `
      <p><strong>${fb.name}</strong> - ${"⭐".repeat(fb.rating)}</p>
      <p>${fb.comment}</p>
    `;
    feedbackList.appendChild(div);
  });
}

// Initialize feedback section
function initProductFeedback(productId) {
  createFeedbackSection(productId);
}

/****************************************************
 * CART PAGE - INTERACTIVE
 ****************************************************/
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

  // Render each cart item
  cart.forEach(item => {
    const product = productsData.find(p => p.id === item.id);
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

    // Handle quantity change
    const qtyInput = div.querySelector(`#qty-${item.id}`);
    qtyInput.addEventListener("change", (e) => {
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 1) value = 1;
      item.quantity = value;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartTotal();
    });

    // Handle remove button
    const removeBtn = div.querySelector(".btn-remove");
    removeBtn.addEventListener("click", () => {
      cart = cart.filter(c => c.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(); // re-render the cart
    });
  });

  // Render total section
  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-total";
  totalDiv.innerHTML = `
    <h3>Total: Ksh <span id="cart-total-price">0</span></h3>
    <button id="checkout-btn">Proceed to Checkout</button>
  `;
  container.appendChild(totalDiv);

  // Handle checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  // Initial total calculation
  updateCartTotal();

  // Function to update cart total dynamically
  function updateCartTotal() {
    const totalPrice = cart.reduce((sum, item) => {
      const product = productsData.find(p => p.id === item.id);
      return sum + (product.price * item.quantity);
    }, 0);

    const totalPriceEl = document.getElementById("cart-total-price");
    if (totalPriceEl) totalPriceEl.textContent = totalPrice.toLocaleString();
  }
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", renderCart);
/****************************************************
 * CART PAGE - INTERACTIVE
 ****************************************************/
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

  // Render each cart item
  cart.forEach(item => {
    const product = productsData.find(p => p.id === item.id);
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

    // Handle quantity change
    const qtyInput = div.querySelector(`#qty-${item.id}`);
    qtyInput.addEventListener("change", (e) => {
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 1) value = 1;
      item.quantity = value;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartTotal();
    });

    // Handle remove button
    const removeBtn = div.querySelector(".btn-remove");
    removeBtn.addEventListener("click", () => {
      cart = cart.filter(c => c.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(); // re-render the cart
    });
  });

  // Render total section
  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-total";
  totalDiv.innerHTML = `
    <h3>Total: Ksh <span id="cart-total-price">0</span></h3>
    <button id="checkout-btn">Proceed to Checkout</button>
  `;
  container.appendChild(totalDiv);

  // Handle checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  // Initial total calculation
  updateCartTotal();

  // Function to update cart total dynamically
  function updateCartTotal() {
    const totalPrice = cart.reduce((sum, item) => {
      const product = productsData.find(p => p.id === item.id);
      return sum + (product.price * item.quantity);
    }, 0);

    const totalPriceEl = document.getElementById("cart-total-price");
    if (totalPriceEl) totalPriceEl.textContent = totalPrice.toLocaleString();
  }
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", renderCart);


/****************************************************
 * CHECKOUT PAGE
 ****************************************************/
function validatePayment() {
  const address = document.getElementById("address").value.trim();
  const card = document.getElementById("card-number").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!address || !card || !expiry || !cvv) {
    alert("Please fill in all fields.");
    return false;
  }

  processPayment();
  return false;
}

function processPayment() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.length) {
    alert("Your cart is empty.");
    window.location.href = "products.html";
    return;
  }

  const orderId = generateOrderId();
  localStorage.setItem("last_order_id", orderId);

  // Clear cart
  localStorage.removeItem("cart");

  window.location.href = "confirmation.html";
}

function generateOrderId() {
  const random = Math.floor(Math.random() * 900000) + 100000;
  return `ORD-${Date.now()}-${random}`;
}

/****************************************************
 * CONFIRMATION PAGE
 ****************************************************/
function loadConfirmationData() {
  if (!window.location.pathname.includes("confirmation.html")) return;

  const orderIdElement = document.getElementById("order-id");
  const orderId = localStorage.getItem("last_order_id");

  if (!orderId) {
    window.location.href = "products.html";
    return;
  }

  orderIdElement.textContent = orderId;
  localStorage.removeItem("last_order_id");
}

/****************************************************
 * LOGIN PAGE
 ****************************************************/
function validateLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const savedUser = JSON.parse(localStorage.getItem("user_account"));

  if (!savedUser) {
    alert("No account found. Please sign up first.");
    return false;
  }

  if (email !== savedUser.email || password !== savedUser.password) {
    alert("Incorrect email or password!");
    return false;
  }

  localStorage.setItem("logged_in_user", savedUser.email);
  alert("Login successful!");
  window.location.href = "products.html";
  return false;
}

/****************************************************
 * SIGNUP PAGE
 ****************************************************/
function validateSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  const existingUser = JSON.parse(localStorage.getItem("user_account"));
  if (existingUser && existingUser.email === email) {
    alert("An account with this email already exists. Please login.");
    return false;
  }

  const user = { name, email, password };
  localStorage.setItem("user_account", JSON.stringify(user));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
  return false;
}

/****************************************************
 * HOME PAGE BANNER SLIDER
 ****************************************************/
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".banner-slides .slide");
  if (!slides.length) return;

  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

/****************************************************
 * INITIALIZE
 ****************************************************/
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProducts();
  setupCategoryFilters();
  loadProductDetails();
  renderCart();
  loadConfirmationData();
  showSlides();
  initProductFeedback();
});
