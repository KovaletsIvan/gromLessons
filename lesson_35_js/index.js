const imgElem = document.querySelector('.user__avatar');
const inputElem = document.querySelector('.name-form__input');
const btn = document.querySelector('.name-form__btn');
const spanUserName = document.querySelector('.user__name');
const spanLocation = document.querySelector('.user__location');
const spinerElem = document.querySelector('.spinner');

imgElem.src = 'https://avatars3.githubusercontent.com/u10001';
const url = 'https://api.github.com/users';

const createListElement = (arr) => {
  const repoListElem = document.querySelector('.repo-list');
  const creator = arr.map((elem) => {
    const liElem = document.createElement('li');
    liElem.classList.add('repo-list__item');
    liElem.textContent = elem;
    return liElem;
  });
  repoListElem.append(...creator);
};

const getUser = () => {
  const user = inputElem.value;
  return fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((result) => {
      imgElem.src = result.avatar_url;
      spanUserName.textContent = result.name;
      spanLocation.textContent = result.location;
      const userReposetory = result.repos_url;
      return userReposetory;
    })
    .then((val) => fetch(val))
    .then((resp) => resp.json())
    .then((result) => {
      const arr = [];
      result.map((elem) => {
        arr.push(elem.name);
      });
      spinerElem.classList.toggle('spinner_hidden');
      return arr;
    })
    .then((arr) => createListElement(arr))
    .then(() => spinerElem.classList.toggle('spinner'))
    .catch(() => alert('Failed to load data'));
};

btn.addEventListener('click', getUser);
