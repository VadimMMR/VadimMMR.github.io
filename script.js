const caseRow = document.getElementById('case-row');
const tryAgainButton = document.getElementById('try-again');
const caseWidth = 150; // Ширина одного кейса

// Функция для рандомного выбора кейса и прокрутки
function spinCases() {
    // Количество кейсов
    const totalCases = document.querySelectorAll('.case-item').length;

    // Рандомно выбираем индекс выпадающего кейса
    const randomIndex = Math.floor(Math.random() * totalCases);

    // Прокручиваем ряды влево до выбранного кейса
    const offset = randomIndex * caseWidth;

    // Анимация прокрутки
    caseRow.style.transform = `translateX(-${offset}px)`;

    // Выводим результат через 3 секунды (после окончания анимации)
    setTimeout(() => {
        alert(`Вам выпал кейс номер ${randomIndex + 1}`);
    }, 3000);
}

// Запускаем прокрутку при нажатии на кнопку "Попробовать снова"
tryAgainButton.addEventListener('click', spinCases);
