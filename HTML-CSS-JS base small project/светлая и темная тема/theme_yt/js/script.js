const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    // Сохранение выбранной темы в локальном хранилище 
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

//Проверка и установка темы при загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme)
} else {
    body.classList.add('light'); //По умолчанию светлая тема
}