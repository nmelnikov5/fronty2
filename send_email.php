<?php
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    // Отладочный вывод
    error_log(print_r($_POST, true));

    $to = "baskaev.danyya@gmail.com"; 
    $subject = "Новое сообщение с сайта";

    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $comments = htmlspecialchars($_POST['comments']);

    // Форматирование письма
    $message = "Имя: $name\n";
    $message .= "Электронная почта: $email\n";
    $message .= "Телефон: $phone\n";
    $message .= "Комментарии: $comments\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено!";
    } else {
        echo "Ошибка при отправке письма.";
    }
} else {
    echo "Спасибо за отправку";
}
?>
