document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".contacts__form-data").addEventListener("submit", (event) => {
    event.preventDefault(); // Отменяет стандартное поведение формы (отправку на сервер)

    // Ваш JavaScript-код
    const result = '<?php echo $result; ?>';
    if (result === 'success') {
        alert('Форма успешно отправлена!');
        // Дополнительный код, который вы хотите выполнить после успешной отправки формы
    } else {
        alert('Произошла ошибка при отправке формы.');
        // Дополнительный код, который вы хотите выполнить при ошибке
    }
});
})



