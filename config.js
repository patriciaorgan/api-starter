const {ExtractJwt}  = require('passport-jwt'),
      {SECRET,
        PORT,
        URI,
        FB_ID,
        FB_SECRET,
        TWITTER_KEY,
        TWITTER_SECRET,
        GOOGLE_ID,
        GOOGLE_SECRET,
        MONGO_USER,
        MONGO_PASSWORD,
        MONGO_DOMAIN,
        MONGO_DB }  =  process.env

module.exports = {
    fb : {
      clientID: FB_ID,
      clientSecret: FB_SECRET,
      callbackURL: `http://${ URI ||'localhost'}:${PORT}/api/users/facebook/callback`,
      profileFields: ['id', 'name','picture.type(large)', 'emails', 'displayName', 'about', 'gender'],
    },

    twitter : {
      consumerKey : TWITTER_KEY,
      consumerSecret: TWITTER_SECRET,
      callbackURL  : `http://${ URI ||'127.0.0.1'}:${PORT}/api/users/twitter/callback`
    },

    google : {
      clientID      : GOOGLE_ID,
      clientSecret  : GOOGLE_SECRET,
      callbackURL   : `http://${ URI ||'127.0.0.1'}:${PORT}/api/users/google/callback`
    },

    jwt : {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: SECRET || 'secret'
    },
    port: PORT || 3090,
    mongoURI: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DOMAIN}/${MONGO_DB}` || 'mongodb://localhost/api-starter',

}
