const {createPool} = require("mysql2");

const pool = createPool({
    host: "helloMySQL",
    database: "taskDB",
    user: "root",
    password: "admin"
})

module.exports = pool