import express from 'express'
import { getUser,getUsers,createUsers,deleteUser,updateUser } from '../controllers/controller.js';

const router = express.Router();

//Routing Logic
router.get("/",getUsers);

router.post("/",createUsers);

router.get("/:id",getUser);

router.delete("/:id",deleteUser);

router.patch("/:id",updateUser);

export default router;