const mongoose = require("mongoose");

const employeesSchema = mongoose.Schema({
  ID: Number,
  DOJ: Date,
  Gross: Number,
  Basic: Number,
  name: {
    type: String,
    required: true,
  },
  father: {
    type: String,
    required: true,
  },
  mother: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  nid: {
    type: Number,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  lastCompany: {
    type: String,
  },
  lastDepartment: {
    type: String,
  },

});


module.exports = employeesSchema;
