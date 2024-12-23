const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const btn1 = document.getElementById("openModal1");
    const btn2 = document.getElementById("openModal2");
    const span = document.getElementsByClassName("close")[0];
    const serviceName = document.getElementById("serviceName");

    // Открываем модальное окно при нажатии на кнопку
    btn.onclick = function() {
        serviceName.textContent = "Сайт-визитка"; // Название услуги
        modal.style.display = "block";
    }

    btn1.onclick = function() {
        serviceName.textContent = "Корпоративный сайт"; // Название услуги
        modal.style.display = "block";
    }

    btn2.onclick = function() {
        serviceName.textContent = "Интернет-магазин"; // Название услуги
        modal.style.display = "block";
    }

    // Закрываем модальное окно при нажатии на "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }