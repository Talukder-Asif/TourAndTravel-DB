//Req and Res manage

import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userService.createUser(payload);

    res.json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: (error as Error).message,
    });
  }
};

export const userController = {
  createUser,
};
