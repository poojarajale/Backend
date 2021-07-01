// const {validationResult} = require('express-validator')

const userProfile = require('../model/userModel')

exports.adduserProfile = async (req, res) => {
    try {
   
        const userProfileData = new userProfile({
            person_name: req.body.person_name,
            company_name: req.body.company_name,
            designation: req.body.designation,
            userProfile_details: req.body.userProfile_details
            

        })
        console.log("added userProfile of", userProfileData.person_name);
        const newuserProfile = await userProfileData.save()
        res.status(201).json(newuserProfile)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        const userProfileData = await userProfile.find()
        res.json(userProfileData)
    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
}
exports.findone = async (req, res) => {
    try {
        const userProfileOne = await userProfile.findById(req.params.id)
        console.log("userProfileData",userProfileOne);
        res.json(userProfileOne)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
exports.deleteOne = async (req, res) => {
    try {
        const removeOneuserProfile = await userProfile.findByIdAndDelete({
            _id: req.params.id
        });
        console.log("User Deleted");
        res.json(removeOneuserProfile);
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}
exports.updateone = async (req, res) => {
    try {
        const updateone = await userProfile.updateOne({
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

