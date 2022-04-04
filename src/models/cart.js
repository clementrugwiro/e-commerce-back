import mongoose from "mongoose"


let cartSchema = new mongoose.Schema({
    
    clientID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    quantity:{
        type:Number,
        required: true
    }
   

})

let cart = mongoose.model("carts",cartSchema)
export default cart