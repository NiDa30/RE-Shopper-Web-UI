// Dữ liệu mẫu sản phẩm
const products = [
    {
        id: 1,
        name: "Áo sơ mi nam Premium",
        price: "1,250,000 ₫",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
        category: "Nam"
    },
    {
        id: 2,
        name: "Váy đầm dạo phố Minimalist",
        price: "1,850,000 ₫",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400",
        category: "Nữ"
    },
    {
        id: 3,
        name: "Túi xách da thật Classic",
        price: "3,400,000 ₫",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400",
        category: "Phụ kiện"
    },
    {
        id: 4,
        name: "Bộ suit doanh nhân Modern",
        price: "8,500,000 ₫",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
        category: "Nam"
    }
];

// Biến lưu trữ số lượng trong giỏ hàng
let cartCount = 0;

// Render danh sách sản phẩm
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span>${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(this)" aria-label="Thêm vào giỏ">
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Chức năng thêm vào giỏ hàng với chuyển động (animation) nhỏ
window.addToCart = function(button) {
    cartCount++;
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = cartCount;
        
        // Animation đơn giản pop out
        badge.style.transform = 'scale(1.5)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Đổi icon của nút thành dấu check trong giây lát
    const icon = button.querySelector('ion-icon');
    if (icon) {
        icon.setAttribute('name', 'checkmark-outline');
        button.style.backgroundColor = '#10b981'; // Màu xanh lá cây (Success)
        
        setTimeout(() => {
            icon.setAttribute('name', 'add-outline');
            button.style.backgroundColor = '';
        }, 1000);
    }
};

// Form Đăng ký nhận bản tin
const newsletterForm = document.getElementById('newsletterForm');
if(newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input').value;
        if(input) {
            alert(`Cảm ơn bạn đã đăng ký với email: ${input}. Chúng tôi sẽ gửi thông báo sớm nhất!`);
            newsletterForm.reset();
        }
    });
}

// Xử lý thanh điều hướng khi cuộn chuột (Navbar shrink)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if(window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.height = '64px'; 
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.height = '72px';
        }
    }
});

// Chạy code khởi tạo khi DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
