// IronFuel Nutrition – Shop logic

// ================================
// PRODUCT DATA
// ================================
const products = [
  {
    id: "whey-isolate",
    name: "100% Whey Isolate",
    price: 59.99,
    category: "protein",
    goal: "muscle",
    rating: 4.8,
    reviews: 412,
    tag: "Bestseller",
    servings: 60,
    flavor: "Chocolate Fudge",
    image:
      "https://images.pexels.com/photos/669576/pexels-photo-669576.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "whey-lean",
    name: "Lean Whey Protein",
    price: 49.99,
    category: "protein",
    goal: "fatloss",
    rating: 4.6,
    reviews: 231,
    tag: "Low Carb",
    servings: 50,
    flavor: "Vanilla Ice Cream",
    image:
      "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "mass-gainer",
    name: "Heavy Mass Gainer",
    price: 64.99,
    category: "protein",
    goal: "strength",
    rating: 4.5,
    reviews: 189,
    tag: "High Calorie",
    servings: 20,
    flavor: "Cookies & Cream",
    image:
      "https://images.pexels.com/photos/3761523/pexels-photo-3761523.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "preworkout-stim",
    name: "Riot Pre-Workout (High Stim)",
    price: 39.99,
    category: "preworkout",
    goal: "strength",
    rating: 4.9,
    reviews: 534,
    tag: "High Stim",
    servings: 30,
    flavor: "Sour Cherry",
    image:
      "https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "preworkout-pump",
    name: "Nitro Pump Pre-Workout (Stim Free)",
    price: 36.99,
    category: "preworkout",
    goal: "endurance",
    rating: 4.7,
    reviews: 298,
    tag: "Pump Formula",
    servings: 28,
    flavor: "Blue Raspberry",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "creatine-mono",
    name: "Micronized Creatine Monohydrate",
    price: 24.99,
    category: "creatine",
    goal: "strength",
    rating: 4.9,
    reviews: 768,
    tag: "Essential",
    servings: 60,
    flavor: "Unflavored",
    image:
      "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "creatine-complex",
    name: "Creapower + Beta-Alanine Complex",
    price: 34.99,
    category: "creatine",
    goal: "strength",
    rating: 4.7,
    reviews: 312,
    tag: "Performance",
    servings: 40,
    flavor: "Citrus Punch",
    image:
      "https://images.pexels.com/photos/4662358/pexels-photo-4662358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "bcaa-recovery",
    name: "Intra-Workout BCAA + Electrolytes",
    price: 32.99,
    category: "recovery",
    goal: "endurance",
    rating: 4.6,
    reviews: 205,
    tag: "Hydration",
    servings: 40,
    flavor: "Tropical Storm",
    image:
      "https://images.pexels.com/photos/7674480/pexels-photo-7674480.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "casein-night",
    name: "Elite Nighttime Casein",
    price: 54.99,
    category: "recovery",
    goal: "muscle",
    rating: 4.8,
    reviews: 177,
    tag: "Slow Release",
    servings: 50,
    flavor: "Salted Caramel",
    image:
      "https://images.pexels.com/photos/7674481/pexels-photo-7674481.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "vitamin-pack",
    name: "Daily Performance Vitamin Pack",
    price: 29.99,
    category: "vitamins",
    goal: "endurance",
    rating: 4.4,
    reviews: 145,
    tag: "Essential",
    servings: 30,
    flavor: "Capsules",
    image:
      "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "omega3",
    name: "Ultra Omega-3 Softgels",
    price: 24.49,
    category: "vitamins",
    goal: "muscle",
    rating: 4.5,
    reviews: 214,
    tag: "Health",
    servings: 60,
    flavor: "Softgel",
    image:
      "https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "fatburner",
    name: "Thermo-Shred Fat Burner",
    price: 39.49,
    category: "recovery",
    goal: "fatloss",
    rating: 4.3,
    reviews: 321,
    tag: "Cutting",
    servings: 45,
    flavor: "Capsules",
    image:
      "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Bundle definitions using product IDs above
const bundles = {
  "lean-mass": [
    { id: "whey-isolate", qty: 1 },
    { id: "creatine-mono", qty: 1 },
    { id: "bcaa-recovery", qty: 1 },
  ],
  "cut-stack": [
    { id: "fatburner", qty: 1 },
    { id: "preworkout-pump", qty: 1 },
    { id: "whey-lean", qty: 1 },
  ],
  "strength-stack": [
    { id: "preworkout-stim", qty: 1 },
    { id: "creatine-complex", qty: 1 },
    { id: "casein-night", qty: 1 },
  ],
};

// ================================
// DOM HELPERS & STATE
// ================================
const $ = (selector) => document.querySelector(selector);

const productsGrid = $("#productsGrid");
const cartToggle = $("#cartToggle");
const cartSidebar = $("#cartSidebar");
const cartBackdrop = $("#cartBackdrop");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const cartSubtotal = $("#cartSubtotal");
const closeCartButton = $("#closeCart");
const checkoutButton = $("#checkoutButton");
const goalSelect = $("#goalSelect");
const sortSelect = $("#sortSelect");
const searchInput = $("#searchInput");
const yearSpan = $("#year");

const chipButtons = Array.from(document.querySelectorAll(".chip"));
const bundleButtons = Array.from(
  document.querySelectorAll(".bundles-section .btn[data-bundle]")
);

let currentCategory = "all";
let currentGoal = "all";
let currentSort = "featured";
let currentSearch = "";

let cart = []; // [{ id, qty }]

// ================================
// UTILITIES
// ================================
function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function findProduct(id) {
  return products.find((p) => p.id === id);
}

// ================================
// PRODUCT RENDERING & FILTERING
// ================================
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const ratingStars = "★".repeat(Math.round(product.rating));

  card.innerHTML = `
    <div class="product-tag">${product.tag}</div>
    <div class="product-image-wrapper">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
    </div>
    <h3 class="product-title">${product.name}</h3>
    <div class="product-meta">
      <span>${product.servings} servings • ${product.flavor}</span>
      <span class="product-rating" aria-label="Rated ${product.rating} out of 5">
        <span>${ratingStars}</span>
        <span>${product.rating.toFixed(1)}</span>
      </span>
    </div>
    <div class="product-price-row">
      <div class="product-price">${formatPrice(product.price)}<span>/ tub</span></div>
      <span style="font-size:0.78rem;color:#9b9bb2;">${product.reviews} reviews</span>
    </div>
    <div class="product-cta">
      <button class="btn btn-secondary add-to-cart" data-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;

  return card;
}

function renderProducts(list) {
  productsGrid.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.style.color = "#9b9bb2";
    empty.style.fontSize = "0.9rem";
    empty.textContent = "No products match your filters. Try adjusting category, goal, or search.";
    productsGrid.appendChild(empty);
    return;
  }

  list.forEach((product) => {
    const card = createProductCard(product);
    productsGrid.appendChild(card);
  });

  // Attach event listeners to new Add to Cart buttons
  productsGrid.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      addToCart(id);
    });
  });
}

function applyFilters() {
  let result = [...products];

  if (currentCategory !== "all") {
    result = result.filter((p) => p.category === currentCategory);
  }

  if (currentGoal !== "all") {
    result = result.filter((p) => p.goal === currentGoal);
  }

  if (currentSearch.trim()) {
    const query = currentSearch.trim().toLowerCase();
    result = result.filter((p) =>
      p.name.toLowerCase().includes(query) ||
      p.flavor.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query)
    );
  }

  switch (currentSort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      result.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // featured – keep original order
      break;
  }

  renderProducts(result);
}

// ================================
// CART LOGIC
// ================================
function addToCart(id, qty = 1) {
  const product = findProduct(id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }

  updateCartUI();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
}

function updateCartUI() {
  if (!cart.length) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Start by adding some IronFuel power!</p>';
    cartSubtotal.textContent = "$0.00";
    cartCount.textContent = "0";
    return;
  }

  let subtotal = 0;
  let totalQty = 0;

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const product = findProduct(item.id);
    if (!product) return;

    const itemTotal = product.price * item.qty;
    subtotal += itemTotal;
    totalQty += item.qty;

    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="cart-item-thumb">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div>
        <div class="cart-item-title">${product.name}</div>
        <div class="cart-item-meta">
          ${formatPrice(product.price)} • Qty: <span class="cart-item-qty">${item.qty}</span>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-price">${formatPrice(itemTotal)}</div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      </div>
    `;

    cartItems.appendChild(el);
  });

  // Wire remove buttons
  cartItems.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      removeFromCart(id);
    });
  });

  cartSubtotal.textContent = formatPrice(subtotal);
  cartCount.textContent = String(totalQty);
}

function addBundle(bundleKey) {
  const items = bundles[bundleKey];
  if (!items) return;

  items.forEach(({ id, qty }) => addToCart(id, qty));
}

// ================================
// CART SIDEBAR UI
// ================================
function openCart() {
  cartSidebar.classList.add("open");
  cartSidebar.setAttribute("aria-hidden", "false");
  cartBackdrop.hidden = false;
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartSidebar.setAttribute("aria-hidden", "true");
  cartBackdrop.hidden = true;
}

// ================================
// EVENT BINDINGS
// ================================
function bindEvents() {
  // Category chips
  chipButtons.forEach((chip) => {
    chip.addEventListener("click", () => {
      chipButtons.forEach((c) => c.classList.remove("chip-active"));
      chip.classList.add("chip-active");
      currentCategory = chip.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });

  // Goal select
  goalSelect.addEventListener("change", () => {
    currentGoal = goalSelect.value;
    applyFilters();
  });

  // Sort select
  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    applyFilters();
  });

  // Search
  searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value;
    applyFilters();
  });

  // Cart toggles
  cartToggle.addEventListener("click", openCart);
  closeCartButton.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
    }
  });

  // Checkout demo
  checkoutButton.addEventListener("click", () => {
    if (!cart.length) {
      alert("Your cart is empty. Add something before checking out.");
    } else {
      alert(
        "Demo checkout: This is a static demo. In a real store, you would now be redirected to a secure payment page."
      );
    }
  });

  // Bundle buttons
  bundleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-bundle");
      addBundle(key);
    });
  });
}

// ================================
// INIT
// ================================
function init() {
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  renderProducts(products);
  bindEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
