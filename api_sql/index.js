import exp from "constants";
import express from "express"
import db from "./config/databse.js"
import router from "./route/routes.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/users",router);

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(8000,()=>{
    console.log("Server started");
})

