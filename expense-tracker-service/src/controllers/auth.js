import passport from 'passport'
import jwt from 'jsonwebtoken'
import UserModel from '../models/user'
import GroupModel from '../models/group'

export const register = async (req, res) => {
    const { username, password, refId } = req.body

    const existingUser = await UserModel.findOne({ username })
    if (existingUser) {
      res.status(400).send('username has been already taken')
    }

    if (refId) {
        await UserModel.create({ username, password, group: refId })
        res.sendStatus(200)
    } else {
        const group = await GroupModel.create({ name: username })
        await UserModel.create({ username, password, group: group._id })
        res.sendStatus(200)
    }
}

export const login = async (req, res) => {
    passport.authenticate('login', async (err, user, info) => {     
        try {
        if(err || !user) {
          res.status(401).send('Incorrect username or password')
        }
        req.login(user, { session : false }, async (error) => {
          if( error ) res.status(401).send('Incorrect username or password')
          const body = { id : user._id, username : user.username }
          const token = jwt.sign({ ...body }, process.env.SECRET)
          return res.send({ token })
        })     } catch (error) {
        return  res.status(401).send('Incorrect username or password')
      }
    })(req, res)
}
