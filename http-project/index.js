const baseUrl = "https://635674979243cf412f8501b0.mockapi.io/api/v1/user";

const formElem = document.querySelector(".login-form");
const submitBtnElem = document.querySelector(".submit-button");

const onValideForm = () => {
  if (formElem.reportValidity()) {
    submitBtnElem.removeAttribute("disabled");
  }
};

function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

function onSubmitData(e) {
  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData)
    .then((response) => response.json())
    .then((data) => alert(JSON.stringify(data)))
    .then(() => formElem.reset());
  e.preventDefault();
}

formElem.addEventListener("input", onValideForm);
submitBtnElem.addEventListener("click", onSubmitData);
