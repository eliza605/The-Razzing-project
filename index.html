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

    // --- 3. ДОБАВЛЕНИЕ В КОРЗИНУ (С СОХРАНЕНИЕМ) ---
    const addButtons = document.querySelectorAll('.add-to-cart');
    
    if (addButtons.length > 0) {
        addButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Находим карточку товара, в которой находится кнопка
                const card = this.closest('.product-card');
                const title = card.querySelector('.product-title').textContent;
                // Берем цену и оставляем только цифры (убираем знак рубля)
                const priceText = card.querySelector('.product-price').textContent;
                const price = parseInt(priceText.replace(/\D/g, '')); 
                const img = card.querySelector('.product-img').src;

                // Получаем текущую корзину из памяти браузера
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                // Проверяем, есть ли уже такой товар
                const existingItem = cart.find(item => item.title === title);
                if (existingItem) {
                    existingItem.qty += 1; // Если есть, просто добавляем +1
                } else {
                    cart.push({ title: title, price: price, img: img, qty: 1 }); // Если нет, добавляем новый
                }

                // Сохраняем обратно в память
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Обновляем цифру в шапке
                updateCartCount();
                
                // Визуальный эффект на кнопке
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
