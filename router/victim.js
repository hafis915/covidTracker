const router = require('express').Router()
const {VictimController}  = require('../controller')


router.post('/', VictimController.AddNewVictim)
router.get('/', VictimController.getAllVictim)
router.get('/:id', VictimController.getVitimById)
router.put('/:id', VictimController.updateVictim)
router.delete('/:id', VictimController.deleteVictim)

module.exports = router