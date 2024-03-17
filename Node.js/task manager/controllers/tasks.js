const Task = require("../models/taskModels");

const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(201).json({ allTask });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log("Error", error);
  }
};

const createATask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log("Error", error);
  }
};
const getTaskById = (req, res) => {
  res.send("create a task by Id");
};
const updateATask = (req, res) => {
  res.send("update a task");
};
const deleteATask = (req, res) => {
  res.send("delete a task");
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateATask,
  deleteATask,
  createATask,
};
