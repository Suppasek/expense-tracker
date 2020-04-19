import passport from "passport"
import { Strategy } from "passport-local"
import UserModel from '../models/user'

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt

passport.use('login', new Strategy({
    usernameField : 'username',
    passwordField : 'password'
  }, async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username })
      if( !user ){
       return done(null, false, { message : 'User not found'})
     }
      const validate = await user.isValidPassword(password)
      if( !validate ){
        return done(null, false, { message : 'Wrong Password'})
      }
      return done(null, user, { message : 'Logged in Successfully'})
    } catch (error) {
      return done(error)
    }
  }))

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey   : process.env.SECRET
},
async (jwtPayload, done) => {
  try {
    const user = await UserModel.findById(jwtPayload.id).populate('group')
    return done(null, user)
  } catch (error) {
    return done(error)
  }
}
))
