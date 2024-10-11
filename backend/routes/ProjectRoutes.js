const express = require("express");
const router = express.Router();
const  ProjectController = require ("../controllers/ProjectControllers");

router.post ("/hostProject /:userID" , ProjectController.HostProject);
router.get ( "/showProject"  , ProjectController.showProject);
router.get ( "/showProject/:ProjectID" , ProjectController.showParticularProject)
module.exports = router