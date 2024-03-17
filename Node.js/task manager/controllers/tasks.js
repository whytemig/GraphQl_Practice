const Task = require("../models/taskModels");
const asyncWrapper = require("../middleware/async");

//refactor the code to avoid the try catch method
const getAllTasks = asyncWrapper(async (req, res) => {
  const allTask = await Task.find({});
  res.status(201).json({ allTask });
});

const createATask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log("Error", error);
  }
};
const getTaskById = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findById({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msn: "No task found!" });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log("Error", error);
  }
};
const updateATask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const userInput = req.body;

    const task = await Task.findByIdAndUpdate(taskId, userInput, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msn: "No task found!" });
    }

    res.status(200).json({ msn: "Task Updated", task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log("Error", error);
  }
};
const deleteATask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({ msn: "no task found" });
    }
    res.status(200).json({ task, msn: "Tasked Deleted" });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log("Error", error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateATask,
  deleteATask,
  createATask,
};
