const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

const clearEventsList = () => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML = "";
  //eventsListElem.parentNode.removeChild(eventsListElem);
};

const btnClear = document.querySelector(".clear-btn");
btnClear.addEventListener("click", clearEventsList);

const btnAttach = document.querySelector(".attach-handlers-btn");
btnAttach.addEventListener("click", () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
});

const btnRemove = document.querySelector(".remove-handlers-btn");
btnRemove.addEventListener("click", () => {
  divElem.removeEventListener("click", logGreyDiv);
  divElem.removeEventListener("click", logGreenDiv);

  pElem.removeEventListener("click", logGreyP);
  pElem.removeEventListener("click", logGreenP);

  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
});

document.addEventListener("DOMContentLoaded", () => {
  //btnAttach.onClick();
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
});
