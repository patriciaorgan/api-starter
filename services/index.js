const router= require('express').Router(),
      {userRoutes} = require('./users')


router.use('/users', userRoutes)

module.exports = router
