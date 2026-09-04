/* =========================================
   HEAVEN FURNITURE MART
   FULL INTERACTIVE JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [

  // LIVING ROOM

  {
    id: 2,
    name: "Arden Lounge Sofa",
    category: "Living Room",
    price: 76000,
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "Deep, comfortable seating with a timeless silhouette and premium upholstery."
  },

  {
    id: 3,
    name: "Nora Accent Chair",
    category: "Living Room",
    price: 28500,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85",
    badge: "NEW",
    description: "A refined accent chair combining sculptural form with everyday comfort."
  },

  {
    id: 4,
    name: "Oakline Coffee Table",
    category: "Living Room",
    price: 22500,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "Warm natural wood tones and clean proportions create a versatile centre table."
  },

  {
    id: 5,
    name: "Linea TV Console",
    category: "Living Room",
    price: 42500,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A minimalist entertainment console with generous hidden storage."
  },

  {
    id: 8,
    name: "Solace Lounge Chair",
    category: "Living Room",
    price: 32500,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A cosy statement chair designed for reading, relaxing and conversation."
  },


  // BEDROOM


  {
    id: 11,
    name: "Elara Wardrobe",
    category: "Bedroom",
    price: 68500,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "Generous wardrobe storage with an elegant, understated exterior."
  },



  {
    id: 14,
    name: "Livia Bedroom Bench",
    category: "Bedroom",
    price: 21500,
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A versatile upholstered bench for the foot of your bed."
  },

  {
    id: 15,
    name: "Celine Chest",
    category: "Bedroom",
    price: 38500,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "Elegant drawer storage with a warm contemporary finish."
  },

  {
    id: 16,
    name: "Marlow Vanity",
    category: "Bedroom",
    price: 42500,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A sophisticated vanity with balanced proportions and practical storage."
  },


  // DINING
  {
    id: 17,
    name: "Valencia Dining Table",
    category: "Dining",
    price: 69500,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
    badge: "SIGNATURE",
    description: "A substantial dining table designed for memorable gatherings."
  },

  {
    id: 18,
    name: "Haven Six Seat Table",
    category: "Dining",
    price: 62500,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A timeless six-seat dining table with beautifully finished wood."
  },

  {
    id: 19,
    name: "Milo Dining Chair",
    category: "Dining",
    price: 9500,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "Comfortable dining seating with an elegant upholstered back."
  },


  {
    id: 22,
    name: "Monaco Sideboard",
    category: "Dining",
    price: 53500,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=85",
    badge: "NEW",
    description: "A sophisticated sideboard with generous storage and clean lines."
  },

  {
    id: 23,
    name: "Cora Bar Cabinet",
    category: "Dining",
    price: 44500,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A beautifully proportioned cabinet for entertaining spaces."
  },

  {
    id: 24,
    name: "Elio Dining Bench",
    category: "Dining",
    price: 23500,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A practical and elegant alternative to traditional dining chairs."
  },


  // OFFICE
  {
    id: 25,
    name: "Regent Executive Desk",
    category: "Office & Study",
    price: 78500,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    badge: "SIGNATURE",
    description: "A commanding executive desk designed for focused work and refined offices."
  },

  {
    id: 26,
    name: "Atlas Workstation",
    category: "Office & Study",
    price: 56500,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A spacious workstation balancing productivity and elegant design."
  },

  {
    id: 27,
    name: "Noir Bookshelf",
    category: "Office & Study",
    price: 39500,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "An architectural bookshelf for books, objects and personal collections."
  },

  {
    id: 28,
    name: "Mason Study Desk",
    category: "Office & Study",
    price: 34500,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A compact study desk made for focused work from home."
  },

  {
    id: 29,
    name: "Crown Office Chair",
    category: "Office & Study",
    price: 28500,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=85",
    badge: "NEW",
    description: "Supportive seating with a refined executive appearance."
  },

  {
    id: 30,
    name: "Luca Filing Cabinet",
    category: "Office & Study",
    price: 19500,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "Smart office storage with a clean, contemporary finish."
  },

  {
    id: 32,
    name: "Eames Inspired Chair",
    category: "Office & Study",
    price: 24500,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=85",
    badge: "",
    description: "A timeless workspace chair with comfortable ergonomic support."
  },


  // BESPOKE
  {
    id: 33,
    name: "Custom Living Ensemble",
    category: "Bespoke",
    price: 125000,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    badge: "BESPOKE",
    description: "A fully customized living-room ensemble designed around your exact space."
  },

  {
    id: 34,
    name: "Custom Master Bed",
    category: "Bespoke",
    price: 145000,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    badge: "BESPOKE",
    description: "A made-to-measure statement bed tailored to your bedroom architecture."
  },

  {
    id: 35,
    name: "Custom Dining Set",
    category: "Bespoke",
    price: 118000,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
    badge: "BESPOKE",
    description: "Dining furniture designed around your family, room dimensions and lifestyle."
  },

  {
    id: 36,
    name: "Custom TV Wall",
    category: "Bespoke",
    price: 85000,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85",
    badge: "BESPOKE",
    description: "A complete media wall designed for your exact wall dimensions."
  },

  {
    id: 37,
    name: "Custom Walk-in Wardrobe",
    category: "Bespoke",
    price: 175000,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    badge: "BESPOKE",
    description: "Custom storage designed around your clothes, accessories and space."
  },

  {
    id: 38,
    name: "Custom Home Office",
    category: "Bespoke",
    price: 110000,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    badge: "BESPOKE",
    description: "A complete workspace designed for productivity and personality."
  },


];


/* =========================================
   STATE
========================================= */

let cart = JSON.parse(localStorage.getItem("heaven_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("heaven_wishlist")) || [];

let activeCategory = "All";
let currentProduct = null;


/* =========================================
   DOM
========================================= */

const productGrid = document.getElementById("productGrid");
const noProducts = document.getElementById("noProducts");

const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const cartDrawer = document.getElementById("cartDrawer");
const wishlistDrawer = document.getElementById("wishlistDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

const cartItems = document.getElementById("cartItems");
const wishlistItems = document.getElementById("wishlistItems");
const cartTotal = document.getElementById("cartTotal");

const productModal = document.getElementById("productModal");

const modalProductImage =
  document.getElementById("modalProductImage");

const modalProductCategory =
  document.getElementById("modalProductCategory");

const modalProductName =
  document.getElementById("modalProductName");

const modalProductPrice =
  document.getElementById("modalProductPrice");

const modalProductDescription =
  document.getElementById("modalProductDescription");

const modalWishlist =
  document.getElementById("modalWishlist");


/* =========================================
   FORMAT PRICE
========================================= */

function formatPrice(price) {
  return `৳${price.toLocaleString("en-BD")}`;
}


/* =========================================
   SAVE STATE
========================================= */

function saveState() {

  localStorage.setItem(
    "heaven_cart",
    JSON.stringify(cart)
  );

  localStorage.setItem(
    "heaven_wishlist",
    JSON.stringify(wishlist)
  );

}


/* =========================================
   UPDATE COUNTERS
========================================= */

function updateCounters() {

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistQuantity = wishlist.length;


  /* CART */

  if (cartQuantity > 0) {

    cartCount.textContent = cartQuantity;
    cartCount.classList.add("visible");

  } else {

    cartCount.textContent = "";
    cartCount.classList.remove("visible");

  }


  /* WISHLIST */

  if (wishlistQuantity > 0) {

    wishlistCount.textContent = wishlistQuantity;
    wishlistCount.classList.add("visible");

  } else {

    wishlistCount.textContent = "";
    wishlistCount.classList.remove("visible");

  }

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

  const searchInput =
    document.getElementById("searchInput");

  const searchTerm =
    searchInput?.value.trim().toLowerCase() || "";


  let filteredProducts = products.filter(product => {

    const categoryMatch =
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchMatch =
      product.name.toLowerCase().includes(searchTerm);

    return categoryMatch && searchMatch;

  });


  productGrid.innerHTML = "";


  filteredProducts.forEach(product => {

    const isWishlisted =
      wishlist.includes(product.id);

    const cartItem =
      cart.find(item => item.id === product.id);

    const isCartAdded =
      Boolean(cartItem);


    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

      <div
        class="product-image"
        data-product-id="${product.id}"
      >

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        />

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <div class="product-overlay"></div>

        <div class="product-actions">

          <button
            class="product-action ${
              isWishlisted ? "wishlisted" : ""
            }"
            data-action="wishlist"
            data-id="${product.id}"
            aria-label="Wishlist"
          >
            <i class="${
              isWishlisted
                ? "fa-solid"
                : "fa-regular"
            } fa-heart"></i>
          </button>

          <button
            class="product-action ${
              isCartAdded ? "cart-added" : ""
            }"
            data-action="cart"
            data-id="${product.id}"
            aria-label="Add to cart"
          >
            <i class="fa-solid fa-bag-shopping"></i>
          </button>

        </div>

      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3
          class="product-name"
          data-product-id="${product.id}"
        >
          ${product.name}
        </h3>

        <div class="product-bottom">

          <span class="product-price">
            ${formatPrice(product.price)}
          </span>

          <button
            class="product-buy"
            data-buy-id="${product.id}"
          >
            BUY NOW
          </button>

        </div>

      </div>
    `;

    productGrid.appendChild(card);

  });


  document.getElementById(
    "productResultCount"
  ).textContent = filteredProducts.length;


  if (filteredProducts.length === 0) {

    noProducts.style.display = "block";

  } else {

    noProducts.style.display = "none";

  }

}


/* =========================================
   CATEGORY FILTER
========================================= */

document
  .querySelectorAll(".filter-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");

      activeCategory =
        button.dataset.category;

      renderProducts();

    });

  });


/* =========================================
   PRODUCT GRID EVENTS
========================================= */

productGrid.addEventListener("click", event => {

  const wishlistButton =
    event.target.closest(
      '[data-action="wishlist"]'
    );

  const cartButton =
    event.target.closest(
      '[data-action="cart"]'
    );

  const buyButton =
    event.target.closest(
      "[data-buy-id]"
    );

  const productImage =
    event.target.closest(
      ".product-image"
    );

  const productName =
    event.target.closest(
      ".product-name"
    );


  /* WISHLIST */

  if (wishlistButton) {

    event.stopPropagation();

    toggleWishlist(
      Number(wishlistButton.dataset.id)
    );

    return;

  }


  /* CART */

  if (cartButton) {

    event.stopPropagation();

    addToCart(
      Number(cartButton.dataset.id)
    );

    return;

  }


  /* BUY NOW */

  if (buyButton) {

    event.stopPropagation();

    buyNow(
      Number(buyButton.dataset.buyId)
    );

    return;

  }


  /* PRODUCT IMAGE */

  if (productImage) {

    openProductModal(
      Number(productImage.dataset.productId)
    );

    return;

  }


  /* PRODUCT NAME */

  if (productName) {

    openProductModal(
      Number(productName.dataset.productId)
    );

  }

});


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId, showMessage = true) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;


  const existing =
    cart.find(item => item.id === productId);


  if (existing) {

    existing.quantity += 1;

    if (showMessage) {

      showToast(
        "Cart Updated",
        `${product.name} quantity increased.`
      );

    }

  } else {

    cart.push({
      id: productId,
      quantity: 1
    });

    if (showMessage) {

      showToast(
        "Added to Cart",
        `${product.name} is now in your bag.`
      );

    }

  }


  saveState();
  updateCounters();
  renderProducts();
  renderCart();

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(productId) {

  cart =
    cart.filter(item => item.id !== productId);

  saveState();

  updateCounters();
  renderProducts();
  renderCart();

}


/* =========================================
   CART QUANTITY
========================================= */

function changeQuantity(productId, change) {

  const item =
    cart.find(item => item.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;

  }

  saveState();

  updateCounters();
  renderCart();
  renderProducts();

}


/* =========================================
   RENDER CART
========================================= */

function renderCart() {

  if (cart.length === 0) {

    cartItems.innerHTML = `

      <div class="empty-drawer">

        <i class="fa-solid fa-bag-shopping"></i>

        <h4>Your bag is empty</h4>

        <p>
          Discover a piece that belongs in your space.
        </p>

      </div>

    `;

    cartTotal.textContent = "৳0";

    return;

  }


  let total = 0;


  cartItems.innerHTML = cart
    .map(item => {

      const product =
        products.find(
          product => product.id === item.id
        );

      if (!product) return "";

      const itemTotal =
        product.price * item.quantity;

      total += itemTotal;


      return `

        <div class="drawer-product">

          <img
            class="drawer-product-image"
            src="${product.image}"
            alt="${product.name}"
          />

          <div class="drawer-product-info">

            <small>
              ${product.category}
            </small>

            <strong>
              ${product.name}
            </strong>

            <span>
              ${formatPrice(product.price)}
            </span>

            <div
              style="
                display:flex;
                align-items:center;
                gap:8px;
                margin-top:10px;
              "
            >

              <button
                onclick="changeQuantity(${product.id}, -1)"
                style="
                  width:24px;
                  height:24px;
                  background:#eee8dc;
                "
              >
                −
              </button>

              <span style="margin:0;">
                ${item.quantity}
              </span>

              <button
                onclick="changeQuantity(${product.id}, 1)"
                style="
                  width:24px;
                  height:24px;
                  background:#eee8dc;
                "
              >
                +
              </button>

            </div>

          </div>

          <button
            class="drawer-remove"
            onclick="removeFromCart(${product.id})"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>

        </div>

      `;

    })
    .join("");


  cartTotal.textContent =
    formatPrice(total);

}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(productId) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;


  if (wishlist.includes(productId)) {

    wishlist =
      wishlist.filter(id => id !== productId);

    showToast(
      "Removed",
      `${product.name} removed from wishlist.`
    );

  } else {

    wishlist.push(productId);

    showToast(
      "Saved to Wishlist",
      `${product.name} saved to your favourites.`
    );

  }


  saveState();

  updateCounters();
  renderProducts();
  renderWishlist();

  updateModalWishlist();

}


/* =========================================
   RENDER WISHLIST
========================================= */

function renderWishlist() {

  if (wishlist.length === 0) {

    wishlistItems.innerHTML = `

      <div class="empty-drawer">

        <i class="fa-regular fa-heart"></i>

        <h4>No saved pieces</h4>

        <p>
          Tap the heart on a product to save it here.
        </p>

      </div>

    `;

    return;

  }


  wishlistItems.innerHTML = wishlist
    .map(id => {

      const product =
        products.find(
          product => product.id === id
        );

      if (!product) return "";

      return `

        <div class="drawer-product">

          <img
            class="drawer-product-image"
            src="${product.image}"
            alt="${product.name}"
          />

          <div class="drawer-product-info">

            <small>
              ${product.category}
            </small>

            <strong>
              ${product.name}
            </strong>

            <span>
              ${formatPrice(product.price)}
            </span>

            <button
              onclick="addToCart(${product.id})"
              style="
                margin-top:10px;
                width:max-content;
                background:#3e3026;
                color:white;
                padding:8px 10px;
                font-size:8px;
                font-weight:700;
                letter-spacing:1px;
              "
            >
              ADD TO CART
            </button>

          </div>

          <button
            class="drawer-remove"
            onclick="toggleWishlist(${product.id})"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

        </div>

      `;

    })
    .join("");

}


/* =========================================
   PRODUCT MODAL
========================================= */

function openProductModal(productId) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;

  currentProduct = product;


  modalProductImage.src =
    product.image;

  modalProductImage.alt =
    product.name;

  modalProductCategory.textContent =
    product.category;

  modalProductName.textContent =
    product.name;

  modalProductPrice.textContent =
    formatPrice(product.price);

  modalProductDescription.textContent =
    product.description;


  updateModalWishlist();


  productModal.classList.add("active");

  document.body.classList.add("no-scroll");

}


/* =========================================
   UPDATE MODAL WISHLIST
========================================= */

function updateModalWishlist() {

  if (!currentProduct) return;


  const isWishlisted =
    wishlist.includes(currentProduct.id);


  if (isWishlisted) {

    modalWishlist.classList.add("active");

    modalWishlist.innerHTML = `
      <i class="fa-solid fa-heart"></i>
      Saved to Wishlist
    `;

  } else {

    modalWishlist.classList.remove("active");

    modalWishlist.innerHTML = `
      <i class="fa-regular fa-heart"></i>
      Add to Wishlist
    `;

  }

}


/* =========================================
   MODAL CLOSE
========================================= */

document
  .getElementById("closeProductModal")
  .addEventListener("click", closeProductModal);


function closeProductModal() {

  productModal.classList.remove("active");

  document.body.classList.remove("no-scroll");

}


/* =========================================
   MODAL ADD CART
========================================= */

document
  .getElementById("modalAddCart")
  .addEventListener("click", () => {

    if (!currentProduct) return;

    addToCart(currentProduct.id);

  });


/* =========================================
   MODAL BUY NOW
========================================= */

document
  .getElementById("modalBuyNow")
  .addEventListener("click", () => {

    if (!currentProduct) return;

    buyNow(currentProduct.id);

  });


/* =========================================
   MODAL WISHLIST
========================================= */

modalWishlist.addEventListener("click", () => {

  if (!currentProduct) return;

  toggleWishlist(currentProduct.id);

});


/* =========================================
   BUY NOW
========================================= */

function buyNow(productId) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;


  addToCart(productId, false);

  closeProductModal();

  setTimeout(() => {

    openCart();

    showToast(
      "Ready to Checkout",
      `${product.name} is ready for purchase.`
    );

  }, 250);

}


/* =========================================
   DRAWERS
========================================= */

function openCart() {

  closeWishlist();

  renderCart();

  cartDrawer.classList.add("active");
  drawerOverlay.classList.add("active");

  document.body.classList.add("no-scroll");

}


function closeCart() {

  cartDrawer.classList.remove("active");

  if (!wishlistDrawer.classList.contains("active")) {

    drawerOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

  }

}


function openWishlist() {

  closeCart();

  renderWishlist();

  wishlistDrawer.classList.add("active");
  drawerOverlay.classList.add("active");

  document.body.classList.add("no-scroll");

}


function closeWishlist() {

  wishlistDrawer.classList.remove("active");

  if (!cartDrawer.classList.contains("active")) {

    drawerOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

  }

}


document
  .getElementById("cartToggle")
  .addEventListener("click", openCart);


document
  .getElementById("wishlistToggle")
  .addEventListener("click", openWishlist);


document
  .getElementById("closeCart")
  .addEventListener("click", closeCart);


document
  .getElementById("closeWishlist")
  .addEventListener("click", closeWishlist);


drawerOverlay.addEventListener(
  "click",
  () => {

    closeCart();
    closeWishlist();

  }
);


/* =========================================
   SEARCH
========================================= */

const searchToggle =
  document.getElementById("searchToggle");

const searchPanel =
  document.getElementById("searchPanel");

const searchInput =
  document.getElementById("searchInput");

const closeSearch =
  document.getElementById("closeSearch");


searchToggle.addEventListener(
  "click",
  () => {

    searchPanel.classList.toggle("active");

    if (
      searchPanel.classList.contains("active")
    ) {

      setTimeout(
        () => searchInput.focus(),
        150
      );

    }

  }
);


closeSearch.addEventListener(
  "click",
  () => {

    searchPanel.classList.remove("active");

    searchInput.value = "";

    renderProducts();

  }
);


searchInput.addEventListener(
  "input",
  () => {

    renderProducts();

  }
);


/* =========================================
   LOGIN
========================================= */

const loginModal =
  document.getElementById("loginModal");

const loginBtn =
  document.getElementById("loginBtn");


loginBtn.addEventListener(
  "click",
  () => {

    loginModal.classList.add("active");

    document.body.classList.add("no-scroll");

  }
);


document
  .getElementById("closeLoginModal")
  .addEventListener(
    "click",
    () => {

      loginModal.classList.remove("active");

      document.body.classList.remove("no-scroll");

    }
  );


/* PASSWORD */

document
  .getElementById("passwordToggle")
  .addEventListener(
    "click",
    () => {

      const password =
        document.getElementById("loginPassword");

      const icon =
        document.querySelector(
          "#passwordToggle i"
        );


      if (password.type === "password") {

        password.type = "text";

        icon.className =
          "fa-regular fa-eye-slash";

      } else {

        password.type = "password";

        icon.className =
          "fa-regular fa-eye";

      }

    }
  );


/* LOGIN SUBMIT */

document
  .getElementById("loginForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const email =
        document.getElementById("loginEmail").value;


      loginModal.classList.remove("active");

      document.body.classList.remove("no-scroll");


      showToast(
        "Welcome Back",
        `Demo login successful for ${email}.`
      );

    }
  );


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileNav =
  document.getElementById("mobileNav");


mobileMenuBtn.addEventListener(
  "click",
  () => {

    mobileNav.classList.toggle("active");

    const icon =
      mobileMenuBtn.querySelector("i");


    if (
      mobileNav.classList.contains("active")
    ) {

      icon.className =
        "fa-solid fa-xmark";

    } else {

      icon.className =
        "fa-solid fa-bars";

    }

  }
);


document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileNav.classList.remove("active");

        mobileMenuBtn
          .querySelector("i")
          .className =
          "fa-solid fa-bars";

      }
    );

  });


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;

    closeProductModal();
    closeCart();
    closeWishlist();

    loginModal.classList.remove("active");

    searchPanel.classList.remove("active");

  }
);


/* =========================================
   TOAST
========================================= */

let toastTimeout;


function showToast(title, message) {

  const toast =
    document.getElementById("toast");

  const toastTitle =
    document.getElementById("toastTitle");

  const toastMessage =
    document.getElementById("toastMessage");


  toastTitle.textContent = title;

  toastMessage.textContent = message;


  toast.classList.add("active");


  clearTimeout(toastTimeout);


  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove("active");

      },
      2800
    );

}


/* =========================================
   CHECKOUT DEMO
========================================= */

document
  .getElementById("checkoutBtn")
  .addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        showToast(
          "Your Bag Is Empty",
          "Add a furniture piece before checkout."
        );

        return;

      }


      showToast(
        "Checkout Ready",
        "This demo is ready to connect to your checkout system."
      );

    }
  );


/* =========================================
   MODAL OUTSIDE CLICK
========================================= */

productModal.addEventListener(
  "click",
  event => {

    if (
      event.target === productModal
    ) {

      closeProductModal();

    }

  }
);


loginModal.addEventListener(
  "click",
  event => {

    if (
      event.target === loginModal
    ) {

      loginModal.classList.remove("active");

      document.body.classList.remove("no-scroll");

    }

  }
);


/* =========================================
   INITIALIZE
========================================= */

renderProducts();

renderCart();

renderWishlist();

updateCounters();