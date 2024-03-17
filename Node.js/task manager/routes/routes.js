const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskById,
  updateATask,
  deleteATask,
  createATask,
} = require("../controllers/tasks");

//get all tasks(plural)
router.get("/", getAllTasks);

//post task
router.post("/", createATask);
//get task by Id
router.get("/:id", getTaskById);

//patch task by Id
router.patch("/:id", updateATask);

//delete task by Id
router.delete("/:id", deleteATask);

module.exports = router;
