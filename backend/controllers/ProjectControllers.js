const HttpError = require("../utils/Http-Error");
const Project = require("../models/ProjectModel");

const HostProject = async (req, res, next) => {
  let NameProject = req.body.NameProject;
  let ProjectInfo = req.body.ProjectInfo;
  let Domain = req.body.Domain;
  let SkillsReq = req.body.SkillsReq;
  let Deadline = req.body.Deadline;
  let Amount = req.body.Amount;

   const  HostID = req.params.HostID
  const createProject = new Project({
    NameProject: NameProject,
    ProjectInfo: ProjectInfo,
    Domain: Domain,
    SkillsReq: SkillsReq,
    Amount: Amount,
    Deadline: Deadline,
    HostID  :HostID ,
    Teams :[]
  });
  let createdProject;
  try {
    createdProject = await createProject.save();
  } catch (error) {
    return new HttpError(" project not added , plz check ", 401);
  }

  if (!createdProject) return new HttpError(" error  occured ", 401);

  res.send("  project created");
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
