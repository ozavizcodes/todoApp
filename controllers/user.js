const { validator } = require('../helpers/index');
const { createUserServices, getAllUserServices } = require("../services/user")

// createUser Controller- first using the try catch method
const createUser = async(req, res, next)=> {
    try{
        const rules = {
            firstName: 'required|string',
            lastName: 'required|string',
            email: 'required|string',
        }
        await validator(req.body, rules, {}, async(error, status) => {
            
            if(status) {
                const result = await createUserServices(req.body)
                res.status(200).send({message: "User created successfully", result})
              

            } else {
                res.status(412).send({message: "validation to create user has failed",  success: status, data: error})

            }
        })

    }catch(err) {
        res.status(400).send({message: err.message})
    }
}
//to getAllUsers
const getAllUsers = async(req, res, next) => {
    try {
        const result = await getAllUserServices()
    
        res.status(200).send({message: "All users information successfully fetched", result})
        console.log(result);
        
    } catch(err) {
        res.status(400).send({message: err.message})
    }
}



module.exports ={ createUser, getAllUsers}