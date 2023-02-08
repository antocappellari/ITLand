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
    contactUs(req,res){
        res.render('./users/contactUs.ejs')
    }
}
// exportacion de controllers
module.exports = usersController;