import express from "express"
import verifyToken from "../middleware/verifytoken.js"
import cloudinary from "../utils/cloudinary.js"
import upload from "../utils/multer.js"
import Product from "../models/product.js"
import productcontroller from "../controllers/productsController.js"

let productroute = express()


 productroute.post('/add', upload.single('image'), async (req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path) 

        const product = new Product ({
            avatar: result.secure_url,
            cloudinary_id : result.public_id,
            name : req.body.name,
            price: req.body.price

        })
        
        await product.save()

        res.json(product)
    } catch (error) {
        console.log(error)
    }

})

productroute.delete('/delete/:id', productcontroller.deleteproduct)

productroute.get('/getall',verifyToken ,productcontroller.getallproducts)



export default productroute