import areview from "../models/reviews.js"

class reviewController{
    static async createreview(req,res){
        const review = await areview.create({
            clientID:req.user._id,
            productId:req.body.id,
            review:req.body.review
        })
        if(!review){
            return res.status(404).json({
                error:"cart not created"
            })
        }
        return res.status(200).json({
            message:"the review was added successfuly",
            data: review
        })
    }
    static async getallreview(req,res){
        const review = await areview.find({productId:req.body.id}).populate('productId',['name','price'])
        return res.status(200).json({
            message:"successfully retrieved all reviews",
            data: review
        })
    }
}

export default reviewController