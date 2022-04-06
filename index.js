import express from "express";
import bodyParser from "body-parser"
import mongoose from  "mongoose"
import dotenv from "dotenv"
import products from "./src/routes/productRoutes.js"
import user from "./src/routes/userRoutes.js"
import cart from "./src/routes/cartRoutes.js"
import wish from "./src/routes/wishlistRoutes.js"
import review from "./src/routes/reviewsRoutes.js"

dotenv.config("./.env")
let app = express()
const dburl=process.env.MONGODB_URI;

mongoose.connect(dburl,{
   
} ).then(()=>console.log("database connected successfully"))

app.use(bodyParser.json())
// app.use('/', (req,res)=>{
//     res.send("home page")
// })
app.use('/products', products)
app.use('/user', user)
app.use('/cart',cart)
app.use('/review',review)
app.use('/wish',wish)
let port = process.env.PORT

app.listen(port,()=>{
    console.log(`listening at port ${port}...`)
})