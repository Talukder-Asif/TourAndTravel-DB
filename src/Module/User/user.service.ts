import { IUser } from "./user.Interface";
import User from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

export const userService = {
  createUser,
};
