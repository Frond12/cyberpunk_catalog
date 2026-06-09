// Ждем ивент после загрущки всей страницы, иначе просто нечего будет добавлять в переменные
// addEventListener - метод который ждет событие
document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки фильтра и все карточки
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    //Здесь мы считаем количество карточек ВИДИМЫХ ЕПТА и в целом всех карточек
    function updateCounter() {
        // Считаем только те карточки, у которых нет класса is-hidden
        const visibleCards = document.querySelectorAll('.card:not(.is-hidden)');
        // Ищем элемент счетчика в HTML (если добавите его туда)
        const counterElement = document.querySelector('.catalog-counter');
    }

    // На всякий случай пересчет
    updateCounter();

    // forEach - функция которая позволяет делать пересчет - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Меняем цвет у той кнопки которую выбрали и накидываем ей свойство css active
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // в переменную закидываем кнопку которую пользователь выбрал
            const filterValue = button.getAttribute('data-filter');

            // Пробегаемся по всем карточкам на соотвествие
            cards.forEach(card => {
                const cardType = card.getAttribute('data-implant');

                //Еслт переменная filterValue равен всем или переменная (которую создали сверху) равно выбранной кнопке, то
                //убираем у карточки свойство css is-hidden
                //иначе добавлем css свойство is-hidden и ТА ДАМ ВИДНО КАРТОЧКИ ПО КНОПКЕ
                if (filterValue === 'all' || cardType === filterValue) {
                    card.classList.remove('is-hidden'); // Показываем карточку
                } else {
                    card.classList.add('is-hidden');    // Скрываем карточку
                }
            });

        });
    });
});