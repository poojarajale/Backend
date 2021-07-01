// const {validationResult} = require('express-validator')

const Contact = require('../model/contacts')

exports.addContact = async (req, res) => {
    try {
     
        const contactData = new Contact({
            person_name: req.body.person_name,
            company_name: req.body.company_name,
            designation: req.body.designation,
            contact_details: req.body.contact_details
            

        })
        console.log("added contact of", contactData.person_name);
        const newContact = await contactData.save()
        res.status(201).json(newContact)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        const contactData = await Contact.find()
        res.json(contactData)
    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
}
exports.findone = async (req, res) => {
    try {
        const contactOne = await Contact.findById(req.params.id)
        console.log("contactData",contactOne);
        res.json(contactOne)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
exports.deleteOne = async (req, res) => {
    try {
        const removeOneContact = await Contact.findByIdAndDelete({
            _id: req.params.id
        });
        console.log("User Deleted");
        res.json(removeOneContact);
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}
exports.updateone = async (req, res) => {
    try {
        const updateone = await Contact.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        console.log("User Updated");
        res.json(updateone);
    } catch (err) {
        res.json({
            message: err.message
        });
    }
}

