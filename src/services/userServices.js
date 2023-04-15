
const Users  =  require('../database/models').Users
const userServices = {
    getUserByEmail: async(email)=>{
        try {
            const userFound = await Users.findOne({
                where:{
                    email: email
                }
            });
            return userFound;
        } catch (error) {
            return {
                error:{
                    msg: 'Usuario no encontrado',
                }
            }
        };
    },
    userCreate: async(data)=>{
        try{
            console.log(data)
            const user = await Users.create(data);
            return user
        }catch(error){
            console.log(error);
        }
    },
    userUpdate:async(id,data)=>{
        try {
            console.log(data);
            const userUpdated = await Users.update(data,{
                where:{
                    id:id
                }
            });
            console.log(userUpdated);
            return userUpdated
        } catch (error) {
            console.log(error);
        }
    }

};

module.exports = userServices