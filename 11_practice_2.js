// Создание объекта formData
const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

// Функция для сбора данных из формы и записи их в объект formData
function submitForm(event) {
    event.preventDefault(); // предотвращение стандартного поведения формы

    // Сбор данных из формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone1').value.trim();
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comments').value.trim();

    // Проверки
    if (!name || !email || !comment) {
        alert("Пожалуйста, заполните все обязательные поля (Имя, Email, Комментарий).");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Введите корректный e-mail.");
        return;
    }

    // Заполнение объекта formData
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    // Вывод данных в консоль
    formData.printData();

    // Закрыть модальное окно (если требуется)
    document.getElementById('modal').style.display = 'none';
}

// Добавление обработчика события на форму
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Закрытие модального окна при нажатии на "x"
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

// Открытие модального окна при нажатии на кнопку "Заказать"
document.querySelectorAll('.card-btn').forEach(button => {
    button.onclick = function() {
        const serviceName = this.previousElementSibling.innerText; // Получаем название услуги
        document.getElementById('serviceName').innerText = serviceName;
        document.getElementById('modal').style.display = 'block'; // Показываем модальное окно
    };
});
