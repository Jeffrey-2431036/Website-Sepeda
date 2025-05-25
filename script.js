const products = [
    {
      name: "Sepeda Gunung X-Trail",
      price: 3500000,
      image: "https://sepeda.me/wp-content/uploads/2020/02/Sepeda-Gunung-Pacific-X-TRACK-27.5%E2%80%B3.jpg"
    },
    {
      name: "Sepeda TREX MTB 27,5 XT 780",
      price: 5000000,
      image: "https://trexsporting.com/images/products/87-17-bDwq5XV.jpg"
    },
    {
      name: "MTB Vulcan 20",
      price: 1650000,
      image: "https://www.wimcycle.com/wp-content/uploads/2024/02/MY24-VULCAN-BLACK-P.jpg"
    }
  ];
  
  const productList = document.getElementById("product-list");
  const cartItems = [];
  const cartCount = document.getElementById("cart-count");
  const cartPopup = document.getElementById("cart-popup");
  const cartUl = document.getElementById("cart-items");
  
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Rp${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${index})">Tambah ke Keranjang</button>
    `;
    productList.appendChild(card);
  });
  
  function addToCart(index) {
    cartItems.push(products[index]);
    cartCount.textContent = cartItems.length;
  }
  
  document.getElementById("cart-btn").addEventListener("click", () => {
    cartUl.innerHTML = "";
    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
      cartUl.appendChild(li);
    });
    cartPopup.classList.remove("hidden");
  });
  
  function closeCart() {
    cartPopup.classList.add("hidden");
  }
  
  function filterCategory(category) {
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    if (category === 'Semua' || productCategory === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
