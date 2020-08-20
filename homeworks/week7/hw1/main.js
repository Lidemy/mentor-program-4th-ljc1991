/* eslint-disable operator-linebreak, no-alert */
const element = document.querySelector('.enroll-form');

element.addEventListener('submit', (e) => {
  const nickname = document.querySelector('input[name=nickname]');
  const email = document.querySelector('input[name=email]');
  const phone = document.querySelector('input[name=phone]');
  const type = document.querySelector('input[name=option]:checked');
  const reason = document.querySelector('input[name=reason]');
  const others = document.querySelector('input[name=others]');

  if (nickname.value === '') {
    const input = document.querySelectorAll('.input-box')[0];
    const alert = document.createElement('div');
    alert.innerHTML = '<div style="color:red">請填入內容</div>';
    input.appendChild(alert);
    e.preventDefault();
  }

  if (email.value === '') {
    const input = document.querySelectorAll('.input-box')[1];
    const alert = document.createElement('div');
    alert.innerHTML = '<div style="color:red">請填入內容</div>';
    input.appendChild(alert);
    e.preventDefault();
  }

  if (phone.value === '') {
    const input = document.querySelectorAll('.input-box')[2];
    const alert = document.createElement('div');
    alert.innerHTML = '<div style="color:red">請填入內容</div>';
    input.appendChild(alert);
    e.preventDefault();
  }

  if (type === null) {
    const input = document.querySelectorAll('.input-box')[3];
    const alert = document.createElement('div');
    alert.innerHTML = '<div style="color:red">請選擇類型</div>';
    input.appendChild(alert);
    e.preventDefault();
  }

  if (reason.value === '') {
    const input = document.querySelectorAll('.input-box')[4];
    const alert = document.createElement('div');
    alert.innerHTML = '<div style="color:red">請填入內容</div>';
    input.appendChild(alert);
    e.preventDefault();
  }

  if (nickname.value !== '' &&
    email.value !== '' &&
    type !== null &&
    phone.value !== '' &&
    reason.value !== '') {
    alert(
      `${nickname.value}, ${email.value}, ${phone.value}, ${type.id}, ${reason.value}, ${others.value}`,
    );
  }
});
