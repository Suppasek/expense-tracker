import express from 'express'
import register from './register'
import login from './login'
import expense from './expense'
import group from './group'
import type from './type'

const router = express.Router()

router.use('/register', register)
router.use('/login', login)
router.use('/expenses', expense)
router.use('/group', group)
router.use('/type', type)

export default router