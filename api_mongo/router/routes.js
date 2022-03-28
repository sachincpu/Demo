import express from "express"
import { getUser,getUsers,createUser,updateUser,deleteUser } from "../controller/User.js";

const router = express.Router();

router.get("/",getUsers);

router.post("/",createUser);

router.get("/:id",getUser);

router.patch("/:id",updateUser);

router.delete("/:id",deleteUser);

export default router;

