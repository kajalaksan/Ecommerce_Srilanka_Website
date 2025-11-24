const products = [
    {
        id: 1,
        name: "Premium Ceylon Black Tea",
        category: "Tea",
        price: "LKR 1,500",
        image: "assets/product-tea.png"
    },
    {
        id: 2,
        name: "Organic Cinnamon Sticks",
        category: "Spices",
        price: "LKR 850",
        image: "assets/product-cinnamon.png"
    },
    {
        id: 3,
        name: "Handwoven Batik Saree",
        category: "Clothing",
        price: "LKR 12,500",
        image: "assets/product-batik.png"
    },
    {
        id: 4,
        name: "Blue Sapphire Gemstone",
        category: "Gems",
        price: "LKR 150,000",
        image: "assets/product-gem.png"
    },
    {
        id: 5,
        name: "Traditional Mask",
        category: "Crafts",
        price: "LKR 4,500",
        image: "assets/product-mask.png"
    },
    {
        id: 6,
        name: "Coconut Oil (Virgin)",
        category: "Wellness",
        price: "LKR 1,200",
        image: "assets/product-oil.png"
    }
];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartCountElement = document.querySelector('.cart-count');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

let cartCount = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    cartCount++;
    updateCartCount();
    
    // Simple feedback animation
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Added!";
    btn.style.backgroundColor = "var(--color-primary)";
    btn.style.color = "white";
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
        btn.style.color = "";
    }, 1000);
}

function updateCartCount() {
    cartCountElement.innerText = cartCount;
    // Animate badge
    cartCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

function setupEventListeners() {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
}
