const passport = require('passport'),
      LocalStrategy = require('passport-local'),
      {ExtractJwt,Strategy} = require('passport-jwt'),
      TwitterStrategy = require('passport-twitter'),
      FacebookStrategy =  require('passport-facebook'),
      {OAuth2Strategy} = require('passport-google-oauth'),
      {compareSync} =require('bcryptjs'),
      {jwt, fb, twitter, google} = require('../../config')



module.exports = User => {

  passport.use('local',new LocalStrategy( (username, password, done)=> User.findOne({username})
      .then(userFromDB => compareSync(password, userFromDB.password)  ? done(null, userFromDB): done(null, false))
      .catch(e=>done(e))))

  passport.use('jwt',new Strategy(jwt, (payload, done) => User.findById(payload._id)
    .select('-password')
    .then(userFromDB => userFromDB ? done(null, userFromDB  ) : done(null, false)  )))

  passport.use('facebook', new FacebookStrategy(fb, (accessToken, refreshToken, profile, done)=>done(null, profile)))
  passport.use('twitter', new TwitterStrategy(twitter, (token, tokenSecret, profile, done)=>done(null, profile)))
  passport.use('google', new OAuth2Strategy(google, (accessToken, refreshToken, profile, done)=>done(null, profile)))
  passport.serializeUser((user, done)=>done(null, user))
  passport.deserializeUser((user, done)=>done(null, user))

}
