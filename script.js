document.addEventListener('DOMContentLoaded', function() {

    // --- 1. РАБОТА МОБИЛЬНОГО МЕНЮ (БУРГЕР) ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // --- 2. ОБНОВЛЕНИЕ СЧЕТЧИКА ПРИ ЗАГРУЗКЕ ---
    updateCartCount();

    // --- 3. ДОБАВЛЕНИЕ В КОРЗИНУ ---
    const addButtons = document.querySelectorAll('.add-to-cart');
    if (addButtons.length > 0) {
        addButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const card = this.closest('.product-card');
                const title = card.querySelector('.product-title').textContent;
                const priceText = card.querySelector('.product-price').textContent;
                const price = parseInt(priceText.replace(/\D/g, '')); 
                const img = card.querySelector('.product-img').src;

                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItem = cart.find(item => item.title === title);
                if (existingItem) {
                    existingItem.qty += 1;
                } else {
                    cart.push({ title: title, price: price, img: img, qty: 1 });
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                
                const originalText = button.textContent;
                button.textContent = 'Добавлено!';
                button.style.backgroundColor = '#4CAF50'; 
                setTimeout(function() {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 1000);
            });
        });
    }

    // --- 4. ПРОВЕРКА АВТОРИЗАЦИИ (Меняем "Вход" на "Профиль") ---
    const currentUser = localStorage.getItem('currentUser');
    const authLink = document.getElementById('auth-link'); // Ссылка в меню

    if (authLink) {
        if (currentUser) {
            authLink.textContent = 'Личный кабинет';
            authLink.href = 'profile.html';
        } else {
            authLink.textContent = 'Вход';
            authLink.href = 'login.html';
        }
    }
});

// Функция для подсчета общего количества товаров
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountDisplay = document.getElementById('cart-count');
    if (cartCountDisplay) {
        cartCountDisplay.textContent = totalQty;
    }
}

// Функция выхода (будет вызываться на странице профиля)
function logout() {
    localStorage.removeItem('currentUser');
    alert('Вы вышли из клуба.');
    window.location.href = 'index.html';
}
