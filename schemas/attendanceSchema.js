const mongoose = require("mongoose");
const attendanceSchema = mongoose.Schema({
  ID: Number,
  email: String,
  date: String,
  entry: String,
  leave: String,
  title: String,
  start: String,
  end:String,
});
module.exports = attendanceSchema;
