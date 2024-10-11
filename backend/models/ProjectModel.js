const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  NameProject: {
    type: String,
    required: true,
  },
  ProjectInfo: {
    type: String,
    required: true,
  },
  Domain: {
    type: String,
    required: true,
  },
  SkilsReq: {
    type: String,
    required: true,
  },
  Amount: {
    type: String,
    required: true,
  },
  Deadline: {
    type: String,
    required: true,
  },
  Teams: [
    {
      TeamName: {
        type: String,
        required: true,
      },
      HeadID: {
        type: mongoose.Schema.Types.ObjectId,
      },
      ServingAs :{
        type : String ,
        required : true 
      },
      Proposal: {
        type: String,
        required: true,
      },
      TeamMember: [
        {
          TeamMemberID: {
            type: mongoose.Schema.Types.ObjectId,
          },
        },
      ],

    },

  ],
});

module.exports = mongoose.model("Project", ProjectSchema);
