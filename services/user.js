const User = require("../models/userSchema");

const { hashPassword, decryptedPassword } = require("../helpers");

//createUser Services
const createUserServices = async(data) => {
    const hashedPassword = await hashPassword(data.password)
    console.log(hashedPassword);

//decrypted for logn 
const isVerified = await decryptedPassword(data.password, user.password)

    try {
        const user = new User({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hashedPassword
        })
    
        return user.save()

    }catch(err) {
        throw Error("User cannot be created at this time")
    }
}
//get All users Services
const getAllUserServices = async()=> {
    try {
        const users = await User.find({})
    
        return users

    } catch(err) {
        throw Error ("Error fetching all users")
    }
}


module.exports = {
    createUserServices, getAllUserServices
}