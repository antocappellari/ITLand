const {body} = require('express-validator')
const path = require('path')

const validator = [
    body('name')
    .notEmpty().isLength({min: 3}).withMessage('This field must be completed with your name'),
    body('lastname')
    .notEmpty().isLength({min: 3}).withMessage('This field must be completed with your last name'),
    body('address').notEmpty().withMessage('This field must be completed with your address'),
    body('cellphone'),
    body('email').notEmpty().isEmail().withMessage('Please, complete it  with a valid email'),
    body('image').custom((value,{req})=>{
        let array = ['.jpg', '.png', '.jpeg']
        let file = req.file

        if(!file){
            return true
        }else{
            let extname = path.extname(file.originalname)
            if(!array.includes(extname)){
                throw new Error(`Please upload a profile picture with a valid format: ${array.join(', ')}`)
            }
        }
    }),
    body('password').custom((value,{req})=>{

        
    })

    



]