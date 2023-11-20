// ваш токен бота
const botToken = '6846390534:AAFkYck87hTxBa9tiWl1nTH_T2TgUpsBqhI';

// ID чата или пользователя, куда будут отправляться сообщения
const chatId = '-1002134499339';

function sendMessage() {
    // Получаем значения из полей формы
    const name = document.querySelector('.form-name').value;
    const phone = document.querySelector('.form-phone').value;


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











// const formData = document.querySelector('.contacts__form-data');
// const errorMessage = 'Произошла ошибка';
// const errorSuccess = 'Ваше сообщение отправлено!';

// formData.addEventListener('submit', formSend);

// async function formSend(event) {
//   event.preventDefailt();


//   const token = '6846390534:AAFkYck87hTxBa9tiWl1nTH_T2TgUpsBqhI';
//   const chatId = '-1002134499339';
//   const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;

//   let message = `
//   <b>Test info:</b>
//   <b>E-mail: ${this.email.value}</b>
//   <b>User text: ${this.phone1.value}</b>`;


//   const response = await fetch(uriApi, {
//     method: "POST",
//     headers: {
//       "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//       chat_id: chatId,
//       text: message,
//       parse_mode: 'html'
//     }),
//   });

//   const result = await response.json();

//   if (result.ok){
//     showMessage(true);
//     formData.reset();
//   } else {
//     showMessage(false);
//     console.log(result);
//   }
// }

// function showMessage (isSuccess) {
//   let alert = document.querySelector('.contacts__form-alert-message');
//   let text = document.querySelector('.contacts__form-alert-message-text');
//   let closeBtn = document.querySelector('.contacts__form-alert-message-span');

//   alert.classList.remove('hidden');

//   if (isSuccess) {
//     alert.classList.add();
//     text.textContent = errorSuccess;
//   } else {
//     alert.classList.add();
//     text.textContent = errorMessage;
//   }

//   closeBtn.addEventListener('click', e => {
//     alert.classList.add('hidden');
//   })
// }






