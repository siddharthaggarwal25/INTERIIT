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
  DOB: {
    type: String,
  },

  CollegeName: {
    type: String,
  },
  YearOfPassing: {
    type: String,
  },
  WorkExperience: [
    {
      type: String,
    },
  ],
  GitHubURL: {
    type: String,
  },
  LinkedinURL: {
    type: String,
  },
  Skills: [
    {
      type: String,
    },
  ]
},
{
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);
