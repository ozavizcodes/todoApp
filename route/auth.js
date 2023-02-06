const express = require("express");
const router = express.Router();
const { createUser} = require("../controllers/user");
const User = require("../models/userSchema");

//post in user route;
router.post("/user/create", createUser);

//login user
const userLoginServices = async()=> {
    try {
        const user = await User.findOne({email:data.email })
        if(!user) {
            throw Error("Invalid Email Address")
        }
        
        return user

    }catch(err) {

    }
}

module.exports = router, userLoginServices;

//auth route- basically security route;
//register user
//loginuser
//forget password - reset -user
