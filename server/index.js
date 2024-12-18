const express = require("express");
const PORT = require("./config");
const { join } = require("path");
const Home = require("./routes/home");
const cors = require("cors");

const app = express();

app.use(cors({
     origin: "http://localhost:5173"
}))

app.use(express.json());

app.use(Home);
app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`Server on port ${PORT}`);