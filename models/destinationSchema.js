const mongoose = require("mongoose")
const { number } = require("yup")


const destinationSchema =mongoose.Schema({
     
    
     institutions: {
        type: String,
        required: true
     },
     commercialproperties: {
        type: String,
        required: true
     },
    
     facilities: {
        type: Array,
        required: true,
        
     },
     category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
     },
     ratings: {
        type: String
     },
     
     address: {
        gps: String,
        box: String,
     },
     services: {
        gps: String,
        box: String,
     },
     prices: {
        gps: String,
        box: String,
     },
     contact: {
        phone: String,
        email: String,
    },

    }, {
       timestamps:true
    }
    )

    const destination = mongoose.model("destinations", destinationSchema)
    module.exports=destination