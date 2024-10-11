const express = require("express");
const router = express.Router();
const BiddingController = require( "../controllers/BiddingControllers");


router.post ( "AddBid/:projectID" , BiddingController.AddBid);
module.exports = router