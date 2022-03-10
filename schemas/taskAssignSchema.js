const mongoose = require("mongoose");
const taskAssignSchema = mongoose.Schema({
  ID: String,
  name: String,
  email: String,
  task: [String],
  date: String,
  startTime:String,
  endTime:String,
});
module.exports = taskAssignSchema;
