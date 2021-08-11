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
    return;
  }
  btnElem.disabled = true;
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

const getUserDataFromServer = () => {
 return fetch(url).then((resp) => resp.json());
};

const getUserData = (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const userData = [...formData].reduce(
    (obj, [key, value]) => ({ ...obj, [key]: value }),
    {}
  );
  setDataOnServer(userData)
    .then(getUserDataFromServer)
    .then(() => alert(JSON.stringify(userData)));
};

//   errorElem.textContent = 'Failed to create user';

const clearInput = () => {
  [...formElem].map((elem) => (elem.value = ''));
};

[...inputElem].map((input) => input.addEventListener('input', unDisabledBtn));
btnElem.addEventListener('click', getUserData);
btnElem.addEventListener('click', clearInput);