const HttpError = require("../utils/Http-Error");
const Project = require("../models/ProjectModel");
const HostProject = async (req, res, next) => {
  const { NameProject, ProjectInfo, Domain, SkillsReq, Deadline, Amount } = req.body;
  const HostID = req.params.userID;

  // Create a new project instance
  const createProject = new Project({
    NameProject,
    ProjectInfo,
    Domain,
    SkillsReq,
    Deadline,
    Amount,
    HostID,
    Teams: []
  });

  console.log(createProject); // For debugging

  let createdProject;

  try {
    createdProject = await createProject.save(); // Save the project
  } catch (error) {
    console.error("Error while saving project:", error); // Log the error for debugging
    return next(new HttpError("Project not added, please check.", 500)); // Pass the error to middleware
  }

  if (!createdProject) {
    return next(new HttpError("Error occurred during project creation.", 500)); // Handle case where project is not created
  }

  // Respond with a success message
  res.status(201).json({ message: "Project created successfully!", project: createdProject });
};

const showProject = async (req, res, next) => {
  let allproject;

  try {
    allproject = await Project.find();
  } catch (error) {
    return new HttpError(" not able to fetch try again", 401);
  }

  res.status(200).json(allproject);
};
const showParticularProject = async (req, res, next) => {
  let ParticularProject;
  let projectID = req.params.projectID;
  try {
    ParticularProject = await Project.findById(projectID);
  } catch (error) {
    return new HttpError(" not able to fetch try again", 401);
  }
  if (!ParticularProject) return new HttpError(" inavlid project id ", 402);
  res.status(200).json(ParticularProject);
};
exports.HostProject = HostProject;
exports.showProject = showProject;
exports.showParticularProject = showParticularProject;
