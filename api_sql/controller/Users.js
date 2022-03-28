import User from "../model/Users.js";

export const getUsers = async (req,res) => {
   try{
       const user = await User.findAll();
       res.send(user);
   }catch(err){
       res.send(err);
   }
}

export const getUser = async (req,res) => {
  try{
    const user = await User.findAll({
        where:{
            id:req.params.id
        }
    });
    res.send(user[0]);
  }catch(err){
      res.send(err);
  }
}

export const createUser = async (req,res) => {
    try{
       await User.create(req.body);
       res.send("User created");
    }catch(err){
        res.send(err);
    }
}

export const updateUser = async (req,res) => {
    try{
        const user = await User.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.send("user updated");
      }catch(err){
          res.send(err);
      }
}

export const deleteUser = async (req,res) => {
    try{
        const user = await User.destroy({
            where:{
                id:req.params.id
            }
        });
        res.send("user deleted");
      }catch(err){
          res.send(err);
      }
}