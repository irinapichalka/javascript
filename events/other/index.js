/*1111111111111111111111111111111111111111111111111111111111111111111111111111111111111
const btnElem = document.querySelector(".single-use-btn");
let isClicked = false;
const eventBtn = () => {
  if (!isClicked) {
    console.log("clicked");
    isClicked = true;
  }
};
btnElem.addEventListener("click", eventBtn);
/**btnElem.removeEventListener("click", eventBtn);*/
//btnElem.onclick = eventBtn;*/

/*2222222222222222222222222222222222222222222222222222222222222222222222222222

const btnElems = document.querySelectorAll('.btn');
const handleClick = (event) =>{
  console.log(event.target.textContent)
}
btnElems[0].addEventListener('click', handleClick);
btnElems[1].addEventListener('click', handleClick);
*/
/*333333333333333333333333333333333333333333333333333333333333333333333333333
const inputElem = document.querySelector('.text-input');
const handleClick = (event) =>{
  console.log(event.target.value)
}
inputElem.addEventListener('change', handleClick);
*/
/*44444444444444444444444444444444444444444444444444444444444444444444444444444444*/
/*const checkboxElem = document.querySelector('.task-status');
const handleClick = (event) =>{
  console.log(event.target.checked)
}
checkboxElem.addEventListener('change', handleClick);*/
const btnElems = document.querySelectorAll('.pagination__page');
const handleClick = (event) =>{
  console.log(event.target.dataset.pageNumber)
}
[...btnElems].forEach((el) => {
  el.addEventListener('click', handleClick);
})
