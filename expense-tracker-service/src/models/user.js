import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
      },
      password : {
        type : String,
        required : true
      },
      group: {
        type: Schema.Types.ObjectId,
        ref: 'group'
      }
  })

  UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
  })
  
  UserSchema.methods.isValidPassword = async function(password){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
  }
  
export default model('user', UserSchema)
