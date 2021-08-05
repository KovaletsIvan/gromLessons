const imgElem = document.querySelector('.user__avatar');
const spanUserName = document.querySelector('.user__name');
const spanUserLocation = document.querySelector('.user__location');
const inputElem = document.querySelector('.name-form__input');
const btnElem = document.querySelector('.name-form__btn');

const renderUserData = (arg) => {
  const { avatar_url, name, location } = arg;
  imgElem.src = avatar_url;
  spanUserName.textContent = name;
  spanUserLocation.textContent = location ? `from ${location}` : '';
};

const request = () => {
  const userName = inputElem.value;
  fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json().then((result) => renderUserData(result))
  );
};

btnElem.addEventListener('click', request);
