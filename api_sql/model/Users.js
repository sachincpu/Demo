import { Sequelize } from "sequelize";

import db from '../config/databse.js'

const { DataTypes } =  Sequelize;

const User = db.define('users', {
  tenant_id:{
    type: DataTypes.String
  },
  entity_type:{
     type: DataTypes.String
  },
  entity_identity:{
    type: DataTypes.String
  },
  entity_action:{
    type: DataTypes.String
  },
  entity_execution_identity:{
    type: DataTypes.String
  }, 
  entity_execution_action:{
    type: DataTypes.String
  },
  metadata:{
    type:DataTypes.Object
  }
  },
  {
    // Freeze Table Name
    freezeTableName: true
  });

  export default User;