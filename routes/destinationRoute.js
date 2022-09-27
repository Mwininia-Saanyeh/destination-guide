
const { Router } = require("express");
const destination = require("../models/destinationSchema");

const {createDestination, getDestinations}=require('../controllers/destinationControllers')

const router = Router();

router.post("/adddestination", createDestination)

router.get("/Destinations", getDestinations)

module.exports= router