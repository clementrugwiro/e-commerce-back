import mongoose from "mongoose"


let wishlistSchema = new mongoose.Schema({
    
    clientID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
})

let wishlist = mongoose.model("wishlists",wishlistSchema)
export default wishlist