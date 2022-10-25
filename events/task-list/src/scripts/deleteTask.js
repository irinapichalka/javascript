import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";

export const onDeleteTask = (e) => {
  const taskId = e.target.dataset.id;

  const tasksList = getItem("tasksList");

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
