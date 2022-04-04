import acart from "../models/cart.js"

class cartController{
    static async createCart(req,res){
        const cart = await acart.create({
            clientID:req.user._id,
            productId:req.body.id,
            quantity:req.body.quantity
        })
        if(!cart){
            return res.status(404).json({
                error:"cart not created"
            })
        }
        return res.status(200).json({
            message:"the cart was created successfuly",
            data: cart
        })
    }
    static async getallCart(req,res){
        const cart = await acart.find({clientID:req.user._id}).populate('productId',['name','price'])
        return res.status(200).json({
            message:"successfully retrieved the cart",
            data: cart
        })
    }
}

export default cartController