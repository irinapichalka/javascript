import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./tasksGateway.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;

  const tasksList = getItem("tasksList");
  const { text, createDate, done } = tasksList.find(
    (task) => task.id === taskId
  );

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1. Prepare Data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
