const router = require('express').Router()
const {UserController} = require('../controller')


router.post('/', UserController.createUser)
router.get('/', UserController.getAllUser)
router.get('/login', UserController.login)
router.get('/:id', UserController.getUserById)

module.exports = router