export function getTitle() {
  const titleElem = document.querySelector(".title");
  return titleElem.textContent;
}
export function getDescription() {
  const inputElem = document.querySelector(".about");
  return inputElem.innerText;
}
export function getPlans() {
  const inputElem = document.querySelector(".plans");
  return inputElem.innerText;
}
export function getGoal() {
  const inputElem = document.querySelector(".goal");
  return inputElem.outerText;
}
getTitle();
getDescription();
getPlans();
getGoal();
