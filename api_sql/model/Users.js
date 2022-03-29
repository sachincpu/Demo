import { Sequelize } from "sequelize";

import db from '../config/databse.js'

const { DataTypes } =  Sequelize;

const User = db.define('users', {
  tenant_id:{
    type: DataTypes.STRING
  },
  entity_type:{
     type: DataTypes.STRING
  },
  entity_identity:{
    type: DataTypes.STRING
  },
  entity_action:{
    type: DataTypes.STRING
  },
  entity_execution_identity:{
    type: DataTypes.STRING
  }, 
  entity_execution_action:{
    type: DataTypes.STRING
  },
  metadata:{
    type:DataTypes.JSON
  }
  },
  {
    // Freeze Table Name
    freezeTableName: true
  });

  export default User;