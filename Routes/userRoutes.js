import { Router } from "express";
import { addUser, deleteById, getAllTeam, getUserById, updateById } from "../Controllers/userController.js";


export const userRouter = new Router()

userRouter.get("/users", getAllTeam)
userRouter.get("/users/:id", getUserById)
userRouter.post("/users", addUser)
userRouter.delete("/users/:id", deleteById)
userRouter.put("/users/:id", updateById)


