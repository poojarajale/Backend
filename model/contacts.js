const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    person_name: {
        type: String,
        
    },
       
    company_name: {
        type: String,
        
    },
    designation: 
    {   type: String, 
        
    },
    contact_details: [{
        flag: {
            type: Array,

        },
        type:{type:String},
        phone_no: {
            type: Number
        },
        email_id: {
            type: String
        }

    }]

})

module.exports = mongoose.model('contact', contactSchema)