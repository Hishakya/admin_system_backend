// const express = require("express");
// const controller = require("../controller/controller");
// const verify = require("./auth-verify");

// const router = express.Router();

// router.post("/signup", controller.signup);
// router.post("/signin", controller.signin);
// router.get("/get-all", verify, controller.getAllUsers);

// module.exports = router;


const express = require("express")     //including express
const router = express.Router()
const signuptemplatecopy = require("../model/user.model")       // importing schema & signuptemplatecopy is a variable
const bcrypt =require ('bcryptjs')

router.post("/signup",async(req,res) => {               //await will not work if u dont use async

    const saltPassword = await bcrypt.genSalt(10)             //genrating salt for password
    const hashedPassword = await bcrypt.hash(req.body.password,saltPassword)  //saltpassword has been hashed 

    const  signupData = new  signuptemplatecopy({
        name:req.body.name,
        email:req.body.email,
         address:req.body.address,
        password:hashedPassword ,
    })
    signupData.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

// router.get("/signup")
module.exports = router