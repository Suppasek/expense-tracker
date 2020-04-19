import express from 'express'
import passport from 'passport'
import { getInviteLink } from '../controllers/group'

const router = express.Router()

router.get('/inviteLink',  passport.authenticate('jwt', { session : false }), getInviteLink)

export default router
