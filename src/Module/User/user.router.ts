import { Router } from "express";
import { userController } from "./user.controller";

const userRouter = Router();

userRouter.post(`/create-user`, userController.createUser);
userRouter.get(`/`, userController.getUsers);
userRouter.get(`/:id`, userController.getUserById);
userRouter.get(`/update/:id`, userController.updateUser);
userRouter.get(`/delete/:id`, userController.deleteUser);
export default userRouter;
