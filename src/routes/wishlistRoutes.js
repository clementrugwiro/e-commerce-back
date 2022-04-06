import wishlistController from "../controllers/wishlistcontroller.js"
import express from "express"
import verifyToken from "../middleware/verifytoken.js"

let wishlistRoutes = express();

wishlistRoutes.post("/add",verifyToken , wishlistController.createwishlist)
wishlistRoutes.get("/getall",verifyToken , wishlistController.getallwishlist)

export default wishlistRoutes