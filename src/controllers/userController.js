import user from "../models/user"

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


}