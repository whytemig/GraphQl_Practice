const mongooose = require("mongoose");

const TaskSchema = new mongooose.Schema({
  task: {
    type: String,
    require: [true, "Must provide a Task"],
    trim: true,
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongooose.model("Tasks", TaskSchema);
