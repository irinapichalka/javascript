/*function setButton(buttonText) {
  const bodyElem = document.querySelector("body");
  bodyElem.innerHTML = "<button>" + buttonText + "</button>";
}
setButton("jjjj");
function setButton1(buttonText) {
  const bodyElem = document.querySelector("body");
  bodyElem.textContent = "<button>" + buttonText + "</button>";
}
setButton1("yuio");*/
function createButton(buttonText) {
  const buttonElem = document.createElement("button");
  buttonElem.textContent = buttonText;
  document.body.append(buttonElem);
}
createButton("My button");
