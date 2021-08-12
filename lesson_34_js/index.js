const inputElem = document.querySelectorAll('.form-input');
const btnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const url = 'https://61118641c38a0900171f124c.mockapi.io/api/v1/users';

const unDisabledBtn = () => {
  if (formElem.reportValidity()) {
    btnElem.disabled = false;
    errorElem.textContent = '';
    return;
  }
  btnElem.disabled = true;
  errorElem.textContent = 'Failed to create user';
};

const setDataOnServer = (userData) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const getUserData = (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const userData = [...formData].reduce(
    (obj, [key, value]) => ({ ...obj, [key]: value }),
    {}
  );
  setDataOnServer(userData)
    .then((resp) => resp.json())
    .then((value) => alert(JSON.stringify(value)))
    .then(() => [...inputElem].map((elem) => (elem.value = '')));
};

formElem.addEventListener('input', unDisabledBtn);
formElem.addEventListener('submit', getUserData);

//   errorElem.textContent = 'Failed to create user';
