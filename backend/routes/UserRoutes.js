const express = require("express");
const router = express.Router();
const  userControllers = require ("../controllers/userControllers")

router.post( "/signup" , userControllers.signup )
router.post( "/login" , userControllers.login)
router.post ( "/:UserID/onboarding" , userControllers.onbording) // in requserid add model id of that obejct 