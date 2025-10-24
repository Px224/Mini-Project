document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".content-con");
  const itemCount = document.querySelector(".item-count");
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // ✅ toggle เมนูเมื่อกด hamburger
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProducts() {
    try {
      const res = await fetch(API_URL);
      const products = await res.json();

      container.innerHTML = "";
      itemCount.textContent = `${products.length} items`;

      products.forEach(product => {
        const item = document.createElement("div");
        item.className = "content-item";
        item.innerHTML = `
          <i class="fa-solid fa-heart favorite-icon"></i>
          <img src="${product.image}" alt="${product.title}">
          <h4>${product.title}</h4>
          <p>${product.description.substring(0, 60)}...</p>
          <div class="bottom-row">
            <a href="#" class="content-btn">View Product</a>
            <span class="price">$${product.price}</span>
          </div>
        `;
        container.appendChild(item);

        // กดหัวใจแล้วเปลี่ยนสี
        const heart = item.querySelector(".favorite-icon");
        heart.addEventListener("click", () => {
          heart.classList.toggle("active");
        });
      });
    } catch (err) {
      console.error("Error fetching products:", err);
      container.innerHTML = "<p>เกิดข้อผิดพลาดในการโหลดสินค้า</p>";
    }
  }

  fetchProducts();
});
