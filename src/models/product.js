import mongoose from "mongoose"


let productSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    avatar:{
        type:String,
    },
    cloudinary_id:{
        type:String,
    }

})

let products = mongoose.model("products",productSchema)
export default products