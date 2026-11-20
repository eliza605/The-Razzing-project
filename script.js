document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. ЛОГИКА МОБИЛЬНОГО МЕНЮ (БУРГЕР)
    // ==========================================
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Переключаем класс active у меню
            nav.classList.toggle('active');
            
            // Анимация бургера (опционально)
            burger.classList.toggle('active');
        });
    }

    // ==========================================
    // 2. КЛИЕНТСКАЯ ВАЛИДАЦИЯ ФОРМЫ (Пример)
    // (Пригодится на страницах регистрации и оформления заказа)
    // ==========================================
    const form = document.querySelector('.feedback-form'); // Укажите класс вашей формы

    if (form) {
        form.addEventListener('submit', (event) => {
            let isValid = true;
            
            // Находим все обязательные поля с классом .required
            const requiredInputs = form.querySelectorAll('.required');
            
            requiredInputs.forEach(input => {
                // Убираем старую ошибку
                input.classList.remove('error');
                
                // Если поле пустое
                if (input.value.trim() === '') {
                    isValid = false;
                    input.classList.add('error'); // Добавляем класс для красной рамки (пропишите в CSS)
                }
                
                // Простая проверка на email (если поле имеет type="email")
                if (input.type === 'email' && input.value.trim() !== '') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        isValid = false;
                        input.classList.add('error');
                        // Можно вывести текст ошибки рядом с полем
                        // alert('Введите корректный email');
                    }
                }
            });

            // Если есть ошибки, блокируем отправку
            if (!isValid) {
                event.preventDefault(); 
                // Здесь можно вывести красивое модальное окно вместо alert
                console.log('Форма заполнена с ошибками');
            }
        });
    }

    // ==========================================
    // 3. ДОБАВЛЕНИЕ В КОРЗИНУ (Визуальный эффект)
    // ==========================================
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.querySelector('.cart-count');

    if (addToCartButtons.length > 0 && cartCountElement) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                // В реальности здесь будет fetch-запрос к серверу для добавления в БД
                // А пока просто увеличим счетчик визуально
                let currentCount = parseInt(cartCountElement.textContent);
                cartCountElement.textContent = currentCount + 1;
                
                // Меняем текст кнопки для обратной связи
                const originalText = button.textContent;
                button.textContent = 'Добавлено!';
                button.style.backgroundColor = 'var(--color-accent)';
                button.style.color = '#fff';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.style.color = '';
                }, 1000);
            });
        });
    }
});
