const express = require('express')
const router = express.Router()

router.use('/admin/users', require('./admin/users'))

module.exports = router
