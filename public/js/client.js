// PSEUDO-код:
// 1 - перехватить событие отправки формы
// 2 - предотвратить действие по умолчанию для этого события
// 3 - отправить AJAX-сообщение на сервер
// 4 - когда сообщение AJAX готово, отображаем новый бросок кубика

const container = document.getElementById("event");
const btn = document.getElementById("btn");

container.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { userName, email, password } = event.target;
  const response = await fetch("/registration", {
    method: "POST",
    body: JSON.stringify({
      userName: userName.value,
      email: email.value,
      password: password.value,
    }),
    headers: {
      "Content-Type": "application/json",
      accept: "json",
    },
  });
});

//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//

// container.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const { action, sides } = event.target;
//   const response = await fetch(action, {
//     method: "POST",
//     body: JSON.stringify({
//       sides: sides.value,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       accept: "json",
//     },
//   });
//   const data = await response.text();
//   die.innerHTML = data;
// });
