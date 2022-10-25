const baseUrl = "https://635674979243cf412f8501b0.mockapi.io/api/v1/user";

const formElem = document.querySelector(".login-form");

const submitBtnElem = document.querySelector(".submit-button");

submitBtnElem.removeAttribute("disabled");

function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}
function onSubmitData() {
  const formData = Object.fromEntries(new FormData(formElem));
  console.log(formData);
  createUser(formData).then((data) => console.log(data));
}
function getUser() {
  return fetch(baseUrl)
    .then((data) => data.json())
    .then((data) => console.log(data));
}

submitBtnElem.addEventListener("click", onSubmitData);
