import { Schema, model } from 'mongoose'

const ExpenseSchema = new Schema({
    description : {
        type : String,
      },
      amount : {
        type : Number,
        required : true
      },
      month: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      // for grouping and visualize expense
      type: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'type'
      },
      // for grouping user expense
      group: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'group'
      },
      // for showing who create this expense
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      //for sorting
      createdAt: {
        type: Date,
        required: true,
      }

  })

  
export default model('expense', ExpenseSchema)
