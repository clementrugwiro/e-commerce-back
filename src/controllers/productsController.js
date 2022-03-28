import product from "../models/product.js"

class productcontroller{

    static async getallproducts(req, res){
        const products = await product.find()
        if(!products){
            return res.status(200).json({message: "no products to retrieve."})
        }

       return res
       .status(200)
       .json({
        message:"successful retrieved all products",
        data: products
       })
    }
    static async deleteproduct(res,req){
       const aproduct = await product.findByIdAndDelete(req.params.id)  
        const productId = aproduct.cloudinary_id
        cloudinary.uploader.destroy(productId);
        if(!aproduct){
            return res.status(200).json({message: "no products to retrieve."})
        }
        return res
       .status(200)
       .json({
        message:"successfully deleted product",
        data: aproduct
       })
    }
}

export default productcontroller