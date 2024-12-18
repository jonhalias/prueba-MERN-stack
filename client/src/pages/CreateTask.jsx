import { Form, Formik } from "formik";
import { createTaskRequest, putTaskRequest, getTaskRequest } from "../api/task";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/create_task.css";

function CreateTask() {

    const updateTask = async (id, newTask) => {
        try {
            await putTaskRequest(id, newTask);
        } catch (error) {
            console.log(error);
        }
    }

    const [task, setTask] = useState({
        task_title: "",
        task_des: ""
    })

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const { data } = await getTaskRequest(params.id);
                console.log(data);
                setTask(data);
            }
        }
        loadTask();
    }, [])

    return (
        <div className="tasks__container">
            <h2 className="tasks_title">{params.id ? "Actualizar Tarea" : "Agregar Tarea"}</h2>
            <Formik initialValues={task}
                onSubmit={async (values) => {
                    if (values.task_title !== "" && values.task_des !== "") {
                        if (params.id) {
                            await updateTask(params.id, values)
                            console.log(values);
                            navigate("/");
                        } else {
                            try {
                                await createTaskRequest(values);
                                console.log(values);
                                navigate("/");
                            } catch (error) {
                                console.error(error);
                            }
                        }
                    } else {
                        console.log("No has ingresado ningun dato");
                    }
                }}>
                {({ handleChange, handleSubmit }) => (
                    <Form className="tasks__form" onSubmit={handleSubmit}>
                        <label>Title: </label>
                        <input type="text" name="task_title" placeholder="Task Title" onChange={handleChange} />
                        <label>Description: </label>
                        <textarea rows="5" name="task_des" placeholder="Task Description" onChange={handleChange} ></textarea>
                        <button type="submit">{params.id ? "Actualizar" : "Agregar"}</button>
                        <button className="tasks__redirect" onClick={() => navigate("/")}>Regresar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateTask