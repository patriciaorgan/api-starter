const {ExtractJwt}  = require('passport-jwt')
const {SECRET, PORT, MONGOURI, URI}  =  process.env

module.exports = {
    fb : {
      clientID: '453448938193772',
      clientSecret: "31a0469fca1b5146ff6060c21a09ff58",
      callbackURL: `http://${ URI ||'127.0.0.1'}:3090/api/users/facebook/callback`,
      profileFields: ['id', 'name','picture.type(large)', 'emails', 'displayName', 'about', 'gender'],
    },

    twitter : {
      consumerKey : '8NzqanukBtp56F96M369QaEl9',
      consumerSecret: 'GFfVBHrQ5XFx0zHpqDo1Vl0daQrmXizLQioj3utIco1T3nmmYz',
      callbackURL  : `http://${ URI ||'127.0.0.1'}:3090/api/users/twitter/callback`
    },

    google : {
      clientID      : '436112539080-2g27gs8kktsbfrb3jrd03ritrdj4agd1.apps.googleusercontent.com',
      clientSecret  : 'FKnu_sDipwbw6PBSEz3QRRzy',
      callbackURL   : `http://${ URI ||'127.0.0.1'}:3090/api/users/google/callback`
    },

    jwt : {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: SECRET || 'secret'
    },
    port: PORT ||3090,
    mongoURI: MONGOURI || 'mongodb://localhost/test',

}
