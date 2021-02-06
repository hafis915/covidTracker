const router = require('express').Router()
const userRoute = require("./user")
const victimRoute = require("./victim")

router.use('/user', userRoute)
router.use('/victim', victimRoute)

module.exports = router