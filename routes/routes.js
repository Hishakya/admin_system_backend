// const express = require("express");
// const controller = require("../controller/controller");
// const verify = require("./auth-verify");

// const router = express.Router();

// router.post("/signup", controller.signup);
// router.post("/signin", controller.signin);
// router.get("/get-all", verify, controller.getAllUsers);

// module.exports = router;


const express = require("express")
const router = express.Router()
//const signuptemplatecopy = require("../controller/controller")  // signuptemplatecopy is a variable
const signuptemplatecopy = require("../model/user.model")       // importing schema 

router.post("/signup",(req,res) => {
    const  signupData = new  signuptemplatecopy({
        name:req.body.name,
        email:req.body.email,
         address:req.body.address,
        password:req.body.password,
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