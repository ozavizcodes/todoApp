let Validator = require("validatorjs");
const bcrypt = require("bcrypt")

const validator = async(body, rules, customMessage, callBack)=> {
    const validation = new Validator(body, rules, customMessage)

    validation.passes(()=> callBack(null, true))
    validation.fails(()=> callBack(validation.errors.false))
}
//password encryption logic
const hashPassword = async(realPassword)=> {
    const salt = await bcrypt.genSalt(10)
     const encryptedPassword = await bcrypt.hash(realPassword, salt);

     return encryptedPassword
}
//password decryption logic
const decryptedPassword = async(userPassword, dbPassword)=> {
    return await bcrypt.compare(userPassword, dbPassword)
}

module.exports = { validator, hashPassword, decryptedPassword }