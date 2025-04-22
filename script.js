//Product data
const products = [
  {
    id: 1,
    name: "Turmeric",
    category: "spices",
    price: 40,
    image: "https://www.harishfoodzone.com/jb-content/uploads/2020/06/MTR-Turmeric-Powder-1img.jpg",
    description: "100gm",
  },
  {
    id: 2,
    name: "Everest Cumin Powder",
    category: "spices",
    price: 48,
    image: "https://th.bing.com/th/id/R.f5d1e35cf2e97f60e32fcb6686faf4b3?rik=jWmljtq9vBqcnw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0586%2f7303%2f7499%2fproducts%2fEverestCuminPowder100g.jpg%3fv%3d1660189165&ehk=UkrDVK4%2fLsdLSysTet8duHd5sg0mFxqjRRckg%2fe1F7o%3d&risl=&pid=ImgRaw&r=0",
    description: "50gm",
  },
  {
    id: 3,
    name: "Pepper Powder ",
    category: "spices",
    price: 70,
    image: "https://th.bing.com/th/id/OIP.nAHWycVhQUzxat3P4XSN2QHaK_?rs=1&pid=ImgDetMain",
    description: "50gm",
  },
  {
    id: 4,
    name: "Tide",
    category: "homeEssentials",
    price: 10,
    image: "https://down-ph.img.susercontent.com/file/ph-11134207-7qul5-liqq68j77mdi60",
    description: "50gm.",
  },
  {
    id: 5,
    name: "Lizol",
    category: "homeEssentials",
    price: 115,
    image: "https://m.media-amazon.com/images/I/51NwwaMC70L._SL1000_.jpg",
    description: "500ml",
  },
  {
    id: 6,
    name: "Harpic",
    category: "homeEssentials",
    price: 150,
    image: "https://5.imimg.com/data5/GLADMIN/Default/2020/9/SX/ON/VD/3061/harpic-power-plus-toilet-cleaner.jpg",
    description: "1L",
  },
  {
    id: 7,
    name: "Mother Dairy Full Cream Milk",
    category: "dairy",
    price: 34,
    image: "https://5.imimg.com/data5/VC/YE/KS/ANDROID-28596165/product-jpeg.jpg",
    description: "500ml",
  },
  {
    id: 8,
    name: "Milky Mist Paneer",
    category: "dairy",
    price: 128,
    image: "https://m.media-amazon.com/images/I/71SE-lneSeL._AC_SL1500_.jpg",
    description: "200gm",
  },
  {
    id: 9,
    name: "Curd",
    category: "dairy",
    price: 50,
    image: "https://m.media-amazon.com/images/I/71lnpGid2GL.jpg",
    description: "1Kg",
  },
  {
    id: 10,
    name: "Bread",
    category: "Packaged & Instant Foods",
    price: 75,
    image: "https://cdn.zeptonow.com/production/inventory/product/a406d37d-6078-4644-a3da-06ed405cbb46-1AUJXY-dsvDEOFoeKTZMfxJTmWI3XCY9o.jpeg",
    description: "700gm",
  },
  {
    id: 11,
    name: "Bun",
    category: "Packaged & Instant Foods",
    price: 25,
    image: "https://m.media-amazon.com/images/I/81pTPy8u-bL._SL1500_.jpg",
    description: "200gm",
  },
  {
    id: 12,
    name: "Britannia Rusk",
    category: "Packaged & Instant Foods",
    price: 35,
    image: "https://th.bing.com/th/id/OIP.1_82XhuvcWjN47dGNoUn4wHaHa?rs=1&pid=ImgDetMain",
    description: "128gm",
  },
  {
    id: 13,
    name: "Appy Fizz",
    category: "beverages",
    price: 60,
    image: "https://www.underconsideration.com/brandnew/archives/appy_fizz_existing.jpg",
    description: "1L",
  },
  {
    id: 14,
    name: "Frooti",
    category: "beverages",
    price: 10,
    image: "https://th.bing.com/th/id/OIP.ZZnpxfrQdTiZ1Kc7bxpQ0wHaIE?rs=1&pid=ImgDetMain",
    description: "125ml",
  },
  {
    id: 15,
    name: "Mazaa",
    category: "beverages",
    price: 40,
    image: "https://m.media-amazon.com/images/I/61+jGc7vLIL._SL1500_.jpg",
    description: "600ml",
  },
  {
    id: 16,
    name: "Lay's Spanish Tomato Tango Potato Chips",
    category: "snacks",
    price: 20,
    image: "https://www.pngmart.com/files/16/Lays-Chips-PNG-HD.png",
    description: "50gm",
  },
  {
    id: 17,
    name: "Too Yumm! Potato Chips - Indian Masala",
    category: "snacks",
    price: 20,
    image: "https://m.media-amazon.com/images/I/81IrDIt4P2L._SL1500_.jpg",
    description: "50gm",
  },
  {
    id: 18,
    name: "britannia bourbon biscuits",
    category: "snacks",
    price: 10,
    image: "https://karthika.sg/image/catalog/products/CookiesBiscuits/400009.jpg",
    description: "50gm",
  },
]

// Initialize cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || []
let budget = Number.parseFloat(localStorage.getItem("budget")) || 0

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  // Update cart count
  updateCartCount()

  // Check if we're on the home page
  if (document.getElementById("products-grid")) {
    loadProducts()
    setupEventListeners()
  }

  // Check if we're on the cart page
  if (document.getElementById("cart-items")) {
    loadCart()
    setupCartEventListeners()
  }

  // Check if we're on the contact page
  if (document.getElementById("contact-form")) {
    setupContactForm()
  }

  // Setup budget display if it exists
  if (document.getElementById("budget-display")) {
    updateBudgetDisplay()
  }

  // Setup cart budget display if it exists
  if (document.getElementById("budget-status")) {
    updateCartBudgetDisplay()
  }
})

// Load products on the home page
function loadProducts(category = "all", sortBy = "default") {
  const productsGrid = document.getElementById("products-grid")
  if (!productsGrid) return

  // Filter products by category
  let filteredProducts = products
  if (category !== "all") {
    filteredProducts = products.filter((product) => product.category === category)
  }

  // Sort products
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
      break
  }

  // Clear the products grid
  productsGrid.innerHTML = ""

  // Add products to the grid
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${capitalizeFirstLetter(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                        <span class="quantity-display" data-id="${product.id}">1</span>
                        <button class="quantity-btn increase" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `
    productsGrid.appendChild(productCard)
  })

  // Add event listeners to the new buttons
  addProductEventListeners()
}

// Setup event listeners for the home page
function setupEventListeners() {
  // Category filter
  const categoryFilter = document.getElementById("category-filter")
  if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
      const sortFilter = document.getElementById("sort-filter")
      loadProducts(this.value, sortFilter.value)
    })
  }

  // Sort filter
  const sortFilter = document.getElementById("sort-filter")
  if (sortFilter) {
    sortFilter.addEventListener("change", function () {
      const categoryFilter = document.getElementById("category-filter")
      loadProducts(categoryFilter.value, this.value)
    })
  }

  // Category cards
  const categoryCards = document.querySelectorAll(".category-card")
  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.dataset.category
      const categoryFilter = document.getElementById("category-filter")
      categoryFilter.value = category
      loadProducts(category, document.getElementById("sort-filter").value)

      // Scroll to products section
      document.querySelector(".products").scrollIntoView({ behavior: "smooth" })
    })
  })

  // Search
  const searchBtn = document.getElementById("search-btn")
  if (searchBtn) {
    searchBtn.addEventListener("click", searchProducts)
  }

  const searchInput = document.getElementById("search-input")
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchProducts()
      }
    })
  }

  // Budget
  const setBudgetBtn = document.getElementById("set-budget-btn")
  if (setBudgetBtn) {
    setBudgetBtn.addEventListener("click", setBudget)
  }

  // Close notification
  const closeNotification = document.querySelector(".close-notification")
  if (closeNotification) {
    closeNotification.addEventListener("click", () => {
      document.getElementById("notification").style.display = "none"
    })
  }
}

// Add event listeners to product cards
function addProductEventListeners() {
  // Quantity decrease buttons
  const decreaseBtns = document.querySelectorAll(".quantity-btn.decrease")
  decreaseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = this.dataset.id
      const quantityDisplay = document.querySelector(`.quantity-display[data-id="${productId}"]`)
      let quantity = Number.parseInt(quantityDisplay.textContent)
      if (quantity > 1) {
        quantity--
        quantityDisplay.textContent = quantity
      }
    })
  })

  // Quantity increase buttons
  const increaseBtns = document.querySelectorAll(".quantity-btn.increase")
  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = this.dataset.id
      const quantityDisplay = document.querySelector(`.quantity-display[data-id="${productId}"]`)
      let quantity = Number.parseInt(quantityDisplay.textContent)
      quantity++
      quantityDisplay.textContent = quantity
    })
  })

  // Add to cart buttons
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn")
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = Number.parseInt(this.dataset.id)
      const quantityDisplay = document.querySelector(`.quantity-display[data-id="${productId}"]`)
      const quantity = Number.parseInt(quantityDisplay.textContent)

      addToCart(productId, quantity)

      // Reset quantity to 1
      quantityDisplay.textContent = "1"
    })
  })
}

// Add to cart function
function addToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId)

  // Check if product is already in cart
  const existingItemIndex = cart.findIndex((item) => item.id === productId)

  if (existingItemIndex !== -1) {
    // Update quantity if product is already in cart
    cart[existingItemIndex].quantity += quantity
  } else {
    // Add new item to cart
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })
  }

  // Save cart to localStorage
  saveCart()

  // Update cart count
  updateCartCount()

  // Update budget display immediately
  updateBudgetDisplay()

  // Show notification
  showNotification(`${quantity} ${quantity === 1 ? "item" : "items"} of ${product.name} added to cart!`, "success")

  // Check budget
  checkBudget()
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Update cart count
function updateCartCount() {
  const cartCountElements = document.querySelectorAll("#cart-count")
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  cartCountElements.forEach((element) => {
    element.textContent = totalItems
  })
}

// Load cart on the cart page
function loadCart() {
  const cartItems = document.getElementById("cart-items")
  const cartEmpty = document.getElementById("cart-empty")
  const cartSummary = document.getElementById("cart-summary")
  const cartContainer = document.querySelector(".cart-container")

  if (!cartItems || !cartEmpty || !cartSummary) return

  if (cart.length === 0) {
    // Show empty cart message
    if (cartContainer) cartContainer.style.display = "none"
    cartSummary.classList.add("hidden")
    cartEmpty.classList.remove("hidden")
    return
  }

  // Show cart items and summary
  if (cartContainer) cartContainer.style.display = "grid"
  cartSummary.classList.remove("hidden")
  cartEmpty.classList.add("hidden")

  // Clear cart items
  cartItems.innerHTML = ""

  // Add cart items
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id)
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                <div class="cart-item-actions">
                    <div class="cart-quantity-control">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-display" data-id="${item.id}">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                </div>
            </div>
            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
        `
    cartItems.appendChild(cartItem)
  })

  // Update summary
  updateCartSummary()
}

// Setup event listeners for the cart page
function setupCartEventListeners() {
  // Event delegation for cart items
  const cartItems = document.getElementById("cart-items")
  if (cartItems) {
    cartItems.addEventListener("click", (e) => {
      // Decrease quantity
      if (e.target.classList.contains("decrease")) {
        const productId = Number.parseInt(e.target.dataset.id)
        updateCartItemQuantity(productId, -1)
      }

      // Increase quantity
      if (e.target.classList.contains("increase")) {
        const productId = Number.parseInt(e.target.dataset.id)
        updateCartItemQuantity(productId, 1)
      }

      // Remove item
      if (e.target.classList.contains("remove-item-btn")) {
        const productId = Number.parseInt(e.target.dataset.id)
        removeCartItem(productId)
      }
    })
  }

  // Checkout button
  const checkoutBtn = document.getElementById("checkout-btn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", checkout)
  }

  // Clear cart button
  const clearCartBtn = document.getElementById("clear-cart-btn")
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart)
  }
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
  const itemIndex = cart.findIndex((item) => item.id === productId)

  if (itemIndex === -1) return

  cart[itemIndex].quantity += change

  // Remove item if quantity is 0
  if (cart[itemIndex].quantity <= 0) {
    removeCartItem(productId)
    return
  }

  // Update quantity display
  const quantityDisplay = document.querySelector(`.quantity-display[data-id="${productId}"]`)
  if (quantityDisplay) {
    quantityDisplay.textContent = cart[itemIndex].quantity
  }

  // Update item total
  const cartItem = document.querySelector(`.cart-item-total[data-id="${productId}"]`)
  if (cartItem) {
    cartItem.textContent = `$${(cart[itemIndex].price * cart[itemIndex].quantity).toFixed(2)}`
  }

  // Save cart
  saveCart()

  // Update cart count
  updateCartCount()

  // Update budget display immediately
  updateBudgetDisplay()

  // Update summary
  updateCartSummary()

  // Check budget
  checkBudget()
}

// Remove cart item
function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== productId)

  // Save cart
  saveCart()

  // Update cart count
  updateCartCount()

  // Reload cart
  loadCart()

  // Check budget
  checkBudget()
}

// Update cart summary
function updateCartSummary() {
  const subtotalElement = document.getElementById("subtotal")
  const taxElement = document.getElementById("tax")
  const totalElement = document.getElementById("total")

  if (!subtotalElement || !taxElement || !totalElement) return

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.07
  const total = subtotal + tax

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`
  taxElement.textContent = `$${tax.toFixed(2)}`
  totalElement.textContent = `$${total.toFixed(2)}`

  // Update budget status
  updateCartBudgetDisplay()
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "warning")
    return
  }

  // Check budget
  const total = calculateTotal()
  if (budget > 0 && total > budget) {
    showNotification("Your total exceeds your budget! Please review your cart.", "warning")
    return
  }

  // Simulate checkout
  showNotification(" Thank you for shopping with us.")

  // Clear cart
  clearCart()
}

// Clear cart
function clearCart() {
  cart = []
  saveCart()
  updateCartCount()
  loadCart()
}

// Calculate total
function calculateTotal() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.07
  return subtotal + tax
}

// Search products
function searchProducts() {
  const searchInput = document.getElementById("search-input")
  if (!searchInput) return

  const query = searchInput.value.trim().toLowerCase()

  if (query === "") {
    loadProducts()
    return
  }

  const productsGrid = document.getElementById("products-grid")
  if (!productsGrid) return

  // Clear the products grid
  productsGrid.innerHTML = ""

  // Filter products by search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query),
  )

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try a different search term</p>
            </div>
        `
    return
  }

  // Add filtered products to the grid
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${capitalizeFirstLetter(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                        <span class="quantity-display" data-id="${product.id}">1</span>
                        <button class="quantity-btn increase" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `
    productsGrid.appendChild(productCard)
  })

  // Add event listeners to the new buttons
  addProductEventListeners()
}

// Set budget
function setBudget() {
  const budgetInput = document.getElementById("budget-input")
  if (!budgetInput) return

  const budgetValue = Number.parseFloat(budgetInput.value)

  if (isNaN(budgetValue) || budgetValue <= 0) {
    showNotification("Please enter a valid budget amount.", "warning")
    return
  }

  budget = budgetValue
  localStorage.setItem("budget", budget)

  // Show budget display
  const budgetDisplay = document.getElementById("budget-display")
  if (budgetDisplay) {
    budgetDisplay.classList.remove("hidden")
  }

  // Update budget display
  updateBudgetDisplay()

  // Show notification
  showNotification(`Budget set to $${budget.toFixed(2)}`, "success")

  // Check budget
  checkBudget()
}

// Update budget display
function updateBudgetDisplay() {
  const budgetAmountElement = document.getElementById("budget-amount")
  const currentSpendingElement = document.getElementById("current-spending")
  const budgetBarElement = document.getElementById("budget-bar")
  const budgetDisplay = document.getElementById("budget-display")

  if (!budgetAmountElement || !currentSpendingElement || !budgetBarElement || !budgetDisplay) return

  if (budget <= 0) {
    budgetDisplay.classList.add("hidden")
    return
  }

  budgetDisplay.classList.remove("hidden")

  // Calculate current spending
  const currentSpending = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // Update elements
  budgetAmountElement.textContent = budget.toFixed(2)
  currentSpendingElement.textContent = currentSpending.toFixed(2)

  // Update progress bar
  const percentage = (currentSpending / budget) * 100
  budgetBarElement.style.width = `${Math.min(percentage, 100)}%`

  // Change color based on percentage
  if (percentage >= 100) {
    budgetBarElement.style.backgroundColor = "var(--danger)"
  } else if (percentage >= 75) {
    budgetBarElement.style.backgroundColor = "var(--warning)"
  } else {
    budgetBarElement.style.backgroundColor = "var(--success)"
  }
}

// Update cart budget display
function updateCartBudgetDisplay() {
  const budgetStatusElement = document.getElementById("budget-status")
  const cartBudgetAmountElement = document.getElementById("cart-budget-amount")
  const cartTotalAmountElement = document.getElementById("cart-total-amount")
  const cartBudgetBarElement = document.getElementById("cart-budget-bar")

  if (!budgetStatusElement || !cartBudgetAmountElement || !cartTotalAmountElement || !cartBudgetBarElement) return

  if (budget <= 0) {
    budgetStatusElement.classList.add("hidden")
    return
  }

  budgetStatusElement.classList.remove("hidden")

  // Calculate total
  const total = calculateTotal()

  // Update elements
  cartBudgetAmountElement.textContent = budget.toFixed(2)
  cartTotalAmountElement.textContent = total.toFixed(2)

  // Update progress bar
  const percentage = (total / budget) * 100
  cartBudgetBarElement.style.width = `${Math.min(percentage, 100)}%`

  // Change color based on percentage
  if (percentage >= 100) {
    cartBudgetBarElement.style.backgroundColor = "var(--danger)"
    budgetStatusElement.classList.add("danger")
  } else if (percentage >= 75) {
    cartBudgetBarElement.style.backgroundColor = "var(--warning)"
    budgetStatusElement.classList.add("warning")
  } else {
    cartBudgetBarElement.style.backgroundColor = "var(--success)"
    budgetStatusElement.classList.remove("danger", "warning")
  }
}

// Check budget
function checkBudget() {
  if (budget <= 0) return

  const total = calculateTotal()

  if (total > budget) {
    showNotification("Warning: Your current spending exceeds your budget!", "warning")
  }
}

// Show notification
function showNotification(message, type = "default") {
  const notification = document.getElementById("notification")
  const notificationMessage = document.getElementById("notification-message")

  if (!notification || !notificationMessage) return

  // Set message
  notificationMessage.textContent = message

  // Set type
  notification.className = "notification"
  if (type) {
    notification.classList.add(type)
  }

  // Show notification
  notification.style.display = "block"

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none"
  }, 3000)
}

// Setup contact form
function setupContactForm() {
  const contactForm = document.getElementById("contact-form")
  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Validate form
    if (!name || !email || !subject || !message) {
      showNotification("Please fill in all required fields.", "warning")
      return
    }

    // Simulate form submission
    showNotification("Your message has been sent! We will get back to you soon.", "success")

    // Reset form
    contactForm.reset()
  })
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
