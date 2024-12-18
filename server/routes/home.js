const { Router } = require("express");
const {
    getTasks,
    getTask,
    postTasks,
    putTask,
    deleteTask
} = require("../controllers/taskController");

const router = Router();

router.get("/tasks", getTasks)

router.get("/tasks/:id", getTask)

router.post("/tasks", postTasks)

router.put("/tasks/:id", putTask)

router.delete("/tasks/:id", deleteTask)

module.exports = router