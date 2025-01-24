import { Router } from "express";
import { userController } from "./user.controller";

const userRouter = Router();

userRouter.post(`/create-user`, userController.createUser);
userRouter.get(`/users`, userController.getUsers);
userRouter.get(`/user/:id`, userController.getUserById);
export default userRouter;
