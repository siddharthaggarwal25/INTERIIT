const express = require("express");
const router = express.Router();
const  ProjectController = require ("../controllers/ProjectControllers");

router.post ("hostProject" , ProjectController.HostProject)
