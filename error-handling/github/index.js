const baseUrl = "https://api.github.com/users";
const imgUrl = "https://avatars3.githubusercontent.com/u10001";

const avatarElem = document.querySelector(".user__avatar");
avatarElem.src = imgUrl;

const btnElem = document.querySelector(".name-form__btn");

const onShowSpinner = () => {
  const spinnerElem = document.querySelector(".spinner");
  spinnerElem.classList.remove("spinner_hidden");
};
const onHideSpinner = () => {
  const spinnerElem = document.querySelector(".spinner");
  spinnerElem.classList.add("spinner_hidden");
};

const onError = () => {
  alert("Failed to load data");
  onHideSpinner();
};

const onShowReposData = (reposData) => {
  const htmlForRepos = reposData.reduce((acc, repo) => {
    return acc + `<li class="repo-list__item">${repo.name}<li>`;
  }, ``);

  const listElem = document.querySelector(".repo-list");
  listElem.innerHTML = htmlForRepos;
};
const onShowRepos = (reposUrl) => {
  return fetch(`${reposUrl}`)
    .then((response) => response.json())
    .then((data) => onShowReposData(data))
    .catch(onError);
};

const onShowData = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;

  avatarElem.src = avatar_url;

  const nameElem = document.querySelector(".user__name");
  nameElem.textContent = name;

  const locationElem = document.querySelector(".user__location");
  locationElem.textContent = location;

  onShowRepos(repos_url);
};

const onGetUserData = (event) => {
  const userName = document.querySelector(".name-form__input").value;
  onShowSpinner();
  return fetch(`${baseUrl}/${userName}`)
    .then((response) => response.json())
    .then((data) => onShowData(data))
    .then(onHideSpinner)
    .catch(onError);
};

btnElem.addEventListener("click", onGetUserData);
