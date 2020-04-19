import { Schema, model } from 'mongoose'

const TypeSchema = new Schema({
    name : {
        type : String,
        required : true,
      },
      group: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'group'
      },
  })

export default model('type', TypeSchema)
