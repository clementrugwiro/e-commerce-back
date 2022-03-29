import user from "../models/user.js"

class usercontroller{

static async userCreate(req,res){
    const auser = await user.create(req.body)
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