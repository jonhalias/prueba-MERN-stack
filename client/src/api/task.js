import axios from "axios"

export const getTasksRequest = async() => {
    return await axios.get("http://localhost:4000/tasks");
}

export const getTaskRequest = async(id) => {
    return await axios.get(`http://localhost:4000/tasks/${id}`);
}

export const createTaskRequest = async(task) => {
    await axios.post("http://localhost:4000/tasks", task);
}

export const putTaskRequest = async(id, task) => {
    await axios.put(`http://localhost:4000/tasks/${id}`, task);
}

export const deleteTaskRequest = async(id) => {
    await axios.delete(`http://localhost:4000/tasks/${id}`);
}