const express = require("express")
const router =express.Router()
const controlContacts = require('../controller/controller')
const Login = require('../model/contacts')
//home route
router.get('/',(req,res)=>{
    res.send("Hello, Welcome to my Project");
})
// addding contacts
router.post('/add', controlContacts.addContact)

//to get all
router.get('/getAll',controlContacts.findAll)

// getting one
router.get(`/getOne/:id`, controlContacts.findone)


// router.post("/add",controlSubscriber.create,validator,()=>{
//     res.json({"message":"successfully uploaded"})
// })

// updating one
router.patch("/edit/:id", controlContacts.updateone)
// deleting one
router.get("/delete/:id", controlContacts.deleteOne)



module.exports =router