const userServices = require('../../services/userServices');
const bcrypt = require('bcrypt')


const apiUsers = {
    getAllUsers : async (req, res)=>{
        try {
            const users = await userServices.getAllUsers()
            console.log(users);
            return res.status(200).json(
                {
                    meta:{
                        status:200,
                        success: true,
                        url: req.originalUrl,
                        count: users.length
                    },
                    data:users
                }
            )
        } catch (error) {
            return res.status(500).json({
                error:{
                    status: 500,
                    success:false,
                    message:'Server Internal Error',
                    details:error.message
                }
            })
        }
    } ,
    getUser : async (req, res)=>{
        try {
            // esto esta ok? email en vez de id
            const {userId} = req.params       
            const user = await userServices.getUserById(userId)
            if(user == null){
                return res.status(404).json(
                    {
                        meta:{
                            status:404,
                            success: false,
                            url: req.originalUrl,
                        },
                        error:{
                            message:'User not found'
                        }
                    }
                )    
            }
            return res.status(200).json(
                {
                    meta:{
                        status:200,
                        success: true,
                        url: req.originalUrl,
                    },
                    data:user
                }
            )
        } catch (error) {
            return res.status(500).json({
                error:{
                    status: 500,
                    success:false,
                    message:'Server Internal Error',
                    details:error.message
                }
            })
        }
    },
    createUser: async (req, res)=>{
        try {
            const body = req.body;
            // esto de abajo lo agregue por la pass pero no se si hace falta
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
        const newUser = await userServices.userCreate(data);
        return res.status(200).json(
            {
                meta:{
                    status:200,
                    success: true,
                    url: req.originalUrl,
                },
                data:newUser
            }
        )
        } catch (error) {
            return res.status(500).json({
                error:{
                    status: 500,
                    success:false,
                    message:'Server Internal Error',
                    details:error.message
                }
            })
        }
    },
    updateUser: async(req, res) =>{
        try {
          const {userId} = req.params
          let body = req.body;
          let passBcrypt = bcrypt.hashSync(body.password,10)
          let data = {
            first_name: body.first_name,
            last_name: body.last_name,
            address: body.address,
            cell: body.cell? body.cell : null,
            email: body.email,
            password: passBcrypt,
            image: req.file ? req.file.filename : 'usuarioDefault.png'
          };
          await userServices.userUpdate(userId, data);
          return res.status(200).json(
            {
                meta:{
                    status:200,
                    success: true,
                    url: req.originalUrl,
                },
                message:'User updated succesfully'
            }
        )
        } catch (error) {
            return res.status(500).json({
                error:{
                    status: 500,
                    success:false,
                    message:'Server Internal Error',
                    details:error.message
                }
            })
        }
      },
      deleteUser: async(req, res)=> {
        try {
          await userServices.userDelete(req.params.id);
          return res.status(200).json(
            {
                meta:{
                    status:200,
                    success: true,
                    url: req.originalUrl,
                },
                message:'User deleted succesfully'
            })
        } catch (error) {
          return res.status(500).json({
                error:{
                    status: 500,
                    success:false,
                    message:'Server Internal Error',
                    details:error.message
                }
            })
        }
    
      },
      userList: async (req, res)=>{
        try {
            console.log(req.query);
            const {page, countUsers} = req.query    
            console.log(page,countUsers);
            const users = await userServices.userList(page,countUsers);
            return res.status(200).json(
                {
                    meta:{
                        status:200,
                        success: true,
                        url: req.originalUrl,
                        length: users.length

                    },
                    data:users
                })
        } catch (error) {
            console.log(error);
        }
      },
      };

module.exports = apiUsers;