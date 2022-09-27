const destination = require("../models/destinationSchema");

const createDestination = (req,res) => {
    const newdestination = new destination({
        institutions:req.body.institutions,
        facilities: req.body.facilities,
        commercialproperties: req.body.commercialproperties,
        category: req.body.category,
        location: req.body.location,
        ratings: req.body.ratings,
        address: req.body.address,
        services:req.body.services,
        prices: req.body.prices,
        contact:req.body.contact,

        
        
        
        address: req.body.address,
        contact: req.body.contact,
    })
    newdestination.save();
    res.status(200).json(newdestination)
}
//getting a destination
const getDestinations = async(req, res) => {
    const schools =await destination.find();
    res.status(200).json(destinations);
}

module.exports = {createDestination, getDestinations}