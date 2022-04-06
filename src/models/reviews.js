import mongoose from "mongoose"


let reviewsSchema = new mongoose.Schema({
    
    clientID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    review:{
        type:String,
        required: true
    }
   

})

let reviews = mongoose.model("reviews",reviewsSchema)
export default reviews