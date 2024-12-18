import React, { useState } from "react";
import { i18n } from "dateformat";
import { getTasksRequest } from "../api/task";
import ListTask from "../components/ListTask";
import { useEffect } from "react";
import "../styles/task_page.css";

i18n.dayNames = [
    "Dom",
    "Lun",
    "Mar",
    "Mie",
    "Jue",
    "Vie",
    "Sab",
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];
i18n.monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

function ListTasks() {

    const [tasks, setTask] = useState([]);

    useEffect(() => {
        const loadTask = async () => {
            const res = await getTasksRequest();
            setTask(res.data);
        }
        loadTask();
    })

    const renderTasks = () => {

        if(tasks.length === 0) return <h2>No Tasks Yet</h2>

        return tasks.map(task => (
            <ListTask
            task={task}
            key={task.task_id}
            />
        ))
    }

    return (
        <div className="containt__list">
            <h1 className="list__title">Tasks</h1>
            {renderTasks()}
        </div>
    )
}

export default ListTasks;