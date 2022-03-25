//Initially let the array be empty
let users = [];

//READ
export const getUsers = (req,res)=>{
    res.send(users);
}

//CREATE
export const createUsers = (req,res)=>{
   const user=req.body;
   users.push(user);
   res.send("User successfuly inserted in db");
}

//READ
export const getUser = (req,res)=>{
    const { id } = req.params;
   const foundUser =  users.find((user) => user.tenant_id==id);
   res.send(foundUser);
}

//DELETE
export const deleteUser = (req,res)=>{
    const { id } = req.params;
    users = users.filter((user) => user.tenant_id != id);
    res.send(`User with ${id} deleted`);
}

//UPDATE
export const updateUser = (req,res)=>{
    const { id } = req.params;
    const { Workspace , entity_identity , entity_action , tenant_id} = req.body;
    const user =  users.find((user) => user.tenant_id==id);
    if(Workspace) user.Workspace = Workspace;
    if(entity_identity) user.entity_identity = entity_identity;
    if(entity_action) user.entity_action = entity_action;
    if(tenant_id) user.tenant_id = tenant_id;
    res.send(`User with ${id} updated`);
}