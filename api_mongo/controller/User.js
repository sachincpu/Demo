import User from "../model/User.js"

export const getUsers =  async (req,res) => {
    try{
     const users = await User.find({});
     res.send(users);
    }catch(err){
        res.send(err);
    }
}

export const createUser = async (req,res) => {
    try{
      const users = new User(req.body);
      await users.save();
      res.send("User created");
    }catch(err){
        res.send(err);
    }
}

export const getUser = async (req,res) => {
    try{
     const users = await User.findById(req.params.id);
     res.send(users);
    }catch(err){
        res.send(err);
    }
}

export const updateUser = async (req,res) => {
    try{
     await User.findByIdAndUpdate(req.params.id,req.body);
     await User.save();
     res.send("User updated");
    }catch(err){
        res.send(err);
    }
}

export const deleteUser =  async (req,res) => {
    try{
     const users = await User.findByIdAndDelete(req.params.id);
     if(!users) res.send("No Item found");
     else res.send("User deleted");
    }catch(err){
        res.send(err);
    }
}