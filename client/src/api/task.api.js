import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = async () => {
  return await taskApi.get("/");
};

export const getTaskById = async (id) => {
  return await taskApi.get(`/${id}`);
};

export const createTask = async (task) => {
  await taskApi.post("/", task);
};

export const deleteTask = async (id) => {
  await taskApi.delete(`/${id}`);
};

export const updateTask = async (id, data) => {
  await taskApi.put(`/${id}/`, data);
};
