import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
    {  
        username: String,
        name: String,
        avatar: String,
        email: String,
        password: String,
        role:String

},
{ 
    timestamps: true
 }
)
export default models.User || model('User', userSchema)