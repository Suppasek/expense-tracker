import express from 'express'
import passport from 'passport'
import { getExpense, addExpense, updateExpense, deleteExpense } from '../controllers/expense'

const router = express.Router()

router.get('/', passport.authenticate('jwt', { session : false }), getExpense)
router.post('/', passport.authenticate('jwt', { session : false }), addExpense)
router.put('/', passport.authenticate('jwt', { session : false }), updateExpense)
router.delete('/', passport.authenticate('jwt', { session : false }), deleteExpense)

export default router
