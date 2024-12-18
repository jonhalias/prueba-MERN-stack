import React from "react";
import { useNavigate } from "react-router-dom"
import dateFormat from "dateformat";
import { deleteTaskRequest, putTaskRequest } from "../api/task";
import "../styles/list_task.css";

function ListTasks({ task }) {

    const navigate = useNavigate();

    const toggleTask = async(taskDone, taskId) => {
        if(taskDone === 0){
            await putTaskRequest(taskId, {"task_done": 1});
        }else{
            await putTaskRequest(taskId, {"task_done": 0});
        }
    }


    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="tasks__containt">
            <h2 className="tasks__title">{task.task_title}</h2>
            <p className="tasks__description">{task.task_des}</p>
            <span className="tasks__check">Realizado: {task.task_done === 0 ? "❌" : "✅"}</span>
            <span className="tasks__date">Fecha de Creacion: {dateFormat(task.create_at, "dddd d 'de' mmmm 'del' yyyy 'a las' h:MM:ss TT")}</span>
            <div className="tasks__buttons">
                <button className="tasks__delete" onClick={() => deleteTask(task.task_id) }>Borrar</button>
                <button className="tasks__edit" onClick={() => navigate(`/edit/${task.task_id}`)}>Editar</button>
                <button className="tasks__edit" onClick={() => toggleTask(task.task_done, task.task_id)}>{task.task_done === 0 ? "Marcar Tarea" : "Desmarcar Tarea"}</button>
            </div>
        </div>
    )
}

export default ListTasks