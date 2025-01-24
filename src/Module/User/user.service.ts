import { IUser } from "./user.Interface";
import User from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};
const getUsers = async () => {
  const result = await User.find({});
  return result;
};
const getUserById = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

export const userService = {
  createUser,
  getUsers,
  getUserById,
};
