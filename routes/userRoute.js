const express = require("express");
const router =express.Router();
const controlUser = require('../controller/userController');
const Login = require('../model/userModel');
//home route
router.get('/',(req,res)=>{
    res.send("Hello, Welcome to my Project");
})
// addding contacts
router.post('/add', controlUser.addContact)

//to get all
router.get('/getAll',controlUser.findAll)

// getting one
router.get(`/getOne/:id`, controlUser.findone)


// router.post("/add",controlSubscriber.create,validator,()=>{
//     res.json({"message":"successfully uploaded"})
// })

// updating one
router.patch("/edit/:id", controlUser.updateone)
// deleting one
router.get("/delete/:id", controlUser.deleteOne)



module.exports =router;