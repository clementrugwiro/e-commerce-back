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
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        default: "client"
    }
})

let User = mongoose.model("User",UserSchema)
export default User;