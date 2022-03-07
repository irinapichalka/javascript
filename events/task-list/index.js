const tasks = [
  { id: "1", text: "Buy milk", done: false },
  { id: "2", text: "Pick up Tom from airport", done: false },
  { id: "3", text: "Visit party", done: false },
  { id: "4", text: "Visit doctor", done: true },
  { id: "5", text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const inputElem = document.querySelector(".task-input");
const btnCreateElem = document.querySelector(".create-task-btn");

const onCreateTask = () => {
  if (!inputElem.value) return;
  const newTask = {};
  newTask.id = Math.floor(Math.random() * 1000);
  newTask.text = inputElem.value;
  newTask.done = false;
  tasks.unshift(newTask);
  listElem.innerHTML = "";
  inputElem.value = "";
  renderTasks(tasks);
};
btnCreateElem.addEventListener("click", onCreateTask);

const checkboxElems = document.querySelectorAll(".list__item-checkbox");
const onChangeCheckbox = (event) => {
  tasks.map((obj) => {
    if (obj.id === event.target.dataset.id) {
      obj.done = true;
    }
  });
  listElem.innerHTML = "";
  renderTasks(tasks);
};
[...checkboxElems].forEach((checkbox) =>
  checkbox.addEventListener("change", onChangeCheckbox)
);
