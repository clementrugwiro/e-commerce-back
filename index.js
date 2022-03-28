import express from "express";
import bodyParser from "body-parser"
import mongoose from  "mongoose"
import dotenv from "dotenv"
import products from "./src/routes/productRoutes.js"

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
let port = process.env.PORT

app.listen(port,()=>{
    console.log(`listening at port ${port}...`)
})