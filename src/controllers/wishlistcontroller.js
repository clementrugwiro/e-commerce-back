import awishlist from "../models/wishlist.js"

class wishlistController{
    static async createwishlist(req,res){
        const wishlist = await awishlist.create({
            clientID:req.user._id,
            productId:req.body.id,
        })
        if(!wishlist){
            return res.status(404).json({
                error:"wishlist not created"
            })
        }
        return res.status(200).json({
            message:"the wishlist was created successfuly",
            data: wishlist
        })
    }
    static async getallwishlist(req,res){
        const wishlist = await awishlist.find({clientID:req.user._id}).populate('productId',['name','price'])
        return res.status(200).json({
            message:"successfully retrieved the wishlist",
            data: wishlist
        })
    }
}

export default wishlistController