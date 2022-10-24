const getMostActiveDevs = (userData) => {
  const { days, userId, repoId } = userData;
};

const fetchUsersData = () => {
  return fetch(`https://api.github.com/users`).then((response) =>
    response.json()
  );
};

const fetchRepos = (userName) => {
  return fetch(`https://api.github.com/repos/${userName}`).then((response) =>
    response.json()
  );
};

const fetchReposData = (userName, repoName) => {
  return fetch(
    `https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits`
  ).then((response) => response.json());
};

/*const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};*/
fetchUsersData().then((users) => {
  return users.map((user) => {
    const { login } = user;
    console.log(login);
  });
});
