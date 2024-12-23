

// 1. Обработчик события click на заголовок H2
document.addEventListener('DOMContentLoaded', () => {
    const h2 = document.querySelector('.first_sem_content h2');
    h2.addEventListener('click', () => {
        alert('Вы кликнули на заголовок - так держать!');
    });

    // 2. Изменение информации в таблице по нажатию кнопки
    const secondSemesterTopics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
        
    ];

    const button = document.getElementById('viewSecondSemester');
    button.addEventListener('click', () => {
        const practiceTable = document.querySelectorAll('table')[1].querySelector('tbody');
        practiceTable.innerHTML = ''; // Очищаем текущую таблицу

        secondSemesterTopics.forEach((topic, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${index + 1}</td><td>${topic}</td><td><input type="checkbox"></td><td><input type="checkbox"></td>`;
            practiceTable.appendChild(row);
        });
    });

    // 3. Обработчики событий на фотографию студента
    const studentPhoto = document.querySelector('img[alt="Фотография студента"]');
    studentPhoto.addEventListener('click', () => {
        alert('Это фотография студента!');
    });

    // 4. Обработчик события для фотографии любимого преподавателя
    const favoriteTeacherPhoto = document.querySelector('img[alt="Фотография любимого преподавателя"]'); // Замените селектор на правильный
    favoriteTeacherPhoto.addEventListener('click', () => {
        alert('Это фотография любимого преподавателя!');
    });
});
