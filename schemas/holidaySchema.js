const mongoose = require("mongoose");
const holidaySchema = mongoose.Schema({
  title: String,
  startDate: String,
  endDate:String,
});
module.exports = holidaySchema;
