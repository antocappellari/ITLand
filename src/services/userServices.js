
const Users  =  require('../database/models').Users
const userServices = {
    getAllUsers: async () => {
        try {
          const users = await Users.findAll({
            include:[{
              association:'users_rol'
            }]
          });
          return users;
        } catch (error) {
          console.log(error);
        }
      },
    getUserByEmail: async(email)=>{
        try {
            const userFound = await Users.findOne({
                where:{
                    email: email
                },
                include:[{association:"users_rol"}]
            },
           );
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
            const userUpdated = await Users.update(data,{
                where:{
                    id:id
                }
            });
            return userUpdated
        } catch (error) {
            console.log(error);
        }
    },
    userDelete:async (id)=>{
        try {
            const user = await Users.destroy({
                where:{
                    id:id
                }
            })
            return user
        } catch (error) {
            console.log(error);
        }
    }

};

module.exports = userServices