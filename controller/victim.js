const {Victim} = require("../models")

class VictimController {

    static async AddNewVictim(req,res,next){
        try {
            const {
                name,
                age,
                region,
                photo_url,
                gender
            } = req.body
            const newData = {
                name,
                age,
                region,
                photo_url,
                gender
            }

            const newVictim = await Victim.create(newData)
            res.status(200).json(newVictim)
        } catch (error) {
            next(error)
        }
    }

    static async getAllVictim(req,res,next) {
        try {
            const victims = await Victim.findAll()
            res.status(200).json({victims})
        } catch (error) {
            next(error)
        }
    }

    static async getVitimById(req,res,next) {
        try {
            const id = req.params.id
            const victim = await Victim.findOne({
                where : {
                    id
                }
            })
            if(!victim) {
                throw {
                    status : 404,
                    msg : "data not found"
                }
            }
            res.status(200).json(victim)
        } catch (error) {
            next(error)
        }
    }

    static async updateVictim(req,res,next) {
        try {
            const id = req.params.id
            const {
                name,
                age,
                region,
                photo_url,
                gender
            } = req.body
            const newData = {
                name,
                age,
                region,
                photo_url,
                gender
            }

            const updatedVictim = await Victim.update(newData,{
                where : {
                    id
                },
                returning :true
            })

            res.status(200).json(updatedVictim[1][0])
        } catch (error) {
            next(error)
        }
    }

    static async deleteVictim(req,res,next){
        try {
            const id = req.params.id
            const deletedId = await Victim.destroy({
                where : {
                    id
                }
            })
            if(!deletedId) {
                throw {
                    status : 400,
                    msg : 'data not found'
                }
            }
            res.status(200).json({msg : 'succes delete'})
        } catch (error) {
            next(error)
        }
    }

}

module.exports = VictimController