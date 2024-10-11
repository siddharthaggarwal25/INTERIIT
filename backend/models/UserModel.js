const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  PersonalEmail: {
    type: String,
    required: true,
  },
  CollegeName: {
    type: String,
  },
  CollegeEmail: {},
  YearOfPassing: {
    type: String,
  },
  WorkExperience: {
    type: String,
  },
  GitHubURL: {
    type: String,
  },
  LinkdienURL: {
    type: String,
  },
  Skills: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
