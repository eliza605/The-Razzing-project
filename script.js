document.addEventListener('DOMContentLoaded', function() {

    // 1. Работа мобильного меню (бургер)
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // 2. Имитация корзины
    let cartCount = 0;
    const cartCountDisplay = document.getElementById('cart-count');
    const addButtons = document.querySelectorAll('.add-to-cart');

    if (addButtons.length > 0 && cartCountDisplay) {
        addButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                cartCount++;
                cartCountDisplay.textContent = cartCount;
                
                const originalText = button.textContent;
                button.textContent = 'Добавлено!';
                button.style.backgroundColor = '#4CAF50'; // Зеленый
                
                setTimeout(function() {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 1000);
            });
        });
    }
});
