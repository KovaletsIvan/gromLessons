const imgElem = document.querySelector('.user__avatar');
const inputElem = document.querySelector('.name-form__input');
const btn = document.querySelector('.name-form__btn');
const spanUserName = document.querySelector('.user__name');
const spanLocation = document.querySelector('.user__location');
const spinerElem = document.querySelector('.spinner');
const repoListElem = document.querySelector('.repo-list');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

imgElem.src = defaultAvatar;
const url = 'https://api.github.com/users';

const createListElement = (arr) => {
  const creator = arr.map((elem) => {
    const liElem = document.createElement('li');
    liElem.classList.add('repo-list__item');
    liElem.textContent = elem;
    return liElem;
  });
  repoListElem.innerHTML = '';
  repoListElem.append(...creator);
};

const getUser = async () => {
  try {
    const user = inputElem.value;
    const response = await fetch(`${url}/${user}`);
    const userData = await response.json();
    const { name, location, avatar_url, repos_url } = userData;
    imgElem.src = avatar_url;
    spanUserName.textContent = name;
    spanLocation.textContent = location ? `from ${location}` : '';
    const arrOfUsersRepo = await fetch(repos_url);
    const repoList = await arrOfUsersRepo.json();
    spinerElem.classList.toggle('spinner_hidden');
    const arr = [];
    repoList.map((elem) => {
      arr.push(elem.name);
    });
    createListElement(arr);
    spinerElem.classList.toggle('spinner');
  } catch (e) {
    imgElem.src = defaultAvatar;
    repoListElem.innerHTML = '';
    alert('Failed to load data');
  }
};

btn.addEventListener('click', getUser);
