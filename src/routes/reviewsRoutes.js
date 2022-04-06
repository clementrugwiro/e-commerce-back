import reviewController from "../controllers/reviewcontroller.js"
import express from "express"
import verifyToken from "../middleware/verifytoken.js"

let reviewRoutes = express();

reviewRoutes.post("/add",verifyToken , reviewController.createreview)
reviewRoutes.get("/getall",verifyToken , reviewController.getallreview)

export default reviewRoutes