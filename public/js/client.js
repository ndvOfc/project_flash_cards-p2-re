/* eslint-disable no-alert */
/* eslint-disable consistent-return */
const answerForm = document.forms.answer;
// console.log(answer);
const see = document.querySelector('.otvet');
// console.log(see);

answerForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { action, method } = event.target;
  console.log(action);
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // console.log(response);
  const answer = await response.json();
  console.log(answer);
  if (response.ok) {
    see.innerHTML = answer;
    event.target.reset();
  }

  // console.log(answer);
});

// LOGIN
const loginForm = document.querySelector('.form-signin');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const { email, password } = event.target;
    console.log(email.value, password.value);
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'json',
      },
    });
    const data = await response.text();
  } catch (error) {
    console.log(error);
  }
});

// REGISTARTION

const regForm = document.querySelector('.form-signup');

regForm?.addEventListener('submit', async (event) => {
  console.log(regForm);
  event.preventDefault();

  const {
    action, method, username, email, password,
  } = event.target;
  console.log(username.value, email.value, password.value);
  try {
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),

    });

    if (response.status === 200) {
      alert('<p>Регистация прошла успешно</p>');
    } if (response.status === 404) {
      alert('<p>Пользователь с указанным email зарегистрирован</p>');
    }
  } catch (err) {
    return window.location.assign('/error');
  }
});
