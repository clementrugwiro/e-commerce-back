import TokenAuth from "./auth.js";
import auser from "../models/user.js"


const verifyToken = async (req, res, next)=>{
    try{
     const token = req.headers.authorization;
     if(!token){
         return res.status(403).json("A token is required for authentication");
     }
     const data = TokenAuth.decodeToken(token);
     console.log(data)
     const {name}=data;
     if(name === "jsonWebTokenError"){
         return res.status(400).json({error:"invalid token"})
     } 
     if(name==="TokenExpiredError"){
      return res.status(400).json({error:"JWT token is expired"})   
     }  
     req.user= data.data.user;
     console.log(req.user)
     const user = await auser.findById(req.user._id);
     if(!user){
         return res.status(404).json({error:"the user was not found, no authorization"})
     }
     next( )
    }
    catch(err){
        console.log(err)
    }
}

export default verifyToken