const inputElem = document.querySelectorAll('.form-input');
const btnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const url = 'https://61118641c38a0900171f124c.mockapi.io/api/v1/users';

const unDisabledBtn = () => {
  if (
    [...inputElem]
      .map((input) => input.reportValidity())
      .filter((elem) => elem === true).length === 3
  ) {
    btnElem.disabled = false;
  }
};

const setDataOnServer = (getUserData) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(getUserData),
  });
};

const getUserData = (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const userData = [...formData].reduce(
    (obj, [key, value]) => ({ ...obj, [key]: value }),
    {}
  );

  setDataOnServer(userData).then(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => alert(JSON.stringify(result)));
  });
};

const clearInput = () => {
  [...formElem].map((elem) => (elem.value = ''));
};

// const errorText = () => (errorElem.textContent = 'Failed to create user');

[...inputElem].map((input) => input.addEventListener('change', unDisabledBtn));
// [...inputElem].map((input) => input.addEventListener('invalid', errorText));

btnElem.addEventListener('click', getUserData);
// btnElem.addEventListener('click', getUserDataFromServer);
btnElem.addEventListener('click', clearInput);
