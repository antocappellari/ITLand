const {validationResult} = require('express-validator')
const Users = require('../services/Users')
const bcrypt = require('bcrypt')
const usersController = {
    aboutUs(req,res){
        res.render('aboutUs.ejs')
    },
    login(req,res){
        res.render('./users/login.ejs')
    },
    register(req,res){
        res.render('./users/register.ejs')
    },
    loginProcess(req, res){
        let body = req.body
        let userToLogin = Users.findUser('email', body.email)
        if(userToLogin){
            let passCompare = bcrypt.compareSync(body.password, userToLogin.password)
            if (passCompare) {
                delete userToLogin.password
                delete userToLogin.confirmPassword
                req.session.userToLogged = userToLogin
                if(body.remember){
                    res.cookie('userEmail', userToLogin.email ,{maxAge: 10000 * 60})
                }
                return res.redirect('/users/profile')
            }
            return res.render('./users/login.ejs',{
                errors:{
                    password:{
                        msg: "Your password is incorrect"
                    }
                }
            })
            
        }
        return res.render('./users/login.ejs',{
            errors:{
                email:{
                    msg: "This email is not registered"
                }
            }
        })
    }
    ,
    contactUs(req,res){
        res.render('./users/contactUs.ejs')
    },
    registerProcess(req,res){
        let errors = validationResult(req);
        let file = req.file.filename
        let body = req.body;
        let passBcrypt = bcrypt.hashSync(body.password, 10)
        let newUser = {
            ...body,
            password: passBcrypt,
            image: file
        }
        if(!errors.isEmpty()){
            return res.render('./users/register.ejs',{
                errors: errors.mapped(),
                oldBody: body
            })
        }
        Users.create(newUser)
        return res.redirect("/users/login")
    },
    profile(req, res){
        return res.render('./users/profile.ejs')
    },
    logout(req, res){
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
}
// exportacion de controllers
module.exports = usersController;