import sequelize from "sequelize";

const db = new sequelize("sequelize_db","root","",{
    host:"localhost",
    dialect:"mysql"
});

export default db;