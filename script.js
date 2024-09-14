document.getElementById('open-cases').addEventListener('click', function() {
    document.getElementById('cases-container').classList.toggle('hidden');
});

const caseButtons = document.querySelectorAll('.open-case');

caseButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Логика рандомного выбора кейса
        const randomCase = Math.floor(Math.random() * caseButtons.length) + 1;
        alert(`Вам выпал кейс №${randomCase}`);
    });
});
