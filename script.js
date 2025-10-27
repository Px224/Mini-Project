// รอให้โหลดหน้าเว็บทั้งหมดก่อนถึงจะเริ่มทำงาน
document.addEventListener("DOMContentLoaded", () => {
  // เลือก element ต่าง ๆ ที่ต้องใช้
  const container = document.querySelector(".content-con");
  const itemCount = document.querySelector(".item-count");
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // สั่งให้เมนูแสดง/ซ่อนเมื่อกดปุ่ม hamburger
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // ที่อยู่ของ API ที่เราจะไปดึงข้อมูลสินค้า
  const API_URL = "https://fakestoreapi.com/products";

  // ฟังก์ชันหลักสำหรับดึงข้อมูลจาก API
  async function fetchProducts() {
    try {
      // ดึงข้อมูลจาก API
      const res = await fetch(API_URL);
      // แปลงข้อมูลให้เป็นรูปแบบ JSON
      const products = await res.json();

      // เคลียร์ข้อมูลเดิมก่อนแสดงใหม่
      container.innerHTML = "";
      // แสดงจำนวนสินค้าที่โหลดมาได้
      itemCount.textContent = `${products.length} items`;

      // วนลูปแสดงสินค้าทั้งหมด
      products.forEach(product => {
        const item = document.createElement("div");
        item.className = "content-item";
        // ใส่โครงสร้าง HTML ของสินค้าแต่ละชิ้น
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
        // เพิ่มสินค้าเข้าไปในหน้า
        container.appendChild(item);

        // เมื่อกดหัวใจ จะสลับสถานะ active เพื่อเปลี่ยนสี
        const heart = item.querySelector(".favorite-icon");
        heart.addEventListener("click", () => {
          heart.classList.toggle("active");
        });
      });
    } catch (err) {
      // ถ้าโหลดข้อมูลไม่สำเร็จ ให้แสดงข้อความ error
      console.error("Error fetching products:", err);
      container.innerHTML = "<p>เกิดข้อผิดพลาดในการโหลดสินค้า</p>";
    }
  }

  // เรียกใช้ฟังก์ชันดึงข้อมูลเมื่อหน้าโหลดเสร็จ
  fetchProducts();
});

// ส่วนนี้คือการแก้ไขปุ่ม “View Product” ให้พาไปหน้า 404
item.innerHTML = `
  <i class="fa-solid fa-heart favorite-icon"></i>
  <img src="${product.image}" alt="${product.title}">
  <h4>${product.title}</h4>
  <p>${product.description.substring(0, 60)}...</p>
  <div class="bottom-row">
    <a href="404.html" class="content-btn">View Product</a>
    <span class="price">$${product.price}</span>
  </div>
`;
  