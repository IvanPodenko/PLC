document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".contacts__form-data").forEach(form => {
    form.addEventListener("submit", (event) => {
      function disabledForm(submitButton = form.querySelector("button[type=\"submit\"]")) {
        form.classList.add("disabled");
        submitButton.disabled = true;
      }
      function enabledForm(submitButton = form.querySelector("button[type=\"submit\"]")) {
        form.classList.remove("disabled");
        submitButton.disabled = false;
      }
      event.preventDefault();
      disabledForm();

      const formData = new FormData(form),
        xhr = new XMLHttpRequest(),
        action = form.getAttribute("action"),
        method = form.getAttribute("method");

      xhr.open(method, action);
      xhr.send(formData);
      xhr.onloadend = function () {
        if (xhr.status === 200) {
          const json = JSON.stringify(xhr.responseText);
          if (json["status"] != "error") {
            form.reset();
            alert("Отправлено");
          } else {
            console.error("Ошибка: " + this.status);
            alert("Ошибка: " + this.status);
          }
          enabledForm();
        } else {
          console.error("Ошибка: " + this.status);
          alert("Ошибка: " + this.status);
          enabledForm();
        }
      }
    });
  });
})



