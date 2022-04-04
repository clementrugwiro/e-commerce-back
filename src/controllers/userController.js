import user from "../models/user.js"
import bcrypt from "bcryptjs"
import TokenAuth from "../middleware/auth.js";
class usercontroller{

static async userCreate(req,res){
    const auser = new user({
        name: req.body.name,
        email: req.body.email,
        idNumber: req.body.idNumber,
        phoneNumber: req.body.phoneNumber,
        role: req.body.role,
        password: req.body.password
        
    })
    const salt = await bcrypt.genSalt(8);
    const hashpassword = await bcrypt.hash(auser.password, salt);

    auser.password = hashpassword;
    await auser.save();

    if(!auser){
        return res.status(404).json({
            error:"User not registered"
        })
    }
    return res
    .status(200)
    .json({
        message:"user registered successfully" , 
        data: auser
    });
}

static async getAll(req,res){
    const Auser = await user.find()
    if(!Auser){
        return res.status(404).json({
            error:"no users registered"
        })
    }
    return res
    .status(200)
    .json({
        message:"retrieved all users" , 
        data: Auser
    });
}
static async login(req,res){
       const auser = await user.findOne({
      email: req.body.email,
    });

    if (!auser) {
      return res.status(404).json({
        error: "user not found! kindly register first",
      });
    }
    if (bcrypt.compare(req.body.password, auser.password)) {
      auser.password = null;
      const token = TokenAuth.TokenGenerator({ user: auser });
      return res.status(200).json({
        message: "successfully logged in",
        token: token,
        user: auser,
      });
    }
    return res.status(404).json({
      error: "Password incorrect!",
    });
}


}

export default usercontroller