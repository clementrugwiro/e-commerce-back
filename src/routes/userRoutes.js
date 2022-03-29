import express  from "express";
import usercontroller from "../controllers/userController.js"


let userRoute = express()

userRoute.post("/add", usercontroller.userCreate)
userRoute.get("/getall", usercontroller.getAll)
userRoute.post("/login", usercontroller.login)


export default userRoute