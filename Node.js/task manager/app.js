const express = require("express");
const app = express();
const taskRoutes = require("./routes/routes");
const { mongoDB } = require("./db/connection");
const dotenv = require("dotenv");

//middleware
dotenv.config();
app.use(express.json());

const port = 3500;

mongoDB();
app.get("/", (req, res) => {
  res.send("Task manager");
});

app.use("/api/v1/tasks", taskRoutes);

app.listen(port, console.log(`Server is listening on Port ${port}`));
