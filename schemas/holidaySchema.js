const mongoose = require("mongoose");
const holidaySchema = mongoose.Schema({
  title: String,
  start: String,
  end:String,
});
module.exports = holidaySchema;
