function getTitle() {
  const titleElem = document.querySelector(".title");
  return titleElem.textContent;
}
function getDescription() {
  const inputElem = document.querySelector(".about");
  return inputElem.innerText;
}
function getPlans() {
  const inputElem = document.querySelector(".plans");
  return inputElem.innerText;
}
function getGoal() {
  const inputElem = document.querySelector(".goal");
  return inputElem.outerText;
}
getTitle();
getDescription();
getPlans();
getGoal();
