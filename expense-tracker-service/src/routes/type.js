import express from 'express'
import passport from 'passport'
import { getType } from '../controllers/type'

const router = express.Router()

router.get('/', passport.authenticate('jwt', { session : false }), getType)

export default router
