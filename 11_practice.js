// Изменение заголовка H1
document.querySelector('h1').textContent = "Добро пожаловать на наш сайт!";

// Изменение цвета текста заголовка H2 на красный
const h2Elements = document.querySelectorAll('h2');
h2Elements.forEach(h2 => {
    h2.style.color = 'red';
});

// Изменение текста первого параграфа
const firstParagraph = document.querySelector('.about_me p');
firstParagraph.textContent = "Это новый текст параграфа.";

// Скрытие встроенного видео
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.style.display = 'none';
});


$(document).ready(function() {
    const studentImage = $('.image');

    // Обработчик события mouseover
    studentImage.mouseover(function() {
        $(this).css({
            width: '30%',  // Увеличение ширины на 10%
            height: '20%'  // Увеличение высоты на 10%
        });
    });

    // Обработчик события mouseout для возврата к исходному размеру
    studentImage.mouseout(function() {
        $(this).css({
            width: '',  // Возврат к исходной ширине
            height: ''  // Возврат к исходной высоте
        });
    });

    // Обработчик события click
    studentImage.click(function() {
        $(this).attr('src', 'https://kidsgarden.sboxdemo.ru/images/specialists/team-1.jpg'); // Замените на URL любимого преподавателя
    });

    // Обработчик события dblclick
    studentImage.dblclick(function() {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });
});
