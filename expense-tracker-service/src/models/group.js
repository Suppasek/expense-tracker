import { Schema, model } from 'mongoose'

const GroupSchema = new Schema({
    name : {
        type : String,
        required : true,
      },
      
  })

  
export default model('group', GroupSchema)
