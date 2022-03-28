import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    tenant_id:{
      type: String,
      required:true
    },
    entity_type:{
       type: String
    },
    entity_identity:{
      type: String,
      required:true
    },
    entity_action:{
      type: String
    },
    entity_execution_identity:{
      type: String
    }, 
    entity_execution_action:{
      type: String
    },
    metadata:{
      type:Object
    }  
});

const User = mongoose.model("Users",UserSchema);

export default User;