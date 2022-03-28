import mongoose from "mongoose"

let UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    idNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }


})

let User = mongoose.model("User",UserSchema)
export default User;