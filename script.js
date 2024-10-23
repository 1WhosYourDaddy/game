document.addEventListener('DOMContentLoaded', () => {
    // Инициализация данных для пулов
    const pools = {
        0.1: {fund: 0, participants: 0},
        0.5: {fund: 0, participants: 0},
        1: {fund: 0, participants: 0}
    };

    // Функция присоединения к пулу
    window.joinPool = function(amount) {
        pools[amount].fund += amount; // Добавляем вклад в призовой фонд
        pools[amount].participants += 1; // Увеличиваем количество участников

        // Обновляем данные на экране
        document.getElementById(`fund-${amount.toString().replace('.', '-')}`).textContent = `${pools[amount].fund} Toncoin`;
        document.getElementById(`participants-${amount.toString().replace('.', '-')}`).textContent = `${pools[amount].participants}`;

        // Сообщение пользователю
        document.getElementById('message').textContent = `Вы успешно присоединились к пулу ${amount} Toncoin!`;
    };
});
