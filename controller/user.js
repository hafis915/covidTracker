const {User} = require('../models')
const {getToken} = require('../helper/jwt')
class UserController {

    static async createUser (req,res,next) {
        const  {
            phoneNumber,
            role,
            regions,
            lat,
            lng
        } = req.body
        const dataUser = {
            phoneNumber,
            role,
            regions,
            lat,
            lng
        }
        console.log(dataUser)
        try {
            const newUser = await User.create(dataUser)

            res.status(200).json(newUser)
        } catch (error) {
            next(error)
        }
    }

    static async getUserById (req,res,next) {
        const id = req.params.id
        try {
            const user = await User.findOne({
                where : {
                    id
                }
            })
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    static async getAllUser(req,res,next) {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

    static async login(req,res,next) {
        const {phoneNumber} = req.body
        try {
            const user = await User.findOne({
                where : {
                    phoneNumber
                }
            })
            if(!user) {
                throw {
                    status : 400,
                    msg : 'wrong input'
                }
            }
            const payload = {
                id : user.id,
                phoneNumber : user.phoneNumber,
                role : user.role
            }
            const token = getToken(payload)

            res.status(200).json({token})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = UserController