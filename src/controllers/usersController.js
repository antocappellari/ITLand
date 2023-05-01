const {validationResult} = require('express-validator')
const userServices = require('../services/userServices')
const bcrypt = require('bcrypt')
let db = require("../database/models")
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
    loginProcess:async (req, res)=>{
        const body = req.body
        const userToLogin = await userServices.getUserByEmail(body.email);
        if(userToLogin){
            let passCompare = bcrypt.compareSync(body.password, userToLogin.password)
            if (passCompare) {
                delete userToLogin.password
                delete userToLogin.confirmPassword
                req.session.userToLogged = userToLogin
                if(body.remember){
                    console.log('hola')
                    res.cookie('user', userToLogin ,{maxAge: 10000 * 600});
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
    registerProcess: async (req,res) =>{
        try {
            const body = req.body;
            let errors = validationResult(req);
            const userToLogin = await userServices.getUserByEmail(body.email);
            if (userToLogin) {
                return res.render('./users/register.ejs',{
                    errors: errors.mapped(),
                    errorEmail:{
                       email:{
                        msg:'The email is already registered'}
                    },
                    oldBody: body
                })
            }
            if(!errors.isEmpty()){
                return res.render('./users/register.ejs',{
                    errors: errors.mapped(),
                    oldBody: body
                })
            }
            let passBcrypt = bcrypt.hashSync(body.password,10)
            const data = {
                first_name: body.first_name,
                last_name: body.last_name,
                address: body.address,
                cell: body.cell? body.cell : null,
                email: body.email,
                password: passBcrypt,
                image: req.file ? req.file.filename : 'usuarioDefault.png'
            };
            await userServices.userCreate(data);
            return res.redirect("/users/login")
        } catch (error) {
            console.log(error);
        }
    },
    editProfile:async(req, res)=>{
        return res.render('./users/update.ejs');
    },
    updateProcess:async(req, res)=>{
        try {
            const {id} = req.params
            const body = req.body;
            const data = {
                first_name: body.first_name,
                last_name: body.last_name,
                address: body.address,
                cell: body.cell? body.cell: null,
                image: req.file ? req.file.filename : 'usuarioDefault.png'
            };
            console.log(data);
            await userServices.userUpdate(id,data);
            return res.redirect("/users/profile")

        } catch (error) {
            console.log(error)
        }
    },
    profile(req, res){
        return res.render('./users/profile.ejs')
    },
    logout(req, res){
        res.clearCookie('user')
        req.session.destroy()
        return res.redirect('/')
    },
    deleteProcess:async(req, res)=>{
        try {
            res.clearCookie('user')
            req.session.destroy()
            const {id} = req.params;
            const user = await userServices.userDelete(id)
            return  res.redirect('/users/register')
        } catch (error) {
            console.log(error)
        }
    }
}
// exportacion de controllers
module.exports = usersController;