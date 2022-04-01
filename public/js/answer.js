const trueAnswer = document.querySelector('#trueAnswer');
const falseAnswer = document.querySelector('#falseAnswer');

trueAnswer?.addEventListener('click', async (event) => {
  // event.preventDefault();

  const action = event.target.href;
  const response = await fetch(action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: true }),
  });

  const data = await response.text();
  document.querySelector('.answer-form').innerHTML = data
  console.log(data)
});

falseAnswer?.addEventListener('click', async (event) => {
  // event.preventDefault();

  const action = event.target.href;
  const response = await fetch(action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: false }),
  });

  const data = await response.text();
  document.querySelector('.answer-form').innerHTML = data
});
