import ExpenseModel from "../models/expense"
import TypeModel from "../models/type"
import moment from 'moment'

export const getExpense = async (req, res) => {
    const { user } = req
    const result = await ExpenseModel.find({   
        group: user.group,      
        month: moment().format('MMM'),
        year: parseInt(moment().format('YYYY')),
    }).sort('-createdAt').populate('createdBy', 'username').populate('type', 'name')
    res.send(result)
}

export const addExpense = async (req, res) => {
    const { description, amount, type } = req.body
    const { user } = req
    const existingType = await TypeModel.find({ name: type })
    let newType
    if (existingType.length === 0) {
        newType = await TypeModel.create({ name: type, group: user.group })
    }
    const result = await ExpenseModel.create({
        description,
        amount,
        month: moment().format('MMM'),
        year: parseInt(moment().format('YYYY')),
        group: user.group,
        type: newType || existingType[0],
        createdBy: user,
        createdAt: moment(),
    })
    res.send(result)
}

export const updateExpense = async (req, res) => {
    const { _id, description, amount, type } = req.body
    const { user } = req
    const existingType = await TypeModel.find({ name: type })
    let newType
    if (existingType.length === 0) {
        newType = await TypeModel.create({ name: type, group: user.group })
    }
    const result = await ExpenseModel.findByIdAndUpdate(_id, {
        description,
        amount,
        type: newType || existingType[0],
    }, { new: true }).populate('createdBy', 'username').populate('type', 'name')
    res.send(result)
}

export const deleteExpense = async (req, res) => {
    const { id } = req.query
    const { user } = req
    const expense = await ExpenseModel.findById(id)
    if (!expense.group.equals(user.group._id))  {
        res.status(401).send('Incorrect group')
        return
    }
    await ExpenseModel.findByIdAndDelete(id)
    res.send(id)
}
