import express from "express";
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controller/user.controller.js";

const router =express.Router();

router.post('/user',createUser)
router.get('/user',getUser)
router.get('/user/:id',getUserById)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

export default router;