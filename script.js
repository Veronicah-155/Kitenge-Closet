// ===================== Products =====================
const products = [
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

// ===================== Utility =====================
function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

function getCart() {
  const user = getLoggedInUser();
  if (!user) return [];
  return JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
}

function saveCart(cart) {
  const user = getLoggedInUser();
  if (!user) return;
  localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
  updateCartIcon();
}

function updateCartIcon() {
  const countElem = document.getElementById("cart-count");
  if (!countElem) return;
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  countElem.textContent = count;
}

// ===================== Cart =====================
function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = products.find((p) => p.id == productId);
  if (!product) return;
  const existing = cart.find((item) => item.id == productId);
  if (existing) existing.quantity += quantity;
  else cart.push({ ...product, quantity });
  saveCart(cart);
  alert(`${quantity} item(s) added to cart!`);
}

function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
  loadCart();
}

function updateQuantity(id, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.quantity = Math.max(1, parseInt(qty));
  saveCart(cart);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function loadCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  const cart = getCart();
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = `<p>Your cart is empty.</p>`;
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Ksh ${item.price}</p>
        <div class="quantity-wrapper">
          <label for="qty-${index}">Qty:</label>
          <input type="number" id="qty-${index}" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
        </div>
        <button class="btn-remove" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });

  const totalBox = document.createElement("div");
  totalBox.className = "cart-total";
  totalBox.innerHTML = `<h3>Total: Ksh <span id="cart-total">${total.toFixed(
    2
  )}</span></h3>
    <button onclick="window.location.href='checkout.html'">Proceed to Checkout</button>`;
  container.appendChild(totalBox);
}

// ===================== Login/Signup =====================
function validateSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  window.location.href = "login.html";
  return false;
}

function validateLogin() {
  const email = document
    .getElementById("email")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("password").value.trim();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password.");
    return false;
  }
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  alert(`Welcome back, ${user.name}!`);
  window.location.href = "index.html";
  return false;
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}

function initUserAuth() {
  const user = getLoggedInUser();
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const welcomeMsg = document.getElementById("welcome-msg");

  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (welcomeMsg) welcomeMsg.textContent = `Hello, ${user.name}!`;
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (signupBtn) signupBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
}

// ===================== Payment =====================
function validatePayment() {
  const address = document.getElementById("address").value.trim();
  const cardNumber = document.getElementById("card-number").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!address || !cardNumber || !expiry || !cvv) {
    alert("Please fill all fields.");
    return false;
  }
  if (cardNumber.length < 8 || cardNumber.length > 19) {
    alert("Invalid card number.");
    return false;
  }
  if (cvv.length < 3 || cvv.length > 4) {
    alert("Invalid CVV.");
    return false;
  }

  localStorage.removeItem(`cart_${getLoggedInUser()?.email}`);
  updateCartIcon();

  const orderId = "ORD" + Math.floor(Math.random() * 1000000);
  window.location.href = `confirmation.html?orderId=${orderId}`;
  return false;
}

// ===================== Products Page =====================
function loadProducts(productsArray = products) {
  const grid = document.getElementById("product-list");
  if (!grid) return;

  grid.innerHTML = "";
  productsArray.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.category = product.category;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Ksh ${product.price}</p>
      <div class="product-buttons">
        <button onclick="viewProduct(${product.id})">View Details</button>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartIcon();
  initUserAuth();

  if (document.getElementById("product-list")) loadProducts();
  if (document.querySelector(".product-details-container"))
    loadProductDetails();
  if (document.getElementById("cart-items")) loadCart();
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      validateLogin();
    });
  }
});
