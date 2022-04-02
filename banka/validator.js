const {check} = require('express-validator')

//enter the path to data
const information = require('./banka/data')
module.exports ={
    validateEmail:check('firstName').notEmpty().check('lastName').notEmpty().check('password').notEmpty().check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Invalid message')
    .custom(async(email)=>{
        await information.getOneBy({email})
        if (existingUser){
            throw new Error ('Email already in use')
        }
    })
} 
    
    
    