const express = require("express");
const app = express();
const taskRoutes = require("./routes/routes");
const { mongoDB } = require("./db/connection");
const dotenv = require("dotenv");
const notFound = require("./middleware/notFound");

//middleware
app.use(express.static("./public"));
dotenv.config();
app.use(express.json());

const port = 3500;

mongoDB();

app.use("/api/v1/tasks", taskRoutes);
app.use("*", notFound);

app.listen(port, console.log(`Server is listening on Port ${port}`));
