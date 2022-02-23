export function getTitle() {
  const titleElem = document.querySelector(".title");
  return titleElem.textContent;
}
export function getDescription() {
  const inputElem = document.querySelector(".about");
  return inputElem.innerText;
}
getTitle();
getDescription();
