const router = require('express').Router(),
      passport = require('passport'),
      createStrategies = require('./createStrategies')

module.exports = (controller, User) =>{

  const {_authenticate, _delete, _get, _getOne, _params, _post, _put,  _user} = controller

  createStrategies(User)

  router.param('_id', _params)

  router.get('/me', passport.authenticate('jwt', {session:false}), _user())
  router.get('/facebook', passport.authenticate('facebook'))
  router.get('/facebook/callback', passport.authenticate('facebook', {session:false}), _user())
  router.get('/twitter', passport.authenticate('twitter'))
  router.get('/twitter/callback', passport.authenticate('twitter'), _user() )
  router.get('/google', passport.authenticate('google',  { scope : ['profile', 'email'] } ))
  router.get('/google/callback', passport.authenticate('google',{session:false}), _user())
  router.post('/authenticate', passport.authenticate('local', {session: false}),  _authenticate)

  router.route('/')
    .post(_post)
    .get(_get)

  router.route('/:_id')
    .get(_getOne)
    .put(passport.authenticate('jwt', {session:false}) ,_put)
    .delete(passport.authenticate('jwt', {session:false}), _delete)

  return router
}
