// ваш токен бота
const botToken = '6860982026:AAFg_6Ahr9o6R7zy-Hpp-qVirCWM6DFB_r8';

// ID чата или пользователя, куда будут отправляться сообщения
const chatId = '119983502';

function sendMessage() {
    // Получаем значения из полей формы
    const name = document.querySelector('.form-name').value;
    const phone = document.querySelector('.form-phone').value;


    console.log(name)

    // Составляем текст сообщения
    const messageText = `Имя: ${name}\nТелефон: ${phone}`;

    // Формируем объект с данными для отправки
    const data = {
        chat_id: chatId,
        text: messageText
    };

    // Формируем настройки запроса
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // Формируем URL для отправки сообщения через Telegram Bot API
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Используем fetch для отправки запроса
    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Ответ от Telegram API:', data);
            // Добавьте обработку ответа, если необходимо
        })
        .catch(error => console.error('Ошибка при отправке запроса:', error));
}




