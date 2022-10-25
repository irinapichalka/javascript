const baseUrl =
  "https://crudcrud.com/api/d08f08093de84f77a569fe814782d52f/tasks";

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks));
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
};
