const openCaseBtn = document.getElementById('open-case-btn');
const resultMenu = document.getElementById('result-menu');
const resultText = document.getElementById('result-text');
const sellButton = document.getElementById('sell');
const claimButton = document.getElementById('claim');
const imageElement = document.getElementById('random-image');

let selectedPrize = ''; // Приз, соответствующий выбранному изображению

let items = [
    { img: 'img/2.png', prize: 'Обычное', price: 1000 },
    { img: 'img/3.png', prize: 'Необычное', price: 2000 },
    { img: 'img/4.png', prize: 'Редкое', price: 3000 },
    { img: 'img/5.png', prize: 'Мифическое', price: 4000 },
    { img: 'img/6.png', prize: 'Легендарное', price: 5000 }
];

// Функция для выбора случайного элемента
function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// Открытие кейса
openCaseBtn.addEventListener('click', () => {
    resultMenu.classList.add('hidden'); // Скрываем меню

    // Получаем случайный предмет
    const selectedItem = getRandomItem();

    // Отображаем случайное изображение и обновляем приз
    imageElement.src = selectedItem.img;
    selectedPrize = selectedItem.prize;
    resultText.textContent = `Вы выиграли: ${selectedItem.prize} (Цена: ${selectedItem.price}₽)`;

    // Скрываем кнопку "Открыть кейс"
    openCaseBtn.style.display = 'none';

    // Показываем меню с кнопками после короткой паузы
    setTimeout(() => {
        resultMenu.classList.remove('hidden');
    }, 1000); // Показываем меню через 1 секунду после смены изображения
});

// Продажа предмета
sellButton.addEventListener('click', () => {
    const lastAction = `Вы продали ${selectedPrize}`;
    localStorage.setItem('lastAction', lastAction);
    resetToOpenCase(); // Возвращаемся к выбору кейса
});

// Забрать предмет
claimButton.addEventListener('click', () => {
    const lastAction = `Вы забрали ${selectedPrize} в инвентарь`;
    localStorage.setItem('lastAction', lastAction);
    resetToOpenCase(); // Возвращаемся к выбору кейса
});

// Функция для возврата к исходному состоянию
function resetToOpenCase() {
    resultMenu.classList.add('hidden'); // Скрываем меню
    imageElement.src = 'img/1.png'; // Возвращаем начальное изображение
    openCaseBtn.style.display = 'block'; // Снова показываем кнопку "Открыть кейс"
}

// Отображение последнего действия на странице cases.html
const lastAction = localStorage.getItem('lastAction');
if (lastAction) {
    document.getElementById('last-action').textContent = lastAction;
    localStorage.removeItem('lastAction'); // Очищаем после показа
}