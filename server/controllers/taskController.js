const db = require("../db");

const getTasks = (req, res) => {
    db.query("SELECT * FROM tasks", (err, data) => {
        if (err) {
            return res.status(500).json({mensaje: err.message});
        } else {
            res.send(data);
            console.log("Datos obtenidos correctamente");
        }
    })
}

const getTask = (req, res) => {
    db.query("SELECT * FROM tasks WHERE task_id = ?", [req.params.id], (err, data) => {
        if (err) {
            console.error("Hubo un error en la consulta" + err);
            return res.sendStatus(500).json({mensaje: err.message});
        }
        if (data.length === 0) return res.status(404).json({ "mensaje": "Tarea no encontrada" })
        res.send(data[0]);
    })
}

const postTasks = (req, res) => {
    db.query("INSERT INTO tasks(task_title, task_des) VALUES(?, ?)", [req.body.task_title, req.body.task_des], (err, info) => {
        if(err){
            console.error("Error del lado del Servidor" + err);
            return res.sendStatus(500).json({mensaje: err.message});
        }
        if(info.affectedRows === 0) return res.sendStatus(404).json({mensaje: "Tarea no encontrada"});
            res.sendStatus(204);
    })
}

const putTask = (req, res) => {
    try {
        const { values } = db.query("UPDATE tasks SET ? WHERE task_id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(values);
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}

const deleteTask = (req, res) => {
    db.query('DELETE FROM tasks WHERE task_id = ?', [req.params.id], (err, info) => {
        if (err) {
            console.error('Error al eliminar la tarea:', err);
            return res.status(500).json({ mensaje: err.message });
        }
        if (info.affectedRows === 0) return res.status(404).json({ mensaje: 'Tarea no encontrada' });
        res.sendStatus(204);
    });
};

module.exports = {
    getTasks,
    getTask,
    postTasks,
    putTask,
    deleteTask
}