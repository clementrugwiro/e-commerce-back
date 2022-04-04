import cartController from "../controllers/cartController.js"
import express from "express"
import verifyToken from "../middleware/verifytoken.js"

let cartRoutes = express();

cartRoutes.post("/add",verifyToken , cartController.createCart)
cartRoutes.get("/getall",verifyToken , cartController.getallCart)

export default cartRoutes